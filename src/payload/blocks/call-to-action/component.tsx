import React from "react";

import { CMSLink } from "@/components/cms-link";
import { Container } from "@/components/container";
import { RichText } from "@/components/rich-text";

import type { Page } from "@/payload-types";

type CallToActionBlockProps = Extract<Page["layout"][0], { blockType: "cta" }>;

export const CallToActionBlock = ({ links, richText }: CallToActionBlockProps & { id?: string }) => {
	return (
		<Container className="my-16">
			<div className="flex flex-col gap-8 rounded border border-border bg-card p-4 md:flex-row md:items-center md:justify-between">
				<div className="flex max-w-[48rem] items-center">
					{richText && <RichText className="mb-0" content={richText} enableGutter={false} />}
				</div>

				<div className="flex flex-col gap-8">
					{(links || []).map(({ link }, i) => {
						return <CMSLink key={i} size="lg" {...link} />;
					})}
				</div>
			</div>
		</Container>
	);
};
