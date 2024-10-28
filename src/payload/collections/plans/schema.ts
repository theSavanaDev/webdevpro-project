import { slugField } from "@/payload/fields/slug";

import { anyone } from "@/payload/access/anyone";
import { authenticated } from "@/payload/access/authenticated";

import type { CollectionConfig } from "payload";

const Plans: CollectionConfig = {
	slug: "plans",
	labels: {
		singular: "Pricing Plan",
		plural: "Pricing Plans",
	},
	admin: {
		defaultColumns: ["title", "price", "createdAt", "updatedAt"],
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
			name: "title",
			label: "Title",
			type: "text",
			required: true,
		},
		{
			name: "perks",
			label: "Perks",
			type: "array",
			minRows: 1,
			maxRows: 8,
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
			name: "additionalPerks",
			label: "Additional Perks",
			type: "array",
			minRows: 1,
			maxRows: 5,
			fields: [
				{
					name: "description",
					label: "Description",
					type: "text",
				},
			],
		},
		...slugField(),
		{
			name: "price",
			label: "Price",
			type: "number",
			admin: {
				position: "sidebar",
			},
		},
		{
			name: "featured",
			label: "Featured Plan",
			type: "checkbox",
			admin: {
				position: "sidebar",
			},
		},
	],
	versions: {
		drafts: {
			autosave: {
				interval: 100, // set this interval for optimal live preview
			},
		},
		maxPerDoc: 50,
	},
};

export default Plans;
