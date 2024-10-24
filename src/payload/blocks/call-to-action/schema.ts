import { FixedToolbarFeature, lexicalEditor } from "@payloadcms/richtext-lexical";

import { linkGroup } from "@/payload/fields/link-group";

import type { Block } from "payload";

export const CallToAction: Block = {
	slug: "cta",
	labels: {
		singular: "Call to Action Block",
		plural: "Calls to Action Blocks",
	},
	fields: [
		{
			name: "richText",
			label: false,
			type: "richText",
			editor: lexicalEditor({
				features: ({ rootFeatures }) => {
					return [...rootFeatures, FixedToolbarFeature()];
				},
			}),
		},
		linkGroup({
			appearances: ["default", "outline"],
			overrides: { maxRows: 2 },
		}),
	],
};
