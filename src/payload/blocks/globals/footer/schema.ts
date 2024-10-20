import { GlobalConfig } from "payload";

import { anyone } from "@/payload/access/anyone";
import { link } from "@/payload/fields/link";
import { revalidateFooter } from "@/payload/blocks/globals/footer/hooks/revalidate-footer";

const Footer: GlobalConfig = {
	slug: "footer",
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
				{
					name: "description",
					label: "Site Description",
					type: "textarea",
					required: true,
					admin: {
						width: "50%",
					},
				},
				{
					name: "copyright",
					label: "Copyright Notice",
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
			name: "discover",
			label: "Discover Links",
			labels: {
				singular: "Discover Link",
				plural: "Discover Links",
			},
			type: "array",
			required: false,
			fields: [
				link({
					appearances: false,
				}),
			],
			minRows: 1,
			maxRows: 3,
		},
		{
			name: "legal",
			label: "Legal Links",
			labels: {
				singular: "Legal Link",
				plural: "Legal Links",
			},
			type: "array",
			required: false,
			fields: [
				link({
					appearances: false,
				}),
			],
			minRows: 1,
			maxRows: 2,
		},
		{
			name: "miscellaneous",
			label: "Miscellaneous Links",
			labels: {
				singular: "Miscellaneous Link",
				plural: "Miscellaneous Links",
			},
			type: "array",
			required: false,
			fields: [
				link({
					appearances: false,
				}),
			],
			minRows: 1,
			maxRows: 3,
		},
	],
	hooks: {
		afterChange: [revalidateFooter],
	},
};

export default Footer;
