"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { NeonGradientCard } from "@/components/magicui/neon-gradient-card";

const AlgorithmThumbnailCard = ({
  name,
  image,
  alt,
  href,
}: {
  name: string;
  image: string;
  alt: string;
  href: string;
}) => {
  const router = useRouter();

  return (
    <NeonGradientCard
      className="max-w-sm items-center justify-center text-center cursor-pointer"
      onClick={() => router.push(href)}
    >
      <div className="z-10 relative">
        <h2 className="absolute z-20 flex text-5xl w-full h-full text-center justify-center items-end pb-10 font-medium text-black/65 tracking-wider">
          {name}
        </h2>
        <Image
          src={image ? image : "/welcome.png"}
          alt={alt}
          width={600}
          height={600}
          loading="lazy"
          className="rounded-[17px] shadow-md w-full h-full"
        />
      </div>
    </NeonGradientCard>
  );
};

export default AlgorithmThumbnailCard;
