import { cn } from "@/lib/utils";
import TypingAnimation from "@/components/magicui/typing-animation";
import AnimatedGridPattern from "@/components/magicui/animated-grid-pattern";
import AlgorithmThumbnailCard from "@/components/AlgorithmThumbnailCard";

export default function Home() {
  return (
    <div className="relative flex h-full min-h-[calc(100vh-68px)] w-full items-center justify-center overflow-hidden rounded-lg bg-gradient-to-t to-purple-200 from-emerald-100 md:shadow-xl">
      <div className="z-10 flex flex-col justify-between w-full max-w-7xl h-full whitespace-pre-wrap text-center text-5xl font-medium tracking-tighter text-black dark:text-white my-10">
        <TypingAnimation
          className="text-5xl font-bold text-fuchsia-600/80 dark:text-white mb-16"
          text="Welcome to Algo Darshan"
        />
        <div className="flex flex-wrap gap-x-12 gap-y-8 justify-between">
          <AlgorithmThumbnailCard
            name="Sorting"
            image="/sortingImage.png"
            alt="Sorting Thumbnail"
            href="/sorting"
          />
          <AlgorithmThumbnailCard
            name="Searching"
            image="/searchingImage.png"
            alt="Searching Thumbnail"
            href="/searching"
          />
          <AlgorithmThumbnailCard
            name="Tree"
            image="/treeImage.png"
            alt="Trees Thumbnail"
            href="/trees"
          />
          <AlgorithmThumbnailCard
            name="Backtracking"
            image="/backtrackingImage.png"
            alt="Backtracking Thumbnail"
            href="/backtracking/n-queen"
          />
          {/* Linked List */}
          <AlgorithmThumbnailCard
            name="Linked List"
            image="/linkedlistImage.png"
            alt="Linked List Thumbnail"
            href="/linked-list"
          />
          {/* Coming soon */}
          <AlgorithmThumbnailCard
            name="Coming Soon"
            image=""
            alt="Coming Soon Thumbnail"
            href="#"
          />
        </div>
      </div>
      <AnimatedGridPattern
        numSquares={100}
        maxOpacity={0.4}
        duration={3}
        repeatDelay={2}
        className={cn(
          "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
          "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12"
        )}
      />
    </div>
  );
}
