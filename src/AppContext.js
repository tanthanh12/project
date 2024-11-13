import React, { useEffect, useState, createContext, useCallback } from "react";
import axios from "axios";
import Swal from "sweetalert2";

export const AppContext = createContext({});
export const AppProvider = ({ children }) => {
  const [show, setShow] = useState(true);
  const [cart, setCart] = useState([]);
  const [data, setData] = useState(null);
  const [detail, setDetail] = useState(null);
  const [filteredData, setFilteredData] = useState([]);
  const [sliderValue, setSliderValue] = useState(60000);
  const [selectedItems, setSelectedItems] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const getData = async () => {
    const url = "https://6518dbbd818c4e98ac5ff3ae.mockapi.io/products";
    axios
      .get(url)
      .then((res) => {
        setData(res.data);
      })
      .catch((error) => {
        if (error.response.status == 404) {
          console.error("Data not found");
        }
      });
  };

  useEffect(() => {
    if (localStorage.getItem("cart_list")) {
      setCart(JSON.parse(localStorage.getItem("cart_list")));
    }
  }, []);

  useEffect(() => {
    getData();
  }, []);
  function convertMoney(num, separator) {
    separator = separator === undefined ? "." : separator;
    num = String(num).replace(/[^0-9]/g, "");
    if (!isNaN(num)) {
      var array = num.toString().split("");
      var index = -3;
      while (array.length + index > 0) {
        array.splice(index, 0, separator);
        index -= 4;
      }
      return array.join("");
    }
  }
  function convertNumber(str) {
    return str.replace(/[^0-9]/g, "");
  }

  const addCart = async (
    id,
    color,
    name,
    price,
    avatar,
    pricecore,
    configuration
  ) => {
    const existingItemIndex = cart.findIndex(
      (item) =>
        item.id === id &&
        item.color === color &&
        item.name === name &&
        item.price === price &&
        item.avatar === avatar &&
        item.pricecore === pricecore &&
        item.configuration === configuration
    );
    if (existingItemIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart[existingItemIndex].qty += 1;
      setCart(updatedCart);
      localStorage.setItem("cart_list", JSON.stringify(updatedCart));
    } else {
      const newItem = {
        id,
        color,
        qty: 1,
        name,
        avatar,
        price,
        pricecore,
        configuration,
      };
      const newCart = [...cart, newItem];
      setCart(newCart);
      localStorage.setItem("cart_list", JSON.stringify(newCart));
    }
    Swal.fire({
      title: "Đã thêm vào giỏ hàng",
      icon: "success",
    });
  };

  const changeQty = useCallback(
    (id, num) => {
      const updatedCart = cart.map((item) =>
        item.id === id && num === -1 && item.qty === 1
          ? { ...item, qty: item.qty + num }
          : item
      );
      setCart(updatedCart);
      localStorage.setItem("cart_list", JSON.stringify(updatedCart));
    },
    [cart]
  );

  const updateQty = useCallback(
    (productId, newQty) => {
      const updatedCart = cart.map((item) => {
        if (item.id === productId) {
          return { ...item, qty: newQty };
        }
        return item;
      });
      setCart(updatedCart);
    },
    [cart]
  );

  const removeItem = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
    localStorage.setItem("cart_list", JSON.stringify(updatedCart));
  };
  const filterProducts = useCallback(
    (name, pricecore, size) => {
      if (!data) return [];
      return data.filter((item) => {
        let nameMatch = true;
        let priceMatch = true;
        let sizeMatch = true;

        if (name && typeof name == "string") {
          const lowerCaseName = item.name.toLowerCase();
          if (lowerCaseName.indexOf(name.toLowerCase()) == -1) {
            nameMatch = false;
          }
        }

        if (
          pricecore &&
          !(
            item.pricecore >= pricecore - 100000 &&
            item.pricecore <= pricecore + 100000
          )
        ) {
          priceMatch = false;
        }

        if (size) {
          if (item.size != size) {
            sizeMatch = false;
          }
        }

        return nameMatch && priceMatch && sizeMatch;
      });
    },
    [data]
  );
  const handleFilterChange = useCallback(
    (selectedItems, sliderValue) => {
      filterProducts(selectedItems, sliderValue);
    },
    [filterProducts]
  );
  const handleSliderChange = useCallback((value) => {
    const parsedValue = parseInt(value);
    setSliderValue(parsedValue);
  }, []);
  const handleChange = (e) => {
    const value = e.target.value;
    handleSliderChange(value);
  };

  const handleItemSelection = useCallback((itemId) => {
    setSelectedItems((prevItems) => {
      if (prevItems.includes(itemId)) {
        return prevItems.filter((id) => id !== itemId);
      } else {
        return [...prevItems, itemId];
      }
    });
  }, []);
  return (
    <AppContext.Provider
      value={{
        show,
        addCart,
        cart,
        setCart,
        data,
        changeQty,
        removeItem,
        updateQty,
        filterProducts,
        filteredData,
        setFilteredData,
        selectedItems,
        setSelectedItems,
        setSliderValue,
        sliderValue,
        handleSliderChange,
        handleItemSelection,
        convertMoney,
        handleFilterChange,
        handleChange,
        searchQuery,
        setSearchQuery,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
