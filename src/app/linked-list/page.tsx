import LLCanvas from "@/components/linkedList/LLCanvas";
import LLCanvasButtons from "@/components/linkedList/LLCanvasButtons";

const LinkedListPage = () => {
  return (
    <div className="flex w-full max-w-7xl pt-10">
      <div className="w-9/12">
        <LLCanvas />
      </div>
      <div className="w-3/12">
        <LLCanvasButtons />
      </div>
    </div>
  );
};

export default LinkedListPage;
