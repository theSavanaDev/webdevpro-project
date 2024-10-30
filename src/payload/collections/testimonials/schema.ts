import { anyone } from "@/payload/access/anyone";
import { authenticated } from "@/payload/access/authenticated";

import populateFullName from "@/payload/collections/testimonials/hooks/populate-full-name";

import type { CollectionConfig } from "payload";

const Testimonials: CollectionConfig = {
	slug: "testimonials",
	labels: {
		singular: "Testimonial",
		plural: "Testimonials",
	},
	admin: {
		defaultColumns: ["firstName", "lastName", "content", "createdAt"],
		useAsTitle: "fullName",
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
					name: "firstName",
					label: "First Name",
					type: "text",
					admin: {
						width: "50%",
					},
				},
				{
					name: "lastName",
					label: "Last Name",
					type: "text",
					admin: {
						width: "50%",
					},
				},
			],
		},
		{
			name: "job",
			label: "Job Title",
			type: "text",
		},
		{
			name: "image",
			label: "Customer Photo",
			type: "upload",
			relationTo: "media",
		},
		{
			name: "content",
			label: "Content",
			type: "textarea",
			required: true,
		},
		{
			name: "fullName",
			label: "Full Name",
			type: "text",
			admin: {
				hidden: true,
				position: "sidebar",
			},
			hooks: {
				beforeValidate: [populateFullName],
			},
		},
	],
};

export default Testimonials;
