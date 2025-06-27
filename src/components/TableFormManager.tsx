import React from "react";
import UpdateTableForm from "./UpdateTableForm.tsx";
import AddTableForm from "./AddTableForm.tsx";

interface TableFormManagerProps {
    selectedRow: number | null;
    content: any[];
    refetch: () => void;
}
const TableFormManager: React.FC<TableFormManagerProps> = ({
    selectedRow,
    content,
    refetch
}) =>  {
    if(selectedRow !== null){
        return (
          <UpdateTableForm
            refetch = {refetch}
            rowContent = {content[selectedRow] || null}
          />
        );
    }
    return <AddTableForm refetch = {refetch}/> 
}
export default TableFormManager;