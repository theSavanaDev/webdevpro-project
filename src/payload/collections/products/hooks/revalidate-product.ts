import { revalidatePath } from "next/cache";

import type { CollectionAfterChangeHook } from "payload";

import type { Product } from "@/payload-types";

export const revalidateProduct: CollectionAfterChangeHook<Product> = ({ doc, previousDoc, req: { payload } }) => {
	if (doc._status === "published") {
		const path = `/products/${doc.slug}`;

		payload.logger.info(`Revalidating product at ${path}...`);

		revalidatePath(path);
	}

	// if the product was previously published, we need to revalidate the old path
	if (previousDoc._status === "published" && doc._status !== "published") {
		const oldPath = `/products/${previousDoc.slug}`;

		payload.logger.info(`Revalidating old product at ${oldPath}...`);

		revalidatePath(oldPath);
	}

	return doc;
};
