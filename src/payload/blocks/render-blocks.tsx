// @ts-nocheck
import { Fragment } from "react";

import { CallToActionBlock } from "@/payload/blocks/call-to-action/component";
import { ContentGridBlock } from "@/payload/blocks/content-grid/component";
import { ContentPadBlock } from "@/payload/blocks/content-pad/component";
import { HeroBlock } from "@/payload/blocks/heros/component";
import { MultimediaBlock } from "@/payload/blocks/multimedia/component";
import { PostsArchiveBlock } from "@/payload/blocks/posts-archive/component";
import { ProductsArchiveBlock } from "@/payload/blocks/products-archive/component";

import type { Page } from "@/payload-types";

type RenderBlocksProps = {
	blocks: Page["layout"][0][];
};

// mapping block slugs to their respective components
const blockComponents = {
	cta: CallToActionBlock,
	contentPad: ContentPadBlock,
	contentGrid: ContentGridBlock,
	hero: HeroBlock,
	multimedia: MultimediaBlock,
	postsArchive: PostsArchiveBlock,
	productsArchive: ProductsArchiveBlock,
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
