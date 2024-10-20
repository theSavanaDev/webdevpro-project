import { ComponentProps } from "react";

import { cn } from "@/lib/utils";

type ContainerProps = ComponentProps<"div">;

export const Container = ({ children, className, ...props }: ContainerProps) => {
	return (
		<div {...props} className={cn("mx-auto max-w-7xl px-3", className)}>
			{children}
		</div>
	);
};
