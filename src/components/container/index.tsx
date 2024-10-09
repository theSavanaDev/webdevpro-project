import { cn } from "@/lib/utils";

type ContainerProps = React.ComponentProps<"div">;

const Container = ({ children, className, ...props }: ContainerProps) => {
	return (
		<div {...props} className={cn("mx-auto max-w-5xl px-3", className)}>
			{children}
		</div>
	);
};

export default Container;
