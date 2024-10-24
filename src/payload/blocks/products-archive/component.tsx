import { getPayloadHMR } from "@payloadcms/next/utilities";
import config from "@payload-config";

import { Container } from "@/components/container";
import { ProductsCollectionArchive } from "@/components/products-collection-archive";
import { RichText } from "@/components/rich-text";

import type { Product, ProductsArchive as ProductsArchiveBlockProps } from "@/payload-types";

export const ProductsArchiveBlock = async (props: ProductsArchiveBlockProps & { id?: string }) => {
	const { id, categories, introContent, limit: limitFromProps, populateBy, selectedDocs } = props;

	const limit = limitFromProps || 3;

	let products: Product[] = [];

	if (populateBy === "collection") {
		const payload = await getPayloadHMR({ config: config });

		const flattenedCategories = categories?.map((category) => {
			if (typeof category === "object") return category.id;
			else return category;
		});

		const fetchedProducts = await payload.find({
			collection: "products",
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

		products = fetchedProducts.docs;
	} else {
		if (selectedDocs?.length) {
			const filteredSelectedProducts = selectedDocs.map((product) => {
				if (typeof product.value === "object") return product.value;
			}) as Product[];

			products = filteredSelectedProducts;
		}
	}

	return (
		<Container className="my-16" id={`block-${id}`}>
			{introContent && (
				<div className="mb-16">
					<RichText className="ml-0 max-w-[48rem]" content={introContent} enableGutter={false} />
				</div>
			)}
			<ProductsCollectionArchive products={products} />
		</Container>
	);
};
