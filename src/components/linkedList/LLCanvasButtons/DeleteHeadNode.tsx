import { Button } from "@/components/ui/button";
import { useLinkedListActions } from "@/contexts/LinkedList";

const DeleteHeadNode = () => {
  const { deleteNodeAtHead } = useLinkedListActions();

  return (
    <div className="flex gap-2">
      <Button className="basis-1/2" onClick={deleteNodeAtHead}>
        Delete Head
      </Button>
    </div>
  );
};

export default DeleteHeadNode;
