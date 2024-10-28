import { FixedToolbarFeature, lexicalEditor } from "@payloadcms/richtext-lexical";

import type { Block } from "payload";

export const PricingPlans: Block = {
	slug: "pricingPlans",
	interfaceName: "PricingPlans",
	labels: {
		singular: "Pricing Plans Block",
		plural: "Pricing Plans Blocks",
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
