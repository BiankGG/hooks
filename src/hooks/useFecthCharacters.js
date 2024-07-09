import { useState, useEffect} from 'react';

const useFetchCharacters = (url)=>{
    const [data,setData]=useState(null);
    const [loading,setLoading]= useState(true);
    const [error, setError]= useState(null);

    const fetchData =async()=>{
        try {
            const response = await fetch(url);
            if(!response.ok){
                throw new error('no response');
            }
            const result = await response.json();
            setData(result);
            setLoading(false);
            
        } catch (error) {
            setError(error);
            setLoading(false);
            
        }
    };
    useEffect(()=>{
        fetchData();
    }, [url]);
    return {data,loading,error};

}

export default useFetchCharacters;