import { Container } from "@/components/container";
import { RenderHTML } from "@/components/render-html";

type ContentBlockProps = {
	prose_html: string;
};

export const ContentBlock = ({ prose_html }: ContentBlockProps) => {
	return (
		<Container className="py-12">
			<RenderHTML html_content={prose_html} />
		</Container>
	);
};
