import { Container } from "@/components/container";
import { RenderHTML } from "@/components/render-html";

type ContentPadBlockProps = {
	prose_html: string;
};

export const ContentPadBlock = ({ prose_html }: ContentPadBlockProps) => {
	return (
		<Container className="my-16 px-3">
			<RenderHTML html_content={prose_html} />
		</Container>
	);
};
