import { getPayload } from "payload";
import config from "@payload-config";

import { Container } from "@/components/container";
import { PostsCollectionArchive } from "@/components/posts-collection-archive";
import { RichText } from "@/components/rich-text";

import type { Post, PostsArchive as PostsArchiveBlockProps } from "@/payload-types";

export const PostsArchiveBlock = async (props: PostsArchiveBlockProps & { id?: string }) => {
	const { id, categories, content, limit: limitFromProps, populateBy, selectedDocs } = props;

	const limit = limitFromProps || 3;

	let posts: Post[] = [];

	if (populateBy === "collection") {
		const payload = await getPayload({ config: config });

		const flattenedCategories = categories?.map((category) => {
			if (typeof category === "object") return category.id;
			else return category;
		});

		const fetchedPosts = await payload.find({
			collection: "posts",
			depth: 1,
			limit,
			...(flattenedCategories && flattenedCategories.length > 0
				? {
						where: {
							categories: {
								in: flattenedCategories,
							},
						},
					}
				: {}),
		});

		posts = fetchedPosts.docs;
	} else {
		if (selectedDocs?.length) {
			const filteredSelectedPosts = selectedDocs.map((post) => {
				if (typeof post.value === "object") return post.value;
			}) as Post[];

			posts = filteredSelectedPosts;
		}
	}

	return (
		<Container className="my-16" id={`block-${id}`}>
			{content && (
				<div className="mb-16">
					<RichText className="ml-0" content={content} enableGutter={false} />
				</div>
			)}
			<PostsCollectionArchive posts={posts} />
		</Container>
	);
};
