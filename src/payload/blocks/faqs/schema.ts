import { FixedToolbarFeature, lexicalEditor } from "@payloadcms/richtext-lexical";

import type { Block } from "payload";

export const Faqs: Block = {
	slug: "faqs",
	interfaceName: "FAQS",
	labels: {
		singular: "FAQs Block",
		plural: "FAQs Block",
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
