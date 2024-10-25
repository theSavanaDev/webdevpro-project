import { Container } from "@/components/container";
import { PostsCard } from "@/components/posts-card";
import { RichText } from "@/components/rich-text";

import type { Post } from "@/payload-types";

export type RelatedPostsProps = {
	className?: string;
	docs?: Post[];
	introContent?: any;
};

export const RelatedPosts = (props: RelatedPostsProps) => {
	const { docs, introContent } = props;

	return (
		<Container className="py-16">
			{introContent && <RichText content={introContent} enableGutter={false} />}

			<div className="grid grid-cols-1 items-stretch gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
				{docs?.map((doc, index) => {
					if (typeof doc === "string") return null;

					return <PostsCard key={index} doc={doc} relationTo="posts" showCategories />;
				})}
			</div>
		</Container>
	);
};
