import Link from "next/link";
import { Rocket } from "lucide-react";

import { getCachedGlobal } from "@/lib/get-global";

import { Separator } from "@/components/ui/separator";
import { CMSLink } from "@/components/cms-link";
import { Container } from "@/components/container";

import type { Footer } from "@/payload-types";

export const FooterBlock = async () => {
	const footer = (await getCachedGlobal("footer", 1)()) as Footer;

	return (
		<div className="bg-white dark:bg-gray-900">
			<Container className="py-6">
				<div className="lg:flex">
					<div className="w-full lg:w-2/5">
						<div>
							<Link href="/" className="flex items-center gap-2 text-gray-800 dark:text-gray-200">
								<Rocket className="h-8 w-8" />

								<p className="text-xl font-bold">{footer.name}</p>
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
