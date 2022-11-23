import { useEffect, useState } from "react";
import OtherUI from "./Other.presenter";

export default function Other() {
  const choice = {
    outer: {
      name: "Outer",
      img: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1036&q=80",
    },

    top: {
      name: "Top",
      img: "https://images.unsplash.com/photo-1633966887768-64f9a867bdba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1103&q=80",
    },

    bottom: {
      name: "Bottom",
      img: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=997&q=80",
    },
  };

  const [userSelect, setUserSelect] = useState(null);
  const [randomSelect, setRandomSelect] = useState(null);
  // const [photos, setPhotos] = useState([null, null, null]);

  const onClickSelect = (userChoice) => {
    setUserSelect(choice[userChoice]);
    console.log("userChoice", userChoice);
  };

  const onClickRandomSelect = (randomSelect) => {
    let itemArray = Object.keys(choice);
    let randomIndex = Math.floor(Math.random() * itemArray.length);
    let final = itemArray[randomIndex];
    setRandomSelect(choice[final]);
    // console.log("final", final);
    // console.log("randomSelect", randomSelect);
  };

  const [productList, setProductList] = useState([]);

  const getProducts = async () => {
    let url = `http://localhost:5000/products`;
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
    setProductList(data);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <OtherUI
        choice={choice}
        // outer={outer}
        // top={top}
        // bottom={bottom}
        userSelect={userSelect}
        onClickSelect={onClickSelect}
        randomSelect={randomSelect}
        onClickRandomSelect={onClickRandomSelect}
        productList={productList}
      />
    </>
  );
}
