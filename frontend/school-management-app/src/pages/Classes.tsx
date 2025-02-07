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
import { Classe } from "@/interfaces/interfaces";
import { useMutation, useQuery } from "@apollo/client";
import { DELETE_CLASSE, LIST_CLASSES } from "@/actions/graphql";
import NewClasse from "@/components/specific/NewClasse";
import { toast } from "sonner";

function Classes() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [record, setRecord] = useState(null);
  const { loading, data, refetch } = useQuery(LIST_CLASSES);
  const [deleteClasse] = useMutation(DELETE_CLASSE);
  const [classes, setClasses] = useState<Classe[]>([]);
  const [classesCopy, setClassesCopy] = useState<Classe[]>([]);

  useEffect(() => {
    if (data) {
      setClasses(data.listClasses);
      setClassesCopy(data.listClasses);
    }
  }, [data]);

  const onAdd = () => {
    setOpen(true);
    setRecord(null);
  };

  const onEdit = (record: any) => {
    setOpen(true);
    setRecord(record);
  };

  const onDelete = (id: number | string) => {
    confirmPopup().then(async (res) => {
      if (res.isConfirmed) {
        await deleteClasse({
          variables: {
            id,
          },
        }).then((response) => {
          if (response?.data) {
            toast.success("Classe supprimée avec succès");
            refetch();
          }
        });
      }
    });
  };

  const onViewDetails = (record: any) => {
    navigate("/classes/details/" + record.id);
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
      <DataTable
        isLoading={loading}
        columns={COLUMNS}
        onAdd={onAdd}
        dataSource={classes}
        dataSourceCopy={classesCopy}
        setDataSourceCopy={setClassesCopy}
        searchInputs={["id", "name"]}
      />
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        title={record ? "Modifier une classe" : "Ajouter une classe"}
      >
        <NewClasse
          onClose={() => setOpen(false)}
          record={record}
          onRefresh={refetch}
        />
      </Modal>
    </div>
  );
}

export default Classes;
