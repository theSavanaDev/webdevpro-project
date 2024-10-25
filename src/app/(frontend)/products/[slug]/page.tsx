import { cache } from "react";
import { draftMode } from "next/headers";
import { notFound } from "next/navigation";

import { getPayloadHMR } from "@payloadcms/next/utilities";
import config from "@payload-config";

import { generateMeta } from "@/lib/generate-meta";

import { Container } from "@/components/container";
import { RichText } from "@/components/rich-text";

import { RelatedProducts } from "@/payload/blocks/related-products/component";

import { ProductHero } from "@/payload/blocks/hero/product-hero";

import type { Metadata } from "next";
import type { Product } from "@/payload-types";

type Args = { params: Promise<{ slug?: string }> };

export async function generateStaticParams() {
	const data = await getPayloadHMR({ config: config });

	const products = await data.find({
		collection: "products",
		draft: false,
		limit: 1000,
		overrideAccess: false,
	});

	const params = products.docs.map(({ slug }) => {
		return { slug };
	});

	return params;
}

export default async function Product({ params: paramsPromise }: Args) {
	const { slug = "" } = await paramsPromise;

	const product: Product | undefined = await queryProductBySlug({ slug });

	if (!product) {
		return notFound();
	}

	return (
		<article className="pb-16 pt-5">
			<ProductHero />
		</article>
	);
}

export async function generateMetadata({ params: paramsPromise }: Args): Promise<Metadata> {
	const { slug = "" } = await paramsPromise;

	const product = await queryProductBySlug({ slug });

	return generateMeta({ doc: product ?? ({} as Product) });
}

const queryProductBySlug = cache(async ({ slug }: { slug: string }) => {
	const { isEnabled: draft } = await draftMode();

	const parsedSlug = decodeURIComponent(slug);

	const data = await getPayloadHMR({ config: config });

	const result = await data.find({
		collection: "products",
		draft,
		limit: 1,
		overrideAccess: draft,
		where: {
			slug: {
				equals: parsedSlug,
			},
		},
	});

	return result.docs?.[0] || null;
});
