import { Button } from "@/components/ui/button";
import { useLinkedListActions } from "@/contexts/LinkedList";

const ClearListButton = () => {
  const { deleteAllNodes } = useLinkedListActions();

  return (
    <div className="flex gap-2">
      <Button className="basis-1/2" onClick={deleteAllNodes}>
        Clear all nodes
      </Button>
    </div>
  );
};

export default ClearListButton;
