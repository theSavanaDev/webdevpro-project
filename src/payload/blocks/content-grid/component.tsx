import { Container } from "@/components/container";
import { RenderHTML } from "@/components/render-html";

type ContentGridBlockProps = {
	heading: string;
	content: {
		prose_html: string;
	}[];
};

export const ContentGridBlock = ({ heading, content }: ContentGridBlockProps) => {
	return (
		<Container className="my-16">
			<h3 className="mb-12 text-3xl font-bold">{heading}</h3>

			<div className="grid grid-cols-1 gap-8 md:grid-cols-3">
				{content.map((html, i) => (
					<div key={i} className="rounded-lg border p-3">
						<RenderHTML html_content={html.prose_html} />
					</div>
				))}
			</div>
		</Container>
	);
};
