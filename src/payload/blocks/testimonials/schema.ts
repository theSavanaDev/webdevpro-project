import { FixedToolbarFeature, lexicalEditor } from "@payloadcms/richtext-lexical";

import type { Block } from "payload";

export const Testimonials: Block = {
	slug: "testimonials",
	interfaceName: "Testimonials",
	labels: {
		singular: "Testimonial Block",
		plural: "Testimonials Block",
	},
	fields: [
		{
			name: "caption",
			label: "Introductory Content",
			type: "richText",
			editor: lexicalEditor({
				features: ({ rootFeatures }) => {
					return [...rootFeatures, FixedToolbarFeature()];
				},
			}),
		},
	],
};
