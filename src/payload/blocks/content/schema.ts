import { FixedToolbarFeature, HTMLConverterFeature, lexicalEditor, lexicalHTML } from "@payloadcms/richtext-lexical";

import { Block } from "payload";

export const Content: Block = {
	slug: "content",
	labels: {
		singular: "Content Block",
		plural: "Content Blocks",
	},
	fields: [
		{
			name: "prose",
			label: false,
			type: "richText",
			editor: lexicalEditor({
				features: ({ rootFeatures }: any) => {
					return [...rootFeatures, FixedToolbarFeature(), HTMLConverterFeature({})];
				},
			}),
		},
		/* converts the referenced lexical richText field into HTML */
		lexicalHTML("prose", { name: "prose_html" }),
	],
};
