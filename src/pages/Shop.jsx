import { useEffect, useState } from "react";
import { db } from "../firebase";
import { getDocs, collection } from "firebase/firestore";
function Shop() {
  const [products, setProducts] = useState([]);
  const productsCollectionRef = collection(db, "products");

  //
  const getProducts = async () => {
    const data = await getDocs(productsCollectionRef);
    const filteredData = data.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    setProducts(filteredData);
    console.log(filteredData);
  };
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div>
      <h2>hello</h2>
    </div>
  );
}

export default Shop;
