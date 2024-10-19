import { Block } from "payload";

export const HeroHomepage: Block = {
	slug: "heroHomepage",
	labels: {
		singular: "Homepage Hero",
		plural: "Homepage Heros",
	},
	fields: [
		{
			name: "heroTitle",
			label: "Hero Title",
			type: "text",
			required: false,
		},
		{
			name: "heroMessage",
			label: "Hero Message",
			type: "text",
			required: false,
		},
		{
			name: "heroImage",
			label: "Hero Image",
			type: "upload",
			relationTo: "media",
			required: true,
		},
	],
};
