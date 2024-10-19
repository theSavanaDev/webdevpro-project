import { Container } from "@/components/container";
import { RenderImage } from "@/components/render-image";

type HeroHomepageBlockProps = {
	heroImage: { url: string };
	heroTitle: string;
	heroMessage: string;
};

const serverURL = process.env.NODE_ENV === "development" ? process.env.NEXT_PUBLIC_SERVER_URL_DEV! : process.env.NEXT_PUBLIC_SERVER_URL_PRD!;

export const HeroHomepageBlock = ({ heroImage, heroTitle, heroMessage }: HeroHomepageBlockProps) => {
	return (
		<Container className="py-8 text-center">
			<div className="mx-auto max-w-lg">
				<h1 className="text-3xl font-semibold text-gray-800 dark:text-white lg:text-5xl">{heroTitle}</h1>
				<p className="mt-6 text-gray-500 dark:text-gray-300">{heroMessage}</p>
			</div>

			<div className="mt-10 flex justify-center">
				<div className="relative h-96 w-full rounded-lg lg:w-4/5">
					<RenderImage imageAlt="Hero image" imageSrc={`${serverURL}${heroImage.url}`} />
				</div>
			</div>
		</Container>
	);
};
