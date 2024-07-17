import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useAlgorithmState, useAlgorithmActions } from "@/contexts/Algorithm";

const HeaderDropdown = () => {
  const { algorithmName, algorithmNames } = useAlgorithmState();
  const { selectAlgorithm } = useAlgorithmActions();

  return (
    <Select
      defaultValue={algorithmName}
      value={algorithmName}
      onValueChange={(value) => selectAlgorithm(value)}
    >
      <SelectTrigger className="text-secondary-foreground w-60">
        <SelectValue placeholder="Select an algorithm" />
      </SelectTrigger>
      <SelectContent>
        {algorithmNames.map((algoName) => (
          <SelectItem key={algoName} value={algoName}>
            {algoName}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export { HeaderDropdown };
