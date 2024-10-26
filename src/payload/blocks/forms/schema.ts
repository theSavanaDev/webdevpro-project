import { FixedToolbarFeature, lexicalEditor } from "@payloadcms/richtext-lexical";

import type { Block } from "payload";

export const Forms: Block = {
	slug: "forms",
	interfaceName: "Forms",
	labels: {
		singular: "Form Block",
		plural: "Forms Block",
	},
	fields: [
		{
			name: "form",
			label: "Form",
			type: "relationship",
			relationTo: "forms",
			required: true,
		},
		{
			name: "enableContent",
			label: "Enable Introductory Content",
			type: "checkbox",
			defaultValue: false,
		},
		{
			name: "content",
			label: "Introductory Content",
			type: "richText",
			editor: lexicalEditor({
				features: ({ rootFeatures }) => {
					return [...rootFeatures, FixedToolbarFeature()];
				},
			}),
			admin: {
				condition: (_, siblingData) => siblingData.enableContent,
			},
		},
	],
};
