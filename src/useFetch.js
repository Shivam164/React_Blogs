import { useState,useEffect } from "react";

const useFetch = (url) => {

    const [data,setData] = useState(null);
    const [pending,setPending] = useState(true);
    const [error,setError] = useState(null);

    useEffect(() => {

        const abortCont = new AbortController();

        fetch(url,{signal : abortCont.signal})
        .then(res => {
            if(!res.ok){
                throw Error('Could not fetch the data from the resource');
            }
            return res.json();
        })
        .then(data => {
            setData(data);
            setPending(false);
        }).catch(err => {
            if(err.name !== 'AbortError'){
                setPending(false); 
                setError(err.message);   
            }
            
        })
        return () => abortCont.abort(); 
     },[]);
     
     return {data,pending,error};
}

export default useFetch ;