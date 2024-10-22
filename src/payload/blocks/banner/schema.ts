import { FixedToolbarFeature, lexicalEditor } from "@payloadcms/richtext-lexical";

import type { Block } from "payload";

export const Banner: Block = {
	slug: "banner",
	interfaceName: "Banner",
	labels: {
		singular: "Banner Block",
		plural: "Banner Blocks",
	},
	fields: [
		{
			name: "content",
			label: false,
			type: "richText",
			required: true,
			editor: lexicalEditor({
				features: ({ rootFeatures }) => {
					return [...rootFeatures, FixedToolbarFeature()];
				},
			}),
		},
		{
			name: "style",
			label: "Style",
			type: "select",
			defaultValue: "info",
			required: true,
			options: [
				{ label: "Information", value: "info" },
				{ label: "Warning", value: "warning" },
				{ label: "Error", value: "error" },
				{ label: "Success", value: "success" },
			],
		},
	],
};
