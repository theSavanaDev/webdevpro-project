import { revalidateTag } from "next/cache";

import type { GlobalAfterChangeHook } from "payload";

export const revalidateHeader: GlobalAfterChangeHook = ({ doc, req: { payload } }) => {
	payload.logger.info(`Revalidating header...`);

	revalidateTag("global_header");

	return doc;
};
