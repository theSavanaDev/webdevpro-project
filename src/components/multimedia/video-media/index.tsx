"use client";

import { useEffect, useRef } from "react";

import { cn } from "@/lib/utils";

import type { Props as MediaProps } from "@/components/multimedia/types";

const serverURL = process.env.NODE_ENV === "development" ? process.env.NEXT_PUBLIC_SERVER_URL_DEV! : process.env.NEXT_PUBLIC_SERVER_URL_PRD!;

export const VideoMedia = (props: MediaProps) => {
	const { onClick, resource, videoClassName } = props;

	const videoRef = useRef<HTMLVideoElement>(null);

	// const [showFallback] = useState<boolean>()

	useEffect(() => {
		const { current: video } = videoRef;

		if (video) {
			video.addEventListener("suspend", () => {
				// setShowFallback(true);
				// console.warn('Video was suspended, rendering fallback image.')
			});
		}
	}, []);

	if (resource && typeof resource === "object") {
		const { filename } = resource;

		return (
			<video autoPlay className={cn(videoClassName)} controls={false} loop muted onClick={onClick} playsInline ref={videoRef}>
				<source src={`${serverURL}${filename}`} />
			</video>
		);
	}

	return null;
};
