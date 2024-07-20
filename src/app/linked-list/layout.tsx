import LinkedListHeader from "@/components/linkedList/header";
import { LinkedListProvider } from "@/contexts/LinkedList";

const LinkedListLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <LinkedListProvider>
      <div className="flex flex-col w-full">
        <LinkedListHeader />
        <div className="w-full flex items-center justify-center">
          {children}
        </div>
      </div>
    </LinkedListProvider>
  );
};

export default LinkedListLayout;
