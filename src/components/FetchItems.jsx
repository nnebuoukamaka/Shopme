import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useGetProductsQuery } from '../api/endpoints';
import { setError, setItems, setStatus } from '../reduxStore/count';

const FetchItems = () => {

    const dispatch = useDispatch();
    const count = useSelector((state) => state.items.count);
    const {data, error, status, isLoading} = useGetProductsQuery(count);

    useEffect(() => {
       if(isLoading){
        dispatch(setStatus());
       }
       else if(error){
        dispatch(setError(error));
       }
       else if(data){
        dispatch(setItems(data.products));

       }
        },
       [data, error,isLoading, dispatch]);


  return null ;
};

export default FetchItems