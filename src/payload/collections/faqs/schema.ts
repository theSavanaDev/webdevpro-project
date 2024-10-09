import { anyone } from "@/payload-access/anyone";
import { authenticated } from "@/payload-access/authenticated";

import type { CollectionConfig } from "payload";

const Faqs: CollectionConfig = {
	slug: "faqs",
	labels: {
		singular: "Frequently Asked Question",
		plural: "Frequently Asked Questions",
	},
	admin: {
		defaultColumns: ["question", "answer", "createdAt", "updatedAt"],
		useAsTitle: "question",
	},
	access: {
		create: authenticated,
		delete: authenticated,
		read: anyone,
		update: authenticated,
	},
	fields: [
		{
			name: "question",
			label: "Question",
			type: "text",
			required: true,
		},
		{
			name: "answer",
			label: "Answer",
			type: "textarea",
			required: true,
		},
	],
};

export default Faqs;
