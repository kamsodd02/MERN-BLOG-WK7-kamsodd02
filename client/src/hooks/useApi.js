import { useState, useEffect } from 'react';

export default function useApi(requestFn, deps=[]){
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(()=>{
    let mounted = true;
    const load = async ()=>{
      setLoading(true);
      try{
        const res = await requestFn();
        if (mounted) setData(res.data || res);
      }catch(err){
        if (mounted) setError(err);
      }finally{
        if (mounted) setLoading(false);
      }
    };
    load();
    return ()=> mounted=false;
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return { data, loading, error };
}
