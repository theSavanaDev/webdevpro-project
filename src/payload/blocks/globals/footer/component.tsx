import Link from "next/link";

import { getCachedGlobal } from "@/lib/get-global";

import { Separator } from "@/components/ui/separator";
import { CMSLink } from "@/components/cms-link";
import { Container } from "@/components/container";
import { RenderImage } from "@/components/render-image";

import type { Footer } from "@/payload-types";

const serverURL = process.env.NODE_ENV === "development" ? process.env.NEXT_PUBLIC_SERVER_URL_DEV! : process.env.NEXT_PUBLIC_SERVER_URL_PRD!;

export const FooterBlock = async () => {
	const footer = (await getCachedGlobal("footer", 1)()) as Footer;
	const logoAlt = footer.logo && typeof footer.logo === "object" ? footer.logo.alt : null;
	const logoUrl = footer.logo && typeof footer.logo === "object" ? footer.logo.url : null;

	return (
		<div className="bg-white dark:bg-gray-900">
			<Container className="py-6">
				<div className="lg:flex">
					<div className="w-full lg:w-2/5">
						<div>
							<Link href="/" className="flex">
								<div className="relative h-6 w-6 text-gray-800">
									<RenderImage imageAlt={`${serverURL}${logoAlt}`} imageSrc={`${serverURL}${logoUrl}`} />
								</div>

								<p className="text-xl font-bold text-gray-800 dark:text-gray-200">{footer.name}</p>
							</Link>

							<p className="mt-2 text-left text-gray-500 dark:text-gray-400">{footer.description}</p>
						</div>
					</div>

					<div className="mt-6 lg:mt-0 lg:flex-1">
						<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
							<div className="text-justify">
								<h3 className="uppercase text-gray-700 dark:text-white">Discover</h3>
								<div>
									{footer.discover?.map(({ link }, i) => {
										return <CMSLink className="mt-2 block text-sm text-gray-600 hover:underline dark:text-gray-400" key={i} {...link} />;
									})}
								</div>
							</div>

							<div className="text-justify">
								<h3 className="uppercase text-gray-700 dark:text-white">Legal</h3>
								<div>
									{footer.legal?.map(({ link }, i) => {
										return <CMSLink className="mt-2 block text-sm text-gray-600 hover:underline dark:text-gray-400" key={i} {...link} />;
									})}
								</div>
							</div>

							<div className="text-justify">
								<h3 className="uppercase text-gray-700 dark:text-white">Miscellaneous</h3>
								<div>
									{footer.miscellaneous?.map(({ link }, i) => {
										return <CMSLink className="mt-2 block text-sm text-gray-600 hover:underline dark:text-gray-400" key={i} {...link} />;
									})}
								</div>
							</div>
						</div>
					</div>
				</div>

				<Separator className="my-6 bg-gray-200 dark:bg-gray-700" />

				<div>
					<p className="text-center text-gray-500 dark:text-gray-400">{footer.copyright}</p>
				</div>
			</Container>
		</div>
	);
};
