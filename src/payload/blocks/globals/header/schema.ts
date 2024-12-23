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
			name: "common",
			label: "Common Properties",
			type: "group",
			fields: [
				{
					name: "logo",
					label: "Site Logo",
					type: "upload",
					relationTo: "media",
					required: true,
					admin: {
						width: "50%",
					},
				},
				{
					name: "name",
					label: "Site Name",
					type: "text",
					required: true,
					admin: {
						width: "50%",
					},
				},
			],
			admin: {
				hideGutter: true,
			},
		},
		{
			name: "heading",
			label: "Header Links",
			labels: {
				singular: "Header Link",
				plural: "Header Links",
			},
			type: "array",
			required: true,
			fields: [link({ appearances: false })],
			minRows: 1,
			maxRows: 5,
		},
	],
	hooks: {
		afterChange: [revalidateHeader],
	},
};

export default Header;
