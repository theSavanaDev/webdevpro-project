import clsx from "clsx";

import { ProductsCard } from "@/components/products-card";
import { RichText } from "@/components/rich-text";

import type { Product } from "@/payload-types";

export type RelatedProductsProps = {
	className?: string;
	docs?: Product[];
	introContent?: any;
};

export const RelatedProducts = (props: RelatedProductsProps) => {
	const { className, docs, introContent } = props;

	return (
		<div className={clsx("container", className)}>
			{introContent && <RichText content={introContent} enableGutter={false} />}

			<div className="grid grid-cols-1 items-stretch gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
				{docs?.map((doc, index) => {
					if (typeof doc === "string") return null;

					return <ProductsCard key={index} doc={doc} relationTo="products" showCategories />;
				})}
			</div>
		</div>
	);
};
