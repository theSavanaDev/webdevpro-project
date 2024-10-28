import { CheckCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type PricingCardProps = {
	key: string;
	title: string;
	price: number;
	perks: {
		description?: string | null | undefined;
		id?: string | null | undefined;
	}[];
	additionalPerks?: {
		description?: string | null | undefined;
		id?: string | null | undefined;
	}[];
	featured?: boolean;
};

export const PricingCard = ({ title, price, perks, additionalPerks, featured }: PricingCardProps) => {
	return (
		<Card className={`border-gray-700 bg-gray-800 ${featured ? "ring-2 ring-blue-500" : ""}`}>
			<CardHeader>
				<CardTitle className="text-xl font-bold">{title}</CardTitle>
				<div className="mt-2 text-3xl font-semibold">
					<div>
						<span className="align-top text-sm">$</span>
						{price}
						<span className="text-sm font-normal"> / launch</span>
					</div>
				</div>
			</CardHeader>
			<CardContent>
				<Button className="mb-4 w-full" variant={featured ? "default" : "outline"}>
					Get Started
				</Button>
				<ul className="space-y-2">
					{perks.map((perk) => (
						<li key={perk.id} className="flex items-center">
							<CheckCircle className="mr-2 h-5 w-5 text-green-500" />
							<span className="text-sm">{perk.description}</span>
						</li>
					))}

					<p className="py-4 text-sm font-semibold uppercase">Additional Perks</p>

					{additionalPerks && additionalPerks.length > 0 ? (
						additionalPerks.map((perk) => (
							<li key={perk.id} className="flex items-center">
								<CheckCircle className="mr-2 h-5 w-5 text-green-500" />
								<span className="text-sm">{perk.description}</span>
							</li>
						))
					) : (
						<li className="flex items-center">
							<CheckCircle className="mr-2 h-5 w-5 text-green-500" />
							<span className="text-sm">None</span>
						</li>
					)}
				</ul>
			</CardContent>
		</Card>
	);
};
