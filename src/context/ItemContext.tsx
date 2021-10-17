import React, { useContext, useEffect, useMemo, useState, createContext } from 'react';
import { fetchItemById, fetchItems } from '../api';
import queryString from "query-string";

interface IContextProps {
  state: {};
  dispatch: ({type}:{type:string}) => void;
}
const ItemContext = createContext({} as IContextProps);

// Shared state
export const ItemProvider = (props: any) => {
  const [search, setSearch] = useState("");
  const [items, setItems] = useState([]);
  const [categories, setCategories] = useState([]);
  const [item, setItem] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const queryParams = queryString.parse(window.location.search);
    setSearch(queryParams.search as string || "");
  }, [window.location.search]);
  
  const handleSearchChange = (event: any) => setSearch(event.target.value);

  /**
   * Fetch data from api
   * @param {String} search is query
   */
  const getItems = (search: string) => {
    setIsLoading(true);
    const promise = fetchItems(search);
    promise.then((res: any) => {
      setItems(res.data.items);
      setCategories(res.data.categories);
    }).catch((error: any) => {
      console.error(`error`, error);
    }).finally(() => setIsLoading(false));
    return promise;
  }

  /**
   * Get item by id
   * @param {String} id is item id
   */
  const getItemById = (id: string) => {
    setIsLoading(true);
    const promise = fetchItemById(id);
    promise.then((res: any) => {
      setItem(res.data.item);
      setCategories(res.data.categories);
    }).catch(error => {
      console.error(`error`, error);
    }).finally(() => setIsLoading(false));
    return promise;
  };

  const value = useMemo(() => {
    return {
      search,
      items,
      categories,
      item,
      isLoading,
      handleSearchChange,
      getItems,
      getItemById,
    }
  }, [search, items, categories, item, isLoading,]);

  return <ItemContext.Provider value={value} {...props} />
}

export const useItem = () => {
  const context: any = useContext(ItemContext);
  if (!context)
    throw new Error("useItem must be inside the ItemContext provider");
  return context;
}