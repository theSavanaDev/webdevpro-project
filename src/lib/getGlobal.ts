import { unstable_cache } from "next/cache";

import { getPayloadHMR } from "@payloadcms/next/utilities";
import config from "@payload-config";

import type { Config } from "@/payload-types";

type Global = keyof Config["globals"];

const getGlobal = async (slug: Global, depth = 0) => {
	const data = await getPayloadHMR({ config: config });

	const global = await data.findGlobal({ slug, depth });

	return global;
};

// returns a unstable_cache function mapped with the cache tag for the slug
export const getCachedGlobal = (slug: Global, depth = 0) =>
	unstable_cache(async () => getGlobal(slug, depth), [slug], {
		tags: [`global_${slug}`],
	});
