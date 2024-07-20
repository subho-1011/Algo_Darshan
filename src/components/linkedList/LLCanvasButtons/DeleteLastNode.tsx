import { Button } from "@/components/ui/button";
import { useLinkedListActions } from "@/contexts/LinkedList";

const DeleteLastNode = () => {
  const { deleteNode } = useLinkedListActions();

  return (
    <div className="flex gap-2">
      <Button className="basis-1/2" onClick={deleteNode}>
        Delete Last
      </Button>
    </div>
  );
};

export default DeleteLastNode;
