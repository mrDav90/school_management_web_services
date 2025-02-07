import DataTable from "@/components/DataTable";
import {
  EyeIcon,
  PencilSquareIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import Modal from "@/components/Modal";
import NewStudent from "@/components/specific/NewStudent";
import { useNavigate } from "react-router-dom";
import { confirmPopup } from "@/utils/helpers";
import useFetch from "@/utils/hooks/useFetch";
import { endpoints } from "@/constants/endpoints.constants";
import { Etudiant } from "@/interfaces/interfaces";
import { deleteActions } from "@/actions/actions";
import { toast } from "sonner";

function Students() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [record, setRecord] = useState(null);
  const { response, isLoading, onRefresh } = useFetch(endpoints.etudiants.LIST);
  const [etudiants, setEtudiants] = useState<Etudiant[]>([]);
  const [etudiantsCopy, setEtudiantsCopy] = useState<Etudiant[]>([]);

  useEffect(() => {
    if (response) {
      setEtudiants(response.data);
      setEtudiantsCopy(response.data);
    }
  }, [response]);

  const onAdd = () => {
    setOpen(true);
    setRecord(null);
  };

  const onEdit = (record: any) => {
    setOpen(true);
    setRecord(record);
  };

  const onDelete = (id: number) => {
    confirmPopup().then((res) => {
      if (res.isConfirmed) {
        deleteActions(endpoints.etudiants.DELETE(id)).then((response) => {
          if (response?.data) {
            toast.success("Etudiant supprimé avec succès");
            onRefresh();
          }
        });
      }
    });
  };

  const onViewDetails = (record: any) => {
    navigate("/students/details/" + record.id);
  };

  const COLUMNS = [
    { label: "Nom", renderCell: (item: Etudiant) => item.firstName },
    { label: "Prénom", renderCell: (item: Etudiant) => item.lastName },
    { label: "Email", renderCell: (item: Etudiant) => item.email },
    { label: "Genre", renderCell: (item: Etudiant) => item.gender },
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
        isLoading={isLoading}
        columns={COLUMNS}
        onAdd={onAdd}
        dataSource={etudiants}
        dataSourceCopy={etudiantsCopy}
        setDataSourceCopy={setEtudiantsCopy}
        searchInputs={["firstName", "lastName", "email"]}
      />

      <Modal
        open={open}
        onClose={() => setOpen(false)}
        title={record ? "Modifier un étudiant" : "Ajouter un étudiant"}
      >
        <NewStudent
          onClose={() => setOpen(false)}
          record={record}
          onRefresh={onRefresh}
        />
      </Modal>
    </div>
  );
}

export default Students;
