import { unstable_cache } from "next/cache";

import { getPayloadHMR } from "@payloadcms/next/utilities";
import config from "@payload-config";

import { Container } from "@/components/container";
import { PricingCard } from "@/components/pricing-card";
import { RichText } from "@/components/rich-text";

export type PricingPlansBlockProps = {
	caption: object;
};

const data = await getPayloadHMR({ config: config });

const getPricingPlans = unstable_cache(
	async () => {
		return await data.find({
			collection: "plans",
		});
	},
	["plans"],
	{ tags: ["plans"] },
);

export const PricingPlansBlock = async ({ caption }: PricingPlansBlockProps) => {
	const allPlans = await getPricingPlans();

	return (
		<Container className="my-16 space-y-8">
			<div className="flex max-w-[48rem] items-center">{caption && <RichText className="mb-0" content={caption} enableGutter={false} />}</div>

			<div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
				{allPlans.docs.map((plan) => (
					<PricingCard
						key={plan.id}
						title={plan.title}
						price={plan.price ?? 0}
						perks={plan.perks}
						additionalPerks={plan.additionalPerks ?? []}
						featured={plan.featured ?? false}
					/>
				))}
			</div>
		</Container>
	);
};
