import { anyone } from "@/payload-access/anyone";
import { authenticated } from "@/payload-access/authenticated";

import type { CollectionConfig } from "payload";

const Logos: CollectionConfig = {
	slug: "logos",
	labels: {
		singular: "Logo",
		plural: "Logos",
	},
	admin: {
		defaultColumns: ["company", "createdAt", "updatedAt"],
		useAsTitle: "company",
	},
	access: {
		create: authenticated,
		delete: authenticated,
		read: anyone,
		update: authenticated,
	},
	fields: [
		{
			name: "company",
			label: "Company",
			type: "text",
			required: true,
		},
		{
			name: "logoImage",
			label: "Logo",
			type: "upload",
			relationTo: "media",
			required: true,
		},
	],
};

export default Logos;
