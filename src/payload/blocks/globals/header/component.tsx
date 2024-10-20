import Link from "next/link";
import { Rocket } from "lucide-react";

import { getCachedGlobal } from "@/lib/get-global";

import { Container } from "@/components/container";
import { CMSLink } from "@/components/cms-link";
import { ModeToggle } from "@/components/mode-toggle";

import type { Header } from "@/payload-types";

export const HeaderBlock = async () => {
	const header = (await getCachedGlobal("header", 1)()) as Header;

	return (
		<nav className="bg-white shadow dark:bg-gray-800">
			<Container className="flex items-center justify-between py-5 capitalize text-gray-500 dark:text-gray-300">
				<div>
					<Link href="/" className="flex items-center gap-2 text-gray-800 dark:text-gray-200">
						<Rocket className="h-8 w-8" />

						<p className="text-xl font-bold">{header.name}</p>
					</Link>
				</div>

				<div className="flex items-center">
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

					<ModeToggle />
				</div>
			</Container>
		</nav>
	);
};
