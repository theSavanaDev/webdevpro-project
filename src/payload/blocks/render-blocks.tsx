// @ts-nocheck
import { Fragment } from "react";

import { ContentBlock } from "@/payload/blocks/content/component";
import { HeroBlock } from "@/payload/blocks/hero/component";

import type { Page } from "@/payload-types";

type RenderBlocksProps = {
	blocks: Page["layout"][0][];
};

// mapping block slugs to their respective components
const blockComponents = {
	content: ContentBlock,
	hero: HeroBlock,
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
