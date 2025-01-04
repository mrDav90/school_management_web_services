import DataTable from "@/components/DataTable";
import {
  EyeIcon,
  PencilSquareIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import Modal from "@/components/Modal";
import { useNavigate } from "react-router-dom";
import { confirmPopup } from "@/utils/helpers";
import { Classe, Matiere } from "@/interfaces/interfaces";
import { toast } from "sonner";
import { deleteMatiere, getAllMatieres } from "@/actions/soap.actions";
import NewMatiere from "@/components/specific/NewMatiere";

function Matieres() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [record, setRecord] = useState(null);
  const [matieres, setMatieres] = useState<Matiere[]>([]);
  const [matieresCopy, setMatieresCopy] = useState<Matiere[]>([]);
  const [refetch , setRefetch] = useState(0);
  const onRefresh = () => {
    setRefetch(Date.now())
  }
  useEffect(() => {
    const fetchMatieres = async () => {
        try {
           const data = await getAllMatieres();
           console.log(data);
           
           setMatieres(data as any);
           setMatieresCopy(data as any);
        } catch (error) {
           console.error(error);
        }
    };
    fetchMatieres()
  }, [refetch]);

  const onAdd = () => {
    setOpen(true);
    setRecord(null);
  };

  const onEdit = (record: any) => {
    setOpen(true);
    setRecord(record);
  };

  const onDelete = (id: number | string) => {
    confirmPopup().then( async(res) => {
      if (res.isConfirmed) {
        await deleteMatiere(Number(id))
        .then(() => {
          toast.success("Matière supprimée avec succès!");
          onRefresh();
        })
      }
    });
  };

  const onViewDetails = (record: any) => {
    navigate("/matieres/details/" + record.id);
  };

  const COLUMNS = [
    { label: "Id", renderCell: (item: Classe) => item.id },
    { label: "Libellé", renderCell: (item: Classe) => item.name },
    {
      label: "",
      renderCell: (item: any) => (
        <div className="flex justify-center items-center space-x-4">
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
        </div>
      ),
    },
  ];

  return (
    <div>
      <DataTable  columns={COLUMNS} onAdd={onAdd} dataSource={matieres} dataSourceCopy={matieresCopy} setDataSourceCopy={setMatieresCopy} searchInputs={["id","name"]} /> 
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        title={record ? "Modifier une matière" : "Ajouter une matière"}
      >
        <NewMatiere
          onClose={() => setOpen(false)}
          record={record}
          onRefresh={onRefresh}
        />
      </Modal>
    </div>
  );
}

export default Matieres;
