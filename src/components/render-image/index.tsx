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
			sizes="100vw"
			className="absolute mx-auto h-auto w-full rounded object-cover object-center"
		/>
	);
};
