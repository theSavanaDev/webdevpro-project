import { FixedToolbarFeature, HTMLConverterFeature, lexicalEditor, lexicalHTML } from "@payloadcms/richtext-lexical";

import type { Block } from "payload";

export const ContentGrid: Block = {
	slug: "contentGrid",
	fields: [
		{
			name: "heading",
			label: "Heading",
			type: "text",
			required: true,
		},
		{
			name: "content",
			label: "Content Elements",
			labels: {
				singular: "Content Element",
				plural: "Content Elements",
			},
			type: "array",
			minRows: 1,
			maxRows: 9,
			fields: [
				{
					name: "prose",
					label: false,
					type: "richText",
					editor: lexicalEditor({
						features: ({ rootFeatures }) => {
							return [...rootFeatures, FixedToolbarFeature(), HTMLConverterFeature({})];
						},
					}),
				},
				/* converts the referenced lexical richText field into HTML */
				lexicalHTML("prose", { name: "prose_html" }),
			],
		},
	],
};
