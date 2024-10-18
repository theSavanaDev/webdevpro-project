import { GlobalConfig } from "payload";

import { anyone } from "@/payload/access/anyone";
import { link } from "@/payload/fields/link";
import { revalidateHeader } from "@/payload/blocks/globals/header/hooks/revalidate-header";

const Header: GlobalConfig = {
	slug: "header",
	access: {
		read: anyone,
	},
	fields: [
		{
			name: "logo",
			label: "Site Logo",
			type: "upload",
			relationTo: "media",
			required: true,
		},
		{
			name: "name",
			label: "Site Name",
			type: "text",
			required: true,
		},
		{
			name: "nav",
			label: "Navigation",
			labels: {
				singular: "Navigation Header",
				plural: "Navigation Headers",
			},
			type: "array",
			required: true,
			fields: [link({ appearances: false })],
			minRows: 1,
			maxRows: 3,
		},
	],
	hooks: {
		afterChange: [revalidateHeader],
	},
};

export default Header;
