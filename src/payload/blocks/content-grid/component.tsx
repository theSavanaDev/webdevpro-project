import { Container } from "@/components/container";
import { RichText } from "@/components/rich-text";

type ContentGridBlockProps = {
	content: {
		id: string;
		prose: object;
	}[];
	introductoryContent: object;
};

export const ContentGridBlock = ({ content, introductoryContent }: ContentGridBlockProps) => {
	return (
		<Container className="my-16 space-y-12">
			<RichText className="ml-0" content={introductoryContent} enableGutter={false} />

			<div className="grid grid-cols-1 gap-x-8 gap-y-8 md:grid-cols-3">
				{content.map((element) => (
					<div key={element.id} className="rounded border border-border bg-card p-3">
						<RichText content={element.prose} enableGutter={false} />
					</div>
				))}
			</div>
		</Container>
	);
};
