import { DETAIL_CLASSE } from '@/actions/graphql';
import Spinner from '@/components/Spinner';
import { Classe } from '@/interfaces/interfaces';
import { useQuery } from '@apollo/client';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'

function ClasseDetails() {
    const params = useParams();
    const {data , loading} = useQuery(DETAIL_CLASSE , {
        variables: { id : Number(params.id) },
        skip: !(params.id)
      });
    
    const [record , setRecord] = useState<Classe>();

    useEffect(() => {
        if (data) {
            setRecord(data.getClasseById);
        }
    }, [data])
    
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

export default ClasseDetails