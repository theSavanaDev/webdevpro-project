import { FixedToolbarFeature, HeadingFeature, lexicalEditor } from "@payloadcms/richtext-lexical";

import { link } from "@/payload/fields/link";

import type { Block } from "payload";

export const ContentColumns: Block = {
	slug: "contentColumns",
	fields: [
		{
			name: "columns",
			label: "Columns",
			type: "array",
			fields: [
				{
					name: "richText",
					label: false,
					type: "richText",
					editor: lexicalEditor({
						features: ({ rootFeatures }) => {
							return [...rootFeatures, HeadingFeature({ enabledHeadingSizes: ["h2", "h3", "h4"] }), FixedToolbarFeature()];
						},
					}),
				},
				{
					name: "size",
					type: "select",
					defaultValue: "third",
					options: [
						{
							label: "Third [1/3]",
							value: "third",
						},
						{
							label: "Half [1/2]",
							value: "half",
						},
						{
							label: "Full [1/1]",
							value: "full",
						},
					],
				},
				{
					name: "enableLink",
					label: "Enable Link",
					type: "checkbox",
				},
				link({
					overrides: {
						admin: {
							condition: (_: any, siblingData: any) => Boolean(siblingData?.enableLink),
						},
					},
				}),
			],
		},
	],
};
