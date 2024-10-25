import Image from "next/image";

type RenderImageProps = {
	imageSrc: string;
	imageAlt: string;
};

export const RenderImage = ({ imageSrc, imageAlt }: RenderImageProps) => {
	return (
		<Image
			src={imageSrc}
			alt={imageAlt}
			fill
			quality={89}
			priority
			sizes="(max-width: 640px) 100vw, (max-width: 768px) 640px, (max-width: 1024px) 768px, (max-width: 1280px) 1024px, 1280px"
			className="absolute mx-auto h-auto w-full overflow-hidden rounded-lg object-cover object-center"
		/>
	);
};
