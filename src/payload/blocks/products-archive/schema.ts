import { FixedToolbarFeature, lexicalEditor } from "@payloadcms/richtext-lexical";

import { Block } from "payload";

export const ProductsArchive: Block = {
	slug: "productsArchive",
	interfaceName: "ProductsArchive",
	labels: {
		singular: "Product Archive Block",
		plural: "Products Archive Block",
	},
	fields: [
		{
			name: "content",
			label: "Introductory Content",
			type: "richText",
			editor: lexicalEditor({
				features: ({ rootFeatures }) => {
					return [...rootFeatures, FixedToolbarFeature()];
				},
			}),
		},
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
			defaultValue: "products",
			options: [
				{
					label: "Products",
					value: "products",
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
			relationTo: ["products"],
			hasMany: true,
			admin: {
				condition: (_, siblingData) => siblingData.populateBy === "selection",
			},
		},
	],
};
