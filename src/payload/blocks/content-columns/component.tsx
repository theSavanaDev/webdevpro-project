import React from "react";

import { cn } from "@/lib/utils";
import { CMSLink } from "@/components/cms-link";
import { Container } from "@/components/container";
import { RichText } from "@/components/rich-text";

import type { Page } from "@/payload-types";

type ContentColumnsBlockProps = Extract<Page["layout"][0], { blockType: "contentColumns" }>;

export const ContentColumnsBlock = (props: { id?: string } & ContentColumnsBlockProps) => {
	const { columns } = props;

	const columnSpanClasses = { full: "12", half: "6", third: "4" };

	return (
		<Container className="my-16">
			<div className="grid grid-cols-4 gap-x-16 gap-y-8 lg:grid-cols-12">
				{columns &&
					columns.length > 0 &&
					columns.map((col, index) => {
						const { enableLink, link, richText, size } = col;

						return (
							<div
								className={cn(`col-span-4 lg:col-span-${columnSpanClasses[size!]}`, {
									"md:col-span-2": size !== "full",
								})}
								key={index}
							>
								{richText && <RichText content={richText} enableGutter={false} />}

								{enableLink && <CMSLink {...link} />}
							</div>
						);
					})}
			</div>
		</Container>
	);
};
