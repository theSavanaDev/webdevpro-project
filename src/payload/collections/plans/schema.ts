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
		{
			name: "cta",
			label: "Call to Action",
			type: "group",
			fields: [
				{
					name: "addCTA",
					label: "Add Call to Action",
					type: "checkbox",
					defaultValue: false,
				},
				{
					name: "groupCTA",
					label: false,
					type: "group",
					admin: {
						condition: (_, siblingData) => siblingData?.addCTA,
						hideGutter: true,
					},
					fields: [
						{
							type: "row",
							fields: [
								{
									name: "url",
									label: "URL",
									type: "text",
									admin: {
										width: "50%",
									},
								},
								{
									name: "label",
									label: "Label",
									type: "text",
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
									name: "target",
									label: "Target",
									type: "select",
									options: [
										{
											label: "_blank",
											value: "_blank",
										},
										{
											label: "_self",
											value: "_self",
										},
										{
											label: "_parent",
											value: "_parent",
										},
										{
											label: "_top",
											value: "_top",
										},
									],
									admin: {
										width: "50%",
									},
								},
								{
									name: "variant",
									label: "Variant",
									type: "select",
									defaultValue: "default",
									options: [
										{
											label: "Default",
											value: "default",
										},
										{
											label: "Outline",
											value: "outline",
										},
									],
									admin: {
										width: "50%",
									},
								},
							],
						},
					],
				},
			],
		},
	],
};

export default Plans;
