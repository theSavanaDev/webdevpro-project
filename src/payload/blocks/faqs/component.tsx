import { unstable_cache } from "next/cache";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

import { getPayload } from "payload";
import config from "@payload-config";

import { Container } from "@/components/container";
import { RichText } from "@/components/rich-text";

export type FaqsBlockProps = {
	caption: object;
};

const data = await getPayload({ config: config });

const getFaqs = unstable_cache(
	async () => {
		return await data.find({
			collection: "faqs",
			sort: "order:asc",
		});
	},
	["faqs"],
	{ revalidate: 60, tags: ["faqs"] },
);

export const FaqsBlock = async ({ caption }: FaqsBlockProps) => {
	const allFaqs = await getFaqs();

	return (
		<Container className="my-16 space-y-8">
			<div>{caption && <RichText className="mb-0" content={caption} enableGutter={false} />}</div>

			<div className="mb-12 grid gap-8 md:grid-cols-1">
				{allFaqs.docs.map((faq) => (
					<Accordion key={faq.id} type="single" collapsible className="w-full">
						<AccordionItem value={faq.id}>
							<AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
							<AccordionContent>{faq.answer}</AccordionContent>
						</AccordionItem>
					</Accordion>
				))}
			</div>
		</Container>
	);
};
