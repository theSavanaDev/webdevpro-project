import { Block } from "payload";

export const Hero: Block = {
	slug: "hero",
	labels: {
		singular: "Hero Section",
		plural: "Hero Sections",
	},
	fields: [
		{
			name: "type",
			label: "Type",
			type: "select",
			required: true,
			defaultValue: "subpage",
			options: [
				{ label: "Homepage Hero", value: "homepage" },
				{ label: "Subpage Hero", value: "subpage" },
			],
		},
		{
			name: "title",
			label: "Title",
			type: "text",
			required: true,
		},
		{
			name: "message",
			label: "Message",
			type: "textarea",
			required: false,
		},
		{
			name: "coverImage",
			label: "Cover Image",
			type: "upload",
			relationTo: "media",
			required: true,
		},
	],
};
