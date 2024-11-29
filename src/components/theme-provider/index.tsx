"use client";

import { ComponentProps } from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export const ThemeProvider = ({ children, ...props }: ComponentProps<typeof NextThemesProvider>) => (
	<NextThemesProvider {...props}>{children}</NextThemesProvider>
);
