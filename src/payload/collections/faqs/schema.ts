import { anyone } from "@/payload/access/anyone";
import { authenticated } from "@/payload/access/authenticated";

import type { CollectionConfig } from "payload";

const Faqs: CollectionConfig = {
	slug: "faqs",
	labels: {
		singular: "FAQ",
		plural: "FAQs",
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
			admin: {
				width: "50%",
			},
		},
		{
			name: "answer",
			label: "Answer",
			type: "textarea",
			required: true,
			admin: {
				width: "50%",
			},
		},
	],
};

export default Faqs;
