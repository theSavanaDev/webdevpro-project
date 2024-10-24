import { PostsCard } from "@/components/posts-card";
import { Container } from "@/components/container";

import type { Post } from "@/payload-types";

export type Props = {
	posts: Post[];
};

export const PostsCollectionArchive = (props: Props) => {
	const { posts } = props;

	return (
		<Container className="my-16">
			<div>
				<div className="grid grid-cols-4 gap-x-4 gap-y-4 sm:grid-cols-8 lg:grid-cols-12 lg:gap-x-8 lg:gap-y-8 xl:gap-x-8">
					{posts?.map((result, index) => {
						if (typeof result === "object" && result !== null) {
							return (
								<div className="col-span-4" key={index}>
									<PostsCard className="h-full" doc={result} relationTo="posts" showCategories />
								</div>
							);
						}

						return null;
					})}
				</div>
			</div>
		</Container>
	);
};
