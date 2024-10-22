import { Fragment } from "react";

import { ImageMedia } from "@/components/multimedia/image-media";
import { VideoMedia } from "@/components/multimedia/video-media";

import type { Props } from "@/components/multimedia/types";

export const Media = (props: Props) => {
	const { className, htmlElement = "div", resource } = props;

	const isVideo = typeof resource === "object" && resource?.mimeType?.includes("video");

	const Tag = (htmlElement as any) || Fragment;

	return <Tag {...(htmlElement !== null ? { className } : {})}>{isVideo ? <VideoMedia {...props} /> : <ImageMedia {...props} />}</Tag>;
};
