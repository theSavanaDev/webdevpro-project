import { Inter as FontSans } from "next/font/google";

import { LivePreviewListener } from "@/components/live-preview-listener";
import { ThemeProvider } from "@/components/theme-provider";
import { mergeOpenGraph } from "@/lib/mergeOpenGraph";
import { cn } from "@/lib/utils";

import type { Metadata } from "next";

import "@/frontend/global.css";

const fontSans = FontSans({ subsets: ["latin"], variable: "--font-sans" });

const serverURL =
	process.env.NODE_ENV === "development"
		? process.env.NEXT_PUBLIC_SERVER_URL_DEV!
		: process.env.NEXT_PUBLIC_SERVER_URL_PRD!;

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en" suppressHydrationWarning>
			<head>
				<link href="/favicon.svg" rel="icon" type="image/svg+xml" />
			</head>

			<body
				className={cn("flex h-screen flex-col font-sans antialiased", fontSans.variable)}
			>
				<ThemeProvider
					attribute="class"
					defaultTheme="light"
					enableSystem
					disableTransitionOnChange
				>
					<LivePreviewListener />

					<header className="text-center">Header Goes Here</header>

					<main>{children}</main>

					<footer className="mt-auto text-center">Footer Goes Here</footer>
				</ThemeProvider>
			</body>
		</html>
	);
}

export const metadata: Metadata = {
	metadataBase: new URL(serverURL),
	openGraph: mergeOpenGraph(),
	twitter: {
		card: "summary_large_image",
		creator: "@theSavanaDev",
	},
};
