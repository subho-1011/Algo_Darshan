import * as provider from "@/contexts";
import TreeNavbar from "./TreeNavbar";
import TreesPage from "./TreePage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Trees Structure | Algo Darshan",
  },
  description: "Different types of trees and their applications",
};

export default function TreePageLayout() {
  return (
    <provider.NoOfElementsProvider>
      <provider.SpeedProvider>
        <provider.TreesProvider>
          <TreeNavbar />
          <TreesPage />
        </provider.TreesProvider>
      </provider.SpeedProvider>
    </provider.NoOfElementsProvider>
  );
}
