import { cache } from "react";
import { draftMode } from "next/headers";
import { notFound } from "next/navigation";

import { getPayloadHMR } from "@payloadcms/next/utilities";
import config from "@payload-config";

import { generateMeta } from "@/lib/generate-meta";

import { RichText } from "@/components/rich-text";

import { RelatedPosts } from "@/payload/blocks/related-posts/component";

import { PostHero } from "@/payload/blocks/hero/post-hero";

import type { Metadata } from "next";
import type { Post } from "@/payload-types";

type Args = { params: Promise<{ slug?: string }> };

export async function generateStaticParams() {
	const data = await getPayloadHMR({ config: config });

	const posts = await data.find({
		collection: "posts",
		draft: false,
		limit: 1000,
		overrideAccess: false,
	});

	const params = posts.docs.map(({ slug }) => {
		return { slug };
	});

	return params;
}

export default async function Post({ params: paramsPromise }: Args) {
	const { slug = "" } = await paramsPromise;

	const post: Post | undefined = await queryPostBySlug({ slug });

	if (!post) {
		return notFound();
	}

	return (
		<article className="pb-16 pt-5">
			<PostHero post={post} />

			<div className="flex flex-col items-center gap-4 pt-8">
				<div className="container grid-rows-[1fr] lg:mx-0 lg:grid lg:grid-cols-[1fr_48rem_1fr]">
					<RichText
						className="col-span-3 col-start-1 grid-rows-[1fr] lg:grid lg:grid-cols-subgrid"
						content={post.content}
						enableGutter={false}
					/>
				</div>

				{post.relatedPosts && post.relatedPosts.length > 0 && (
					<RelatedPosts className="mt-12" docs={post.relatedPosts.filter((post) => typeof post === "object")} />
				)}
			</div>
		</article>
	);
}

export async function generateMetadata({ params: paramsPromise }: Args): Promise<Metadata> {
	const { slug = "" } = await paramsPromise;

	const post = await queryPostBySlug({ slug });

	return generateMeta({ doc: post ?? ({} as Post) });
}

const queryPostBySlug = cache(async ({ slug }: { slug: string }) => {
	const { isEnabled: draft } = await draftMode();

	const parsedSlug = decodeURIComponent(slug);

	const data = await getPayloadHMR({ config: config });

	const result = await data.find({
		collection: "posts",
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
