import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const LLType = [
  "Singly Linked List",
  "Doubly Linked List",
  "Circular Singly Linked List",
  "Circular Doubly Linked List",
];

const LLDropdown = () => {
  return (
    <Select>
      <SelectTrigger className="text-secondary-foreground w-60">
        <SelectValue placeholder="Select type" />
      </SelectTrigger>
      <SelectContent>
        {LLType.map((name) => (
          <SelectItem key={name} value={name}>
            {name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default LLDropdown;
