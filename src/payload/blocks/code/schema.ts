import type { Block } from "payload";

export const Code: Block = {
	slug: "code",
	interfaceName: "Code",
	labels: {
		singular: "Code Block",
		plural: "Code Blocks",
	},
	fields: [
		{
			name: "code",
			type: "code",
			label: false,
			required: true,
		},
		{
			name: "language",
			label: "Language",
			type: "select",
			defaultValue: "typescript",
			options: [
				{
					label: "Typescript",
					value: "typescript",
				},
				{
					label: "Javascript",
					value: "javascript",
				},
				{
					label: "CSS",
					value: "css",
				},
			],
		},
	],
};
