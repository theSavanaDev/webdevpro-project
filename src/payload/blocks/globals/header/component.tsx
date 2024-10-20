import Link from "next/link";

import { getCachedGlobal } from "@/lib/get-global";

import { Container } from "@/components/container";
import { CMSLink } from "@/components/cms-link";
import { RenderImage } from "@/components/render-image";

import type { Header } from "@/payload-types";

const serverURL = process.env.NODE_ENV === "development" ? process.env.NEXT_PUBLIC_SERVER_URL_DEV! : process.env.NEXT_PUBLIC_SERVER_URL_PRD!;

export const HeaderBlock = async () => {
	const header = (await getCachedGlobal("header", 1)()) as Header;
	const logoAlt = header.logo && typeof header.logo === "object" ? header.logo.alt : null;
	const logoUrl = header.logo && typeof header.logo === "object" ? header.logo.url : null;

	return (
		<nav className="bg-white shadow dark:bg-gray-800">
			<Container className="flex justify-between py-5 capitalize text-gray-500 dark:text-gray-300">
				<div>
					<Link href="/" className="flex">
						<div className="relative h-6 w-6 text-gray-800">
							<RenderImage imageAlt={`${serverURL}${logoAlt}`} imageSrc={`${serverURL}${logoUrl}`} />
						</div>

						<p className="text-xl font-bold text-gray-800 dark:text-gray-200">{header.name}</p>
					</Link>
				</div>

				<div>
					{header.heading.map(({ link }, i) => {
						return (
							<CMSLink
								className="mx-1 transform border-b-2 border-transparent text-sm font-medium transition-colors duration-300 hover:border-blue-500 hover:text-gray-800 dark:hover:text-gray-200 sm:mx-5"
								key={i}
								{...link}
							/>
						);
					})}
				</div>
			</Container>
		</nav>
	);
};
