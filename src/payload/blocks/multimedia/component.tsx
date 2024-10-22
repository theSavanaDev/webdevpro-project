import { cn } from "@/lib/utils";

import { Container } from "@/components/container";
import { Media } from "@/components/multimedia";
import { RichText } from "@/components/rich-text";

import type { StaticImageData } from "next/image";
import type { Page } from "@/payload-types";

type Props = Extract<Page["layout"][0], { blockType: "multimedia" }> & {
	breakout?: boolean;
	captionClassName?: string;
	className?: string;
	enableGutter?: boolean;
	id?: string;
	imgClassName?: string;
	staticImage?: StaticImageData;
	disableInnerContainer?: boolean;
};

export const MultimediaBlock = (props: Props) => {
	const {
		captionClassName,
		className,
		enableGutter = true,
		imgClassName,
		media,
		position = "default",
		staticImage,
		disableInnerContainer,
	} = props;

	let caption;

	if (media && typeof media === "object") caption = media.caption;

	return (
		<Container className={cn("", { container: position === "default" && enableGutter }, className)}>
			{position === "fullscreen" && (
				<div className="relative">
					<Media resource={media} src={staticImage} />
				</div>
			)}

			{position === "default" && <Media imgClassName={cn("rounded", imgClassName)} resource={media} src={staticImage} />}

			{caption && (
				<div className={cn("mt-5 items-center text-sm", { container: position === "fullscreen" && !disableInnerContainer }, captionClassName)}>
					<RichText content={caption} enableGutter={false} />
				</div>
			)}
		</Container>
	);
};
