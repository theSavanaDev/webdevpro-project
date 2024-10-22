import { Block } from "payload";

export const Multimedia: Block = {
	slug: "multimedia",
	labels: {
		singular: "Multimedia Block",
		plural: "Multimedia Blocks",
	},
	fields: [
		{
			name: "position",
			label: "Position",
			type: "select",
			defaultValue: "default",
			options: [
				{
					label: "Default",
					value: "default",
				},
				{
					label: "Full Screen",
					value: "fullscreen",
				},
			],
		},
		{
			name: "media",
			label: "Media",
			type: "upload",
			relationTo: "media",
			required: true,
		},
	],
};
