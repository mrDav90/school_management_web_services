import DataTable from "@/components/DataTable";
import { EyeIcon, PencilSquareIcon, TrashIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import Modal from "@/components/Modal";
import NewStudent from "@/components/specific/NewStudent";
import { useNavigate } from "react-router-dom";
import { confirmPopup } from "@/utils/helpers";

const nodes = [
  {
    id: "0",
    name: "Shopping List",
    deadline: new Date(2020, 1, 15),
    type: "TASK",
    isComplete: true,
    nodes: 3,
  },
  {
    id: "1",
    name: "Carts List",
    deadline: new Date(2020, 1, 15),
    type: "TASK",
    isComplete: false,
    nodes: 3,
  },
  {
    id: "2",
    name: "All tests",
    deadline: new Date(2020, 1, 15),
    type: "TASK",
    isComplete: true,
    nodes: 3,
  }
];

function Students() {
  const navigate = useNavigate();
  const [open , setOpen] = useState(false);
  const [record , setRecord] = useState(null);
  const data = { nodes };

  const onAdd = () => {
    setOpen(true);
    setRecord(null);
  }

  const onEdit = (record : any) => {
    setOpen(true);
    setRecord(record);
  }

  const onDelete = (id : number | string) => {
    confirmPopup()
    .then((res)=>{
      if (res.isConfirmed) {
        console.log("Deleted");
      }
    })
  }

  const onViewDetails = (record : any) => {
    navigate("/students/details/" + record.id);
  }

  const COLUMNS = [
    { label: "Task", renderCell: (item: any) => item.name , select : true },
    {
      label: "Deadline",
      renderCell: (item: any) =>
        item.deadline.toLocaleDateString("en-US", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        }),
    },
    { label: "Type", renderCell: (item: any) => item.type },
    {
      label: "Complete",
      renderCell: (item: any) => item.isComplete.toString(),
    },
    { label: "Tasks", renderCell: (item: any) => item.nodes?.length },
    { label: "", renderCell: (item: any) => <div className="flex justify-center items-center space-x-4" >
      <button
        className="btn btn-text"
        onClick={() => {
          onViewDetails(item);
        }}
      >
        <EyeIcon className="w-5 h-5 text-primaryColor-500" />
      </button>
      <button
        className="btn btn-text"
        onClick={() => {
          onEdit(item);
        }}
      >
        <PencilSquareIcon className="w-5 h-5 text-green-700" />
      </button>
      <button
        className="btn btn-text"
        onClick={() => {
          onDelete(item.id);
        }}
      >
        <TrashIcon className="w-5 h-5 text-red-500" />
      </button>
    </div> },
  ];

 
  return (
    <div>
      <DataTable 
        columns={COLUMNS} 
        onAdd={onAdd}
        dataSource={data} 
      />

      <Modal open={open} onClose={() => setOpen(false)} title={record ? "Modifier un étudiant" : "Ajouter un étudiant"} >
        <NewStudent 
          onClose={() => setOpen(false)} 
          record={record}
          onRefresh={() => {}}
        />
      </Modal>
    </div>
  );
}

export default Students;
