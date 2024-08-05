import { Metadata } from "next";
import * as providers from "@/contexts";
import NQueenComponents from "@/components/backtracking/n-queen";

export const metadata: Metadata = {
  title: {
    absolute: "N-Queen Problem | Algo Darshan",
  },
  description: "Solve the N-Queen problem using backtracking algorithm",
};

const NQueenPage = () => {
  return (
    <providers.NQueenProvider>
      <NQueenComponents />;
    </providers.NQueenProvider>
  );
};

export default NQueenPage;
