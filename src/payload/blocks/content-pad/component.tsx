import { Container } from "@/components/container";
import { RichText } from "@/components/rich-text";

type ContentPadBlockProps = {
	prose: object;
};

export const ContentPadBlock = ({ prose }: ContentPadBlockProps) => {
	return (
		<Container className="my-16 px-3">
			<RichText content={prose} enableGutter={false} />
		</Container>
	);
};
