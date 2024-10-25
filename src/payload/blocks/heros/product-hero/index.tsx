import { CheckCircle } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/container";
import { RenderImage } from "@/components/render-image";

import type { Product } from "@/payload-types";

export const ProductHero = ({ product }: { product: Product }) => {
	const { categories, description, meta, perks, price, title } = product;

	return (
		<Container className="grid gap-8 md:grid-cols-2">
			{/* product image */}
			<div className="flex items-center justify-center">
				<div className="relative h-[400px] w-full max-w-[600px] rounded-lg border md:h-[500px] lg:h-[600px]">
					<RenderImage imageAlt="Hero image" imageSrc={`${meta?.image && typeof meta?.image === "object" ? `${meta.image.url}` : ""}`} />
				</div>
			</div>

			{/* product details */}
			<div>
				<h1 className="mb-4 text-3xl font-bold">{title}</h1>

				<Badge className="mb-4 bg-gray-700 px-3 py-1 text-white">${price.toLocaleString()}</Badge>

				<p className="mb-4 text-gray-400">{description}</p>

				<ul className="mb-6 space-y-2">
					{perks?.map((perk) => (
						<li className="flex items-center" key={perk.id}>
							<CheckCircle className="mr-2 h-5 w-5 text-green-500" />
							<span>{perk.description}</span>
						</li>
					))}
				</ul>

				<div className="mb-6">
					<h3 className="mb-2 text-sm uppercase text-gray-500">Categories</h3>

					<div className="flex flex-wrap gap-1">
						{categories?.map((category) => {
							if (typeof category === "string") {
								return null;
							}

							return (
								<Badge key={category.id} className="bg-gray-700 px-3 py-1 text-white">
									{category.title}
								</Badge>
							);
						})}
					</div>
				</div>

				<Button className="mt-6 w-full">Add to Cart</Button>
			</div>
		</Container>
	);
};
