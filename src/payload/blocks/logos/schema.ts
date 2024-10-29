import { FixedToolbarFeature, lexicalEditor } from "@payloadcms/richtext-lexical";

import type { Block } from "payload";

export const Logos: Block = {
	slug: "logos",
	interfaceName: "Logos",
	labels: {
		singular: "Logos Block",
		plural: "Logos Block",
	},
	fields: [
		{
			name: "caption",
			label: "Introductory Content",
			type: "richText",
			editor: lexicalEditor({
				features: ({ rootFeatures }) => {
					return [...rootFeatures, FixedToolbarFeature()];
				},
			}),
		},
	],
};
