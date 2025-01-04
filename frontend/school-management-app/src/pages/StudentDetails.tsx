import { endpoints } from '@/constants/endpoints.constants';
import { Etudiant } from '@/interfaces/interfaces';
import { formatDate } from '@/utils/helpers';
import useFetch from '@/utils/hooks/useFetch';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'

function StudentDetails() {
    const params = useParams();
    const {response , isLoading } = useFetch(endpoints.etudiants.DETAIL(Number(params.id)));
    const [record , setRecord] = useState<Etudiant>();
    useEffect(() => {
      if (response) {
        setRecord(response.data);
      }
    }, [response])
    
    return (
      <div className='bg-white rounded-lg  dark:bg-sideBarBgColorDark dark:text-white p-4' >
        {isLoading ? "Loading" : 
          <div className='space-y-2' >
            <p>ID : {record?.id}</p>
            <p>Nom de famille : {record?.lastName}</p>
            <p>Prénoms : {record?.firstName}</p>
            <p>Email : {record?.email}</p>
            <p>Date de naissance : {record?.dateOfBirth && formatDate(record?.dateOfBirth)}</p>
            <p> Genre : {record?.gender?.toString()}</p>
            <p> Téléphone : {record?.phone}</p>
          </div>
        }
      </div>
    )
}

export default StudentDetails