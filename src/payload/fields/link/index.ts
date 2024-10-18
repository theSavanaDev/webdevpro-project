import deepMerge from "@/lib/deep-merge";

import type { Field } from "payload";

export type LinkAppearances = "default" | "outline";

export const appearanceOptions: Record<LinkAppearances, { label: string; value: string }> = {
	default: {
		label: "Default",
		value: "default",
	},
	outline: {
		label: "Outline",
		value: "outline",
	},
};

type LinkType = (options?: { appearances?: LinkAppearances[] | false; disableLabel?: boolean; overrides?: Record<string, unknown> }) => Field;

export const link: LinkType = ({ appearances, disableLabel = false, overrides = {} } = {}) => {
	const linkResult: Field = {
		name: "link",
		type: "group",
		admin: {
			hideGutter: true,
		},
		fields: [
			{
				type: "row",
				fields: [
					{
						name: "type",
						type: "radio",
						defaultValue: "reference",
						options: [
							{
								label: "Internal link",
								value: "reference",
							},
							{
								label: "Custom URL",
								value: "custom",
							},
						],
						admin: {
							layout: "horizontal",
							width: "50%",
						},
					},
					{
						name: "newTab",
						label: "Open in new tab",
						type: "checkbox",
						admin: {
							style: {
								alignSelf: "flex-end",
							},
							width: "50%",
						},
					},
				],
			},
		],
	};

	const linkTypes: Field[] = [
		{
			name: "reference",
			label: "Document to link to",
			type: "relationship",
			relationTo: ["pages"],
			required: true,
			maxDepth: 1,
			admin: {
				condition: (_, siblingData) => siblingData?.type === "reference",
			},
		},
		{
			name: "url",
			label: "Custom URL",
			type: "text",
			required: true,
			admin: {
				condition: (_, siblingData) => siblingData?.type === "custom",
			},
		},
	];

	if (!disableLabel) {
		linkTypes.map((linkType) => ({
			...linkType,
			admin: {
				...linkType.admin,
				width: "50%",
			},
		}));

		linkResult.fields.push({
			type: "row",
			fields: [
				...linkTypes,
				{
					name: "label",
					label: "Label",
					type: "text",
					required: true,
					admin: {
						width: "50%",
					},
				},
			],
		});
	} else {
		linkResult.fields = [...linkResult.fields, ...linkTypes];
	}

	if (appearances !== false) {
		let appearanceOptionsToUse = [appearanceOptions.default, appearanceOptions.outline];

		if (appearances) {
			appearanceOptionsToUse = appearances.map((appearance) => appearanceOptions[appearance]);
		}

		linkResult.fields.push({
			name: "appearance",
			type: "select",
			defaultValue: "default",
			options: appearanceOptionsToUse,
			admin: {
				description: "Choose how the link should be rendered.",
			},
		});
	}

	return deepMerge(linkResult, overrides);
};
