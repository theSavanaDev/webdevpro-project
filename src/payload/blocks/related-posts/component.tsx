import clsx from "clsx";

import { Card } from "@/components/card";
import { RichText } from "@/components/rich-text";

import type { Post } from "@/payload-types";

export type RelatedPostsProps = {
	className?: string;
	docs?: Post[];
	introContent?: any;
};

export const RelatedPosts = (props: RelatedPostsProps) => {
	const { className, docs, introContent } = props;

	return (
		<div className={clsx("container", className)}>
			{introContent && <RichText content={introContent} enableGutter={false} />}

			<div className="grid grid-cols-1 items-stretch gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
				{docs?.map((doc, index) => {
					if (typeof doc === "string") return null;

					return <Card key={index} doc={doc} relationTo="posts" showCategories />;
				})}
			</div>
		</div>
	);
};
