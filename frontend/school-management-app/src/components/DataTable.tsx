import { CompactTable } from "@table-library/react-table-library/compact";
import { useTheme } from "@table-library/react-table-library/theme";
import { getTheme } from "@table-library/react-table-library/baseline";
import React from "react";

interface DataTableProps {
  columns: any[];
  onAdd?: () => void;
  dataSource: any;
}

function DataTable({ columns, dataSource, onAdd }: DataTableProps) {
  const theme = useTheme([
    getTheme(),
    {
      Table: `
        background : transparent;
         --data-table-library_grid-template-columns:  25% 25% 25% 25% minmax(150px, 1fr);
      `,
      HeaderRow: `
        border : solid rgba(172, 172, 172, 0.2) 1px;
        background : transparent;
        color : gray;
      `,
      Row: `
        border : solid rgba(172, 172, 172, 0.2) 1px;
        background : transparent;
        &:hover {
          background-color: transparent;
        }
      `,
      Cell: `
        background : transparent;
      `,
    },
  ]);

  const [search, setSearch] = React.useState("");

  const handleSearch = (event: any) => {
    setSearch(event.target.value);
  };

  dataSource = {
    nodes: dataSource.nodes.filter((item: any) =>
      item.name.toLowerCase().includes(search.toLowerCase())
    ),
  };
  return (
    <div>
      <div className="flex justify-between items-end mb-4">
        <input
          className="input w-[300px]"
          placeholder="Entrer votre recherche..."
          id="search"
          type="text"
          value={search}
          onChange={handleSearch}
        />
        <button className="btn btn-primary" onClick={onAdd}>
          Nouveau
        </button>
      </div>

      <CompactTable
        columns={columns}
        data={dataSource}
        theme={theme}
        layout={{ custom: true }}
      />
    </div>
  );
}

export default DataTable;
