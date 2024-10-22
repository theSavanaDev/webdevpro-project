import { Fragment } from "react";

import { formatDateTime } from "@/lib/format-date-time";

import { Container } from "@/components/container";
import { RenderImage } from "@/components/render-image";

import type { Post } from "@/payload-types";

export const PostHero = ({ post }: { post: Post }) => {
	const { categories, meta, populatedAuthors, publishedAt, title } = post;

	return (
		<Container className="h-[30rem] w-full">
			<div className="relative h-full w-full rounded-xl">
				<RenderImage imageAlt="Hero image" imageSrc={`${meta?.image && typeof meta?.image === "object" ? `${meta.image.url}` : ""}`} />

				<div className="absolute left-0 top-0 h-full w-full rounded-lg bg-gray-900/40"></div>

				<div className="absolute flex h-full w-full items-center justify-center">
					<div className="text-center">
						<div className="mb-5 uppercase text-white">
							{/* categories section */}
							{categories?.map((category, index) => {
								if (typeof category === "object" && category !== null) {
									const { title: categoryTitle } = category;

									const titleToUse = categoryTitle || "Untitled category";

									const isLast = index === categories.length - 1;

									return (
										<Fragment key={index}>
											{titleToUse}
											{!isLast && <Fragment>, &nbsp;</Fragment>}
										</Fragment>
									);
								}
								return null;
							})}
						</div>

						<h1 className="mb-6 text-3xl font-semibold text-white lg:text-5xl">{title}</h1>

						<div className="flex flex-col gap-4">
							{/* author section */}
							{populatedAuthors && (
								<div className="flex flex-col gap-1">
									<p className="text-sm font-semibold uppercase text-white">Written By</p>
									<p className="text-sm text-white">
										{populatedAuthors.map((author, index) => {
											const { name } = author;

											return (
												<Fragment key={index}>
													{name}

													{/* add a comma after all authors except the last two */}
													{index < populatedAuthors.length - 2 && <Fragment>, </Fragment>}

													{/* add "and" between the second-to-last and last author */}
													{index === populatedAuthors.length - 2 && <Fragment>, and </Fragment>}
												</Fragment>
											);
										})}
									</p>
								</div>
							)}

							{/* date published section */}
							{publishedAt && (
								<div className="flex flex-col gap-1">
									<p className="text-sm font-semibold uppercase text-white">Date Published</p>
									<p className="text-sm text-white">
										<time dateTime={publishedAt}>{formatDateTime(publishedAt)}</time>
									</p>
								</div>
							)}
						</div>
					</div>
				</div>
			</div>
		</Container>
	);
};
