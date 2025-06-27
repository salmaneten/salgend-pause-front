import { useState, useRef } from "react";
import useClickOutSide from "./useClickOutSide.ts";

export const useTableSelection = () => {
    const [selectedRow, setSelectedRow] = useState<number | null>(null);
  const tableRef = useRef<HTMLDivElement>(null);
  
  useClickOutSide(tableRef, () => setSelectedRow(null));

  return {
    selectedRow,
    setSelectedRow,
    tableRef
  };
}