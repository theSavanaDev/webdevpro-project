import { FixedToolbarFeature, HTMLConverterFeature, lexicalEditor, lexicalHTML } from "@payloadcms/richtext-lexical";

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
		{
			name: "content",
			label: false,
			type: "richText",
			required: true,
			editor: lexicalEditor({
				features: ({ rootFeatures }) => {
					return [...rootFeatures, FixedToolbarFeature(), HTMLConverterFeature({})];
				},
			}),
		},
		/* converts the referenced lexical richText field into HTML */
		lexicalHTML("content", { name: "content_html" }),
	],
};
