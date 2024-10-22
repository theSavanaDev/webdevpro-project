import { FixedToolbarFeature, HTMLConverterFeature, lexicalEditor, lexicalHTML } from "@payloadcms/richtext-lexical";

import { Block } from "payload";

export const Archive: Block = {
	slug: "archive",
	interfaceName: "Archive",
	labels: {
		singular: "Archive Block",
		plural: "Archive Blocks",
	},
	fields: [
		{
			name: "introContent",
			label: "Introductory Content",
			type: "richText",
			editor: lexicalEditor({
				features: ({ rootFeatures }) => {
					return [...rootFeatures, FixedToolbarFeature(), HTMLConverterFeature({})];
				},
			}),
		},
		/* converts the referenced lexical richText field into HTML */
		lexicalHTML("introContent", { name: "introContent_html" }),
		{
			name: "populateBy",
			label: "Populate By",
			type: "select",
			defaultValue: "collection",
			options: [
				{
					label: "Collection",
					value: "collection",
				},
				{
					label: "Individual Selection",
					value: "selection",
				},
			],
		},
		{
			name: "relationTo",
			label: "Collections to Show",
			type: "select",
			defaultValue: "posts",
			options: [
				{
					label: "Posts",
					value: "posts",
				},
			],
			admin: {
				condition: (_, siblingData) => siblingData.populateBy === "collection",
			},
		},
		{
			name: "categories",
			label: "Categories to Show",
			type: "relationship",
			relationTo: "categories",
			hasMany: true,
			admin: {
				condition: (_, siblingData) => siblingData.populateBy === "collection",
			},
		},
		{
			name: "limit",
			label: "Limit",
			type: "number",
			defaultValue: 9,
			admin: {
				condition: (_, siblingData) => siblingData.populateBy === "collection",
				step: 1,
			},
		},
		{
			name: "selectedDocs",
			label: "Selection",
			type: "relationship",
			relationTo: ["posts"],
			hasMany: true,
			admin: {
				condition: (_, siblingData) => siblingData.populateBy === "selection",
			},
		},
	],
};
