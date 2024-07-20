import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useLinkedListActions } from "@/contexts/LinkedList";
import { SubmitHandler, useForm } from "react-hook-form";

const UpdateNode = () => {
  const { updateNode } = useLinkedListActions();
  const { register, handleSubmit, reset } = useForm<{ stringValue: string }>();

  const onSubmit: SubmitHandler<{ stringValue: string }> = (data) => {
    const { stringValue } = data;

    if (!stringValue || !stringValue.trim()) return;
    const [position, value] = stringValue.split(",").map((s) => s.trim());

    updateNode(Number(position), Number(value));
    reset();
  };

  return (
    <form className="flex gap-2" onSubmit={handleSubmit(onSubmit)}>
      <Button className="basis-1/2" type="submit">
        Update Node
      </Button>
      <Input
        className="basis-1/2"
        {...register("stringValue")}
        placeholder="pos, value"
      />
    </form>
  );
};

export default UpdateNode;
