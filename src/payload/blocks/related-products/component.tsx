import { Container } from "@/components/container";
import { ProductsCard } from "@/components/products-card";
import { RichText } from "@/components/rich-text";

import type { Product } from "@/payload-types";

export type RelatedProductsProps = {
	className?: string;
	docs?: Product[];
	introContent?: any;
};

export const RelatedProducts = (props: RelatedProductsProps) => {
	const { docs, introContent } = props;

	return (
		<Container className="py-16">
			{introContent && <RichText content={introContent} enableGutter={false} />}

			<div className="grid grid-cols-1 items-stretch gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
				{docs?.map((doc, index) => {
					if (typeof doc === "string") return null;

					return <ProductsCard key={index} doc={doc} relationTo="products" showCategories />;
				})}
			</div>
		</Container>
	);
};
