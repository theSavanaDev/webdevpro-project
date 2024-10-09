import { anyone } from "@/payload/access/anyone";
import { authenticated } from "@/payload/access/authenticated";

import type { CollectionConfig } from "payload";

const Plans: CollectionConfig = {
	slug: "plans",
	labels: {
		singular: "Plan",
		plural: "Plans",
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
			name: "featured",
			label: "Featured Plan",
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
	],
};

export default Plans;
