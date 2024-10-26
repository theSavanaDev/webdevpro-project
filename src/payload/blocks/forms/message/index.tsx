import { RichText } from "@/components/rich-text";

import { Width } from "@/payload/blocks/forms/width";

export const Message = ({ message }: { message: Record<string, any> }) => {
	return (
		<Width className="my-12" width="100">
			{message && <RichText content={message} />}
		</Width>
	);
};
