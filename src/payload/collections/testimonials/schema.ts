import { slugField } from "@/payload/fields/slug";

import { anyone } from "@/payload/access/anyone";
import { authenticated } from "@/payload/access/authenticated";

import type { CollectionConfig } from "payload";

const Testimonials: CollectionConfig = {
	slug: "testimonials",
	labels: {
		singular: "Testimonial",
		plural: "Testimonials",
	},
	admin: {
		defaultColumns: ["content", "createdAt", "updatedAt"],
		useAsTitle: "content",
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
					name: "content",
					label: "Content",
					type: "textarea",
					required: true,
					admin: {
						width: "50%",
					},
				},
			],
		},
		{
			name: "customer",
			label: "Customer Information",
			type: "group",
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
					type: "row",
					fields: [
						{
							name: "job",
							label: "Job Title",
							type: "text",
							admin: {
								width: "50%",
							},
						},
						{
							name: "image",
							label: "Customer Photo",
							type: "upload",
							relationTo: "media",
							admin: {
								width: "50%",
							},
						},
					],
				},
			],
		},
	],
};

export default Testimonials;
