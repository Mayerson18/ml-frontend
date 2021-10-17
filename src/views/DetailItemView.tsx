import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Description from "../components/Description";
import Loading from "../components/Loading";
import Picture from "../components/Picture";
import AppLayout from "../containers/AppLayout";
import ContentLayout from "../containers/ContentLayout";
import ItemPurchase from "../containers/ItemPurchase";
import { useItem } from "../context/ItemContext";

const DetailItemView = () => {
  const params: { id: string } = useParams();
  const { getItemById, item, categories, isLoading } = useItem();

  useEffect(() => {
    getItemById(params.id);
  }, [params]);

  return (
    <AppLayout>
      {isLoading || !item ? (
        <Loading />
      ) : (
        <ContentLayout categories={categories}>
          <div className="d-flex justify-content-between py-4">
            <div>
              <Picture picture={item.picture} title=""/>
              <div className="mt-5 ml-4 d-none d-md-block">
                <Description description={item.description} />
              </div>
            </div>
            <div className="ml-1 ml-md-2 ml-lg-5">
              <ItemPurchase
                condition={item.condition}
                sold_quantity={item.sold_quantity}
                title={item.title}
                price={item.price}
              />
            </div>
          </div>
          <div className="mt-3 d-block d-md-none">
            <Description description={item.description} />
          </div>
        </ContentLayout>
      )}
    </AppLayout>
  );
};

export default DetailItemView;
