import { getMatiere } from '@/actions/soap.actions';
import Spinner from '@/components/Spinner';
import { Matiere } from '@/interfaces/interfaces';
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

function MatiereDetails() {
  const params = useParams();
  const [record , setRecord] = useState<Matiere>();
  const [loading , setLoading] = useState(false);
  useEffect(() => {
      const fetchMatiere = async () => {
        await getMatiere(Number(params.id))
        .then((data : any) => {
          setRecord(data);
        })
        .finally(() => {
          setLoading(false)
        })
       
      }
      fetchMatiere();
  },[])
  return (
    <div className='bg-white rounded-lg  dark:bg-sideBarBgColorDark dark:text-white p-4' >
        {loading ? <Spinner /> : 
          <div className='space-y-2' >
            <p>ID : {record?.id}</p>
            <p>Libellé : {record?.name}</p>
          </div>
        }
      </div>
  )
}

export default MatiereDetails