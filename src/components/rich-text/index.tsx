import { cn } from "@/lib/utils";
import { serializeLexical } from "@/components/rich-text/serialize";

type RichTextProps = {
	className?: string;
	content: Record<string, any>;
	enableGutter?: boolean;
	enableProse?: boolean;
};

export const RichText = ({ className, content, enableGutter = true, enableProse = true }: RichTextProps) => {
	if (!content) {
		return null;
	}

	return (
		<div
			className={cn(
				{
					container: enableGutter,
					"max-w-none": !enableGutter,
					"prose mx-auto dark:prose-invert prose-a:text-blue-500 hover:prose-a:text-sky-500": enableProse,
				},
				className,
			)}
		>
			{content &&
				!Array.isArray(content) &&
				typeof content === "object" &&
				"root" in content &&
				serializeLexical({ nodes: content?.root?.children })}
		</div>
	);
};
