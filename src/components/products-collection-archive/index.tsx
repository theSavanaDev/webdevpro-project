import { ProductsCard } from "@/components/products-card";
import { Container } from "@/components/container";

import type { Product } from "@/payload-types";

export type Props = {
	products: Product[];
};

export const ProductsCollectionArchive = (props: Props) => {
	const { products } = props;

	return (
		<Container className="my-16">
			<div>
				<div className="grid grid-cols-4 gap-x-4 gap-y-4 sm:grid-cols-8 lg:grid-cols-12 lg:gap-x-8 lg:gap-y-8 xl:gap-x-8">
					{products?.map((result, index) => {
						if (typeof result === "object" && result !== null) {
							return (
								<div className="col-span-4" key={index}>
									<ProductsCard className="h-full" doc={result} relationTo="products" showCategories />
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
