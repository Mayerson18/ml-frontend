import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import AppLayout from '../containers/AppLayout';
import ContentLayout from '../containers/ContentLayout';
import queryString from "query-string";
import { useItem } from '../context/ItemContext';
import Item from '../containers/Item';
import Loading from '../components/Loading';
import NoResultsFound from '../components/NoResultsFound';

const SearchResultsView = () => {
  const location = useLocation();
  const { getItems, items, categories, isLoading } = useItem();

  useEffect(() => {
    const queryParams = queryString.parse(location.search);
    getItems(queryParams.search);    
  }, [location.search]);

  return (
    <AppLayout>
      {
        isLoading ? <Loading />
        : (
          <ContentLayout categories={categories}>
            {
              items.length > 0 ? 
                items.map((item: any, index: number) => (
                  <div 
                    className={`py-3 ${(index+1) < items.length ? "border-bottom" : ""}`}
                    key={`${item.id}`}>
                    <Item
                      item={item}
                    />
                  </div>
                ))
              : (
                <NoResultsFound />
              )
            }
          </ContentLayout>
        )
      }
    </AppLayout>
  )
}

export default SearchResultsView;