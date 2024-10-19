import deepMerge from "@/lib/deep-merge";

import { link } from "@/payload/fields/link";

import type { ArrayField, Field } from "payload";
import type { LinkAppearances } from "@/payload/fields/link";

type LinkGroupType = (options?: { appearances?: LinkAppearances[] | false; overrides?: Partial<ArrayField> }) => Field;

export const linkGroup: LinkGroupType = ({ appearances, overrides = {} } = {}) => {
	const generatedLinkGroup: Field = {
		name: "links",
		type: "array",
		fields: [link({ appearances })],
	};

	return deepMerge(generatedLinkGroup, overrides);
};
