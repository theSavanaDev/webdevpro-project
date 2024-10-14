"use client";

import { useRouter } from "next/navigation";
import { RefreshRouteOnSave as PayloadLivePreview } from "@payloadcms/live-preview-react";

const serverURL =
	process.env.NODE_ENV === "development"
		? process.env.NEXT_PUBLIC_SERVER_URL_DEV!
		: process.env.NEXT_PUBLIC_SERVER_URL_PRD!;

export const LivePreviewListener = () => {
	const router = useRouter();

	return <PayloadLivePreview refresh={router.refresh} serverURL={serverURL} />;
};
