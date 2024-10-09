import { slugField } from "@/payload/fields/slug";

import { anyone } from "@/payload/access/anyone";
import { authenticated } from "@/payload/access/authenticated";

import type { CollectionConfig } from "payload";

const Products: CollectionConfig = {
	slug: "products",
	labels: {
		singular: "Product",
		plural: "Products",
	},
	admin: {
		defaultColumns: ["title", "description", "price", "createdAt", "updatedAt"],
		useAsTitle: "title",
	},
	access: {
		create: authenticated,
		delete: authenticated,
		read: anyone,
		update: authenticated,
	},
	fields: [
		{
			type: "row",
			fields: [
				{
					name: "title",
					label: "Title",
					type: "text",
					required: true,
					admin: {
						width: "50%",
					},
				},
				{
					name: "price",
					label: "Price",
					type: "number",
					required: true,
					admin: {
						width: "50%",
					},
				},
			],
		},
		{
			type: "row",
			fields: [
				{
					name: "description",
					label: "Description",
					type: "textarea",
					required: true,
					admin: {
						width: "50%",
					},
				},
			],
		},
		...slugField(),
		{
			name: "featured",
			label: "Featured Product?",
			type: "checkbox",
			admin: {
				position: "sidebar",
			},
		},
		{
			name: "perks",
			label: "Perks",
			type: "array",
			minRows: 1,
			maxRows: 5,
			required: true,
			fields: [
				{
					name: "description",
					label: "Description",
					type: "text",
				},
			],
		},
		{
			type: "row",
			fields: [
				{
					name: "plan",
					label: "Related Plan",
					type: "relationship",
					relationTo: "plans",
					hasMany: true,
					admin: {
						width: "50%",
					},
				},
				{
					name: "categories",
					label: "Categories",
					type: "relationship",
					relationTo: "categories",
					hasMany: true,
					admin: {
						width: "50%",
					},
				},
			],
		},
		{
			name: "images",
			label: "Product Image",
			type: "upload",
			relationTo: "media",
			required: true,
			admin: {
				width: "50%",
			},
		},
	],
};

export default Products;
