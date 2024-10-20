import { FixedToolbarFeature, HTMLConverterFeature, lexicalEditor, lexicalHTML } from "@payloadcms/richtext-lexical";

import { linkGroup } from "@/payload/fields/link-group";

import type { Block } from "payload";

export const CallToAction: Block = {
	slug: "cta",
	labels: {
		singular: "Call To Action",
		plural: "Calls To Action",
	},
	fields: [
		{
			name: "richText",
			label: false,
			type: "richText",
			editor: lexicalEditor({
				features: ({ rootFeatures }) => {
					return [...rootFeatures, FixedToolbarFeature(), HTMLConverterFeature({})];
				},
			}),
		},
		/* converts the referenced lexical richText field into HTML */
		lexicalHTML("richText", { name: "richText_html" }),
		linkGroup({
			appearances: ["default", "outline"],
			overrides: { maxRows: 2 },
		}),
	],
};
