import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const HeaderDropdown = () => {
  return (
    <Select defaultValue="Sorting">
      <SelectTrigger className="text-secondary-foreground w-60">
        <SelectValue placeholder="Select an algorithm" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="Sorting">Sorting</SelectItem>
        <SelectItem value="searching">Searching</SelectItem>
        <SelectItem value="backtracking">Backtracking</SelectItem>
        <SelectItem value="linked-list">Linked list</SelectItem>
        <SelectItem value="trees">Trees</SelectItem>
      </SelectContent>
    </Select>
  );
};

export { HeaderDropdown };
