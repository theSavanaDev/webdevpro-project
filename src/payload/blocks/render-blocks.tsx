// @ts-nocheck
import { Fragment } from "react";

import { ArchiveBlock } from "@/payload/blocks/archive/component";
import { CallToActionBlock } from "@/payload/blocks/call-to-action/component";
import { ContentBlock } from "@/payload/blocks/content/component";
import { ContentGridBlock } from "@/payload/blocks/content-grid/component";
import { HeroBlock } from "@/payload/blocks/hero/component";
import { MultimediaBlock } from "@/payload/blocks/multimedia/component";

import type { Page } from "@/payload-types";

type RenderBlocksProps = {
	blocks: Page["layout"][0][];
};

// mapping block slugs to their respective components
const blockComponents = {
	archive: ArchiveBlock,
	cta: CallToActionBlock,
	content: ContentBlock,
	contentGrid: ContentGridBlock,
	hero: HeroBlock,
	multimedia: MultimediaBlock,
};

export const RenderBlocks = (props: RenderBlocksProps) => {
	const { blocks } = props;

	const hasBlocks = blocks && Array.isArray(blocks) && blocks.length > 0;

	if (hasBlocks) {
		return (
			<Fragment>
				{blocks.map((block, index) => {
					const { blockType } = block;

					if (blockType && blockType in blockComponents) {
						const Block = blockComponents[blockType as keyof typeof blockComponents];

						if (Block) {
							return (
								<div key={index}>
									<Block {...block} />
								</div>
							);
						}
					}

					return null;
				})}
			</Fragment>
		);
	}

	return null;
};
