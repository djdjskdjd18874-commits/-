import { useState } from "react";
import productsData from "../data/products"; // استورد المصفوفة من ملفك

function useProducts() {
  // نخزن المنتجات في state (ممكن لاحقاً تجيبها من API)
  const [products] = useState(productsData);
  

  return products;
}

export default useProducts;
