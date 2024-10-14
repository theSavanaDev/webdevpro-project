import { unstable_cache } from "next/cache";

import { getPayloadHMR } from "@payloadcms/next/utilities";
import config from "@payload-config";

import type { Config } from "@/payload-types";

type Collection = keyof Config["collections"];

const getCollection = async (collection: Collection, slug: string, depth = 0) => {
	const payload = await getPayloadHMR({ config: config });

	const page = await payload.find({
		collection,
		depth,
		where: {
			slug: {
				equals: slug,
			},
		},
	});

	return page.docs[0];
};

// returns a unstable_cache function mapped with the cache tag for the slug
export const getCachedCollection = (collection: Collection, slug: string) =>
	unstable_cache(async () => getCollection(collection, slug), [collection, slug], {
		tags: [`${collection}_${slug}`],
	});
