"use client";

import { Fragment } from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import useClickableCard from "@/lib/use-clickable-card";

import { Badge } from "@/components/ui/badge";
import { Media } from "@/components/multimedia";

import type { Product } from "@/payload-types";

export const ProductsCard = (props: {
	alignItems?: "center";
	className?: string;
	doc?: Product;
	relationTo?: "products";
	showCategories?: boolean;
	title?: string;
}) => {
	const { card, link } = useClickableCard({});
	const { className, doc, relationTo, showCategories, title: titleFromProps } = props;

	const { slug, categories, meta, title, price } = doc || {};
	const { description, image: metaImage } = meta || {};

	const hasCategories = categories && Array.isArray(categories) && categories.length > 0;
	const titleToUse = titleFromProps || title;
	const sanitizedDescription = description?.replace(/\s/g, " "); // replace non-breaking space with white space
	const href = `/${relationTo}/${slug}`;

	return (
		<article className={cn("overflow-hidden rounded-lg border border-border bg-card hover:cursor-pointer", className)} ref={card.ref}>
			<div className="relative w-full">
				{!metaImage && <div className="">No image</div>}
				{metaImage && typeof metaImage !== "string" && <Media resource={metaImage} size="360px" />}
				<Badge className="absolute right-4 top-4">${price?.toLocaleString()}</Badge>
			</div>

			<div className="p-4">
				{showCategories && hasCategories && (
					<div className="mb-4 text-sm uppercase">
						{showCategories && hasCategories && (
							<div>
								{categories?.map((category, index) => {
									if (typeof category === "object") {
										const { title: titleFromCategory } = category;

										const categoryTitle = titleFromCategory || "Untitled category";

										const isLast = index === categories.length - 1;

										return (
											<Fragment key={index}>
												{categoryTitle}
												{!isLast && <Fragment>, &nbsp;</Fragment>}
											</Fragment>
										);
									}

									return null;
								})}
							</div>
						)}
					</div>
				)}

				{titleToUse && (
					<div className="prose">
						<h3>
							<Link className="not-prose" href={href} ref={link.ref}>
								{titleToUse}
							</Link>
						</h3>
					</div>
				)}

				{description && <div className="mt-2">{description && <p>{sanitizedDescription}</p>}</div>}
			</div>
		</article>
	);
};
