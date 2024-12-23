import { cache } from "react";
import { draftMode } from "next/headers";
import { notFound } from "next/navigation";

import { getPayload } from "payload";
import config from "@payload-config";

import { generateMeta } from "@/lib/generate-meta";
import { RenderBlocks } from "@/payload/blocks/render-blocks";

import type { Metadata } from "next";
import type { Page } from "@/payload-types";

export async function generateStaticParams() {
	const data = await getPayload({ config: config });

	const pages = await data.find({
		collection: "pages",
		draft: false,
		limit: 1000,
		overrideAccess: false,
		select: {
			slug: true,
		},
	});

	const params = pages.docs
		?.filter((doc) => {
			return doc.slug !== "home";
		})
		.map(({ slug }) => {
			return { slug };
		});

	return params;
}

type Args = { params: Promise<{ slug?: string }> };

export default async function Page({ params: paramsPromise }: Args) {
	const { slug = "home" } = await paramsPromise;

	let page: Page | null;

	page = await queryPageBySlug({ slug });

	if (!page) {
		return notFound();
	}

	const { layout } = page;

	return (
		<article className="pb-16 pt-5">
			<RenderBlocks blocks={layout ?? []} />
		</article>
	);
}

export async function generateMetadata({ params: paramsPromise }: Args): Promise<Metadata> {
	const { slug = "home" } = await paramsPromise;

	const page = await queryPageBySlug({ slug });

	return generateMeta({ doc: page });
}

const queryPageBySlug = cache(async ({ slug }: { slug: string }) => {
	const { isEnabled: draft } = await draftMode();

	const parsedSlug = decodeURIComponent(slug);

	const data = await getPayload({ config: config });

	const result = await data.find({
		collection: "pages",
		draft,
		limit: 1,
		overrideAccess: true,
		where: {
			slug: {
				equals: parsedSlug,
			},
		},
	});

	return result.docs?.[0] || null;
});
