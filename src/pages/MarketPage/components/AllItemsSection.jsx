import React, { useEffect, useState } from "react";
import { getProducts } from "../../../api/itemApi";
import ItemCard from "./ItemCard";

const getPageSize = () => {
  const width = window.innerWidth;
  if (width < 768) {
    // Mobile viewport
    return 4;
  } else if (width < 1280) {
    // Tablet viewport
    return 6;
  } else {
    // Desktop viewport
    return 10;
  }
};

function AllItemsSection() {
  const [orderBy, setOrderBy] = useState("recent");
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(getPageSize());
  const [itemList, setItemList] = useState([]);

  const fetchSortedData = async ({ orderBy, page, pageSize }) => {
    const products = await getProducts({ orderBy, page, pageSize });
    setItemList(products);
  };

  useEffect(() => {
    const handleResize = () => {
      setPageSize(getPageSize());
    };

    // 화면 크기 변경할 때마다 pageSize를 다시 계산해 넣음
    window.addEventListener("resize", handleResize);
    fetchSortedData({ orderBy, page, pageSize });

    // Cleanup function
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [orderBy, page, pageSize]);

  return (
    <div>
      <h1 className="sectionTitle">판매 중인 상품</h1>
      <div className="allItemsCardSection">
        {itemList?.map((item) => (
          <ItemCard item={item} key={`market-item-${item.id}`} />
        ))}
      </div>
    </div>
  );
}

export default AllItemsSection;
