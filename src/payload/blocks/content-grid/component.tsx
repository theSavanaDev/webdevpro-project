import { Container } from "@/components/container";
import { RenderHTML } from "@/components/render-html";

type ContentGridBlockProps = {
	content: {
		id: string;
		prose_html: string;
	}[];
	heading: string;
};

export const ContentGridBlock = ({ content, heading }: ContentGridBlockProps) => {
	return (
		<Container className="my-16">
			<h3 className="mb-12 text-3xl font-bold">{heading}</h3>

			<div className="grid grid-cols-1 gap-x-8 gap-y-8 md:grid-cols-3">
				{content.map((element) => (
					<div key={element.id} className="rounded border border-border bg-card p-3">
						<RenderHTML html_content={element.prose_html} />
					</div>
				))}
			</div>
		</Container>
	);
};
