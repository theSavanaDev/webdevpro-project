import { ReactNode } from "react";

export const Width = ({ children, className, width }: { children: ReactNode; className?: string; width?: number | string }) => {
	return (
		<div className={className} style={{ maxWidth: width ? `${width}%` : undefined }}>
			{children}
		</div>
	);
};
