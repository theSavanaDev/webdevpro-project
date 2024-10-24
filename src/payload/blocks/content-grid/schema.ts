import { FixedToolbarFeature, lexicalEditor } from "@payloadcms/richtext-lexical";

import type { Block } from "payload";

export const ContentGrid: Block = {
	slug: "contentGrid",
	labels: {
		singular: "Content Grid Block",
		plural: "Content Grid Blocks",
	},
	fields: [
		{
			name: "introductoryContent",
			label: "Introductory Content",
			type: "richText",
			required: true,
			editor: lexicalEditor({
				features: ({ rootFeatures }) => {
					return [...rootFeatures, FixedToolbarFeature()];
				},
			}),
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
							return [...rootFeatures, FixedToolbarFeature()];
						},
					}),
				},
			],
		},
	],
};
