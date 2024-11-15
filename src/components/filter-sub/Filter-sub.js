import React, { useEffect, useState } from "react";
import {
  AccordionItem,
  AccordionHeader,
  AccordionBody,
  UncontrolledAccordion,
  Button,
} from "reactstrap";
import { useParams } from "react-router-dom";
import useFetch from "../../features/useFetch";
import "./Filter-sub.css";

export default function Filter(props) {
  const { slug: keysearch } = useParams();

  const dataProduct = useFetch(
    "https://6518dbbd818c4e98ac5ff3ae.mockapi.io/products"
  );
  const [filterProduct, setFilterProduct] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);
  const [sliderValue, setSliderValue] = useState(0);
  
  const handleFilter = (min, max) => {
    const filterData = dataProduct.filter((item) =>
      min && max ? item.pricecore >= min && item.pricecore <= max : true
    );
    setFilterProduct(filterData);
  };

  const handleItemSelection = (pid) => {
    setSelectedItems((prevSelected) =>
      prevSelected.includes(pid)
        ? prevSelected.filter((item) => item !== pid)
        : [...prevSelected, pid]
    );
  };

  const filterProducts = () => {
    const filteredData = dataProduct.filter(
      (item) =>
        (selectedItems.length == 0 || selectedItems.includes(item.pid)) &&
        item.pricecore >= sliderValue
    );
    setFilterProduct(filteredData);
  };

  useEffect(() => {
    if (keysearch) {
    } else {
      setFilterProduct(dataProduct);
    }
  }, [dataProduct, keysearch]);

  const { onFilterChange } = props;
  const applyFilters = () => {
    filterProducts();
    if (onFilterChange) onFilterChange(filterProduct);
  };

  const clearFilter = () => {
    setSelectedItems([]);
    setSliderValue(0);
    setFilterProduct(dataProduct);
  };
  return (
    <>
      <div className="filter">
        <div>
          <UncontrolledAccordion stayOpen>
            <AccordionItem>
              <AccordionHeader targetId="1">Sản phẩm</AccordionHeader>
              <AccordionBody accordionId="1">
                <div>
                  <UncontrolledAccordion stayOpen>
                    <AccordionItem>
                      <AccordionHeader targetId="4">Laptop</AccordionHeader>
                      <AccordionBody accordionId="4">
                        <div className="shirts">
                          <p
                            pid="1"
                            className={
                              selectedItems.includes("1") ? "active" : ""
                            }
                            onClick={() => handleItemSelection("1")}
                          >
                            Dell
                          </p>
                          <p
                            pid="2"
                            className={
                              selectedItems.includes("2") ? "active" : ""
                            }
                            onClick={() => handleItemSelection("2")}
                          >
                            Asus
                          </p>
                          <p
                            pid="3"
                            className={
                              selectedItems.includes("3") ? "active" : ""
                            }
                            onClick={() => handleItemSelection("3")}
                          >
                            MSI
                          </p>
                        </div>
                      </AccordionBody>
                    </AccordionItem>
                    <AccordionItem>
                      <AccordionHeader targetId="5">Điện thoại</AccordionHeader>
                      <AccordionBody accordionId="5">
                        <div className="pants">
                          <p
                            pid="5"
                            className={
                              selectedItems.includes("5") ? "active" : ""
                            }
                            onClick={() => handleItemSelection("5")}
                          >
                            Samsung
                          </p>
                          <p
                            pid="6"
                            className={
                              selectedItems.includes("6") ? "active" : ""
                            }
                            onClick={() => handleItemSelection("6")}
                          >
                            iPhone
                          </p>
                          <p
                            pid="7"
                            className={
                              selectedItems.includes("7") ? "active" : ""
                            }
                            onClick={() => handleItemSelection("7")}
                          >
                            OPPO
                          </p>
                          <p
                            pid="8"
                            className={
                              selectedItems.includes("8") ? "active" : ""
                            }
                            onClick={() => handleItemSelection("8")}
                          >
                            Nokia
                          </p>
                        </div>
                      </AccordionBody>
                    </AccordionItem>
                    <AccordionItem>
                      <AccordionHeader targetId="6">Phụ kiện</AccordionHeader>
                      <AccordionBody accordionId="6">
                        <div className="accessories">
                          <p
                            pid="9"
                            className={
                              selectedItems.includes("9") ? "active" : ""
                            }
                            onClick={() => handleItemSelection("9")}
                          >
                            Sạc dự phòng
                          </p>
                          <p
                            pid="10"
                            className={
                              selectedItems.includes("10") ? "active" : ""
                            }
                            onClick={() => handleItemSelection("10")}
                          >
                            Cáp
                          </p>
                          <p
                            pid="11"
                            className={
                              selectedItems.includes("11") ? "active" : ""
                            }
                            onClick={() => handleItemSelection("11")}
                          >
                            Tai nghe
                          </p>
                          <p
                            pid="12"
                            className={
                              selectedItems.includes("12") ? "active" : ""
                            }
                            onClick={() => handleItemSelection("12")}
                          >
                            Loa
                          </p>
                          <p
                            pid="13"
                            className={
                              selectedItems.includes("13") ? "active" : ""
                            }
                            onClick={() => handleItemSelection("13")}
                          >
                            Sạc, Sạc không dây
                          </p>
                        </div>
                      </AccordionBody>
                    </AccordionItem>
                  </UncontrolledAccordion>
                </div>
              </AccordionBody>
            </AccordionItem>
            <AccordionItem>
              <AccordionHeader targetId="3">Giá thành</AccordionHeader>
              <AccordionBody accordionId="3">
                <div className="product-price">
                  <ul>
                    <li onClick={() => handleFilter()}>Tất cả</li>
                    <li onClick={() => handleFilter(0, 1000000)}>
                      From 0 - 1.000.000đ
                    </li>
                    <li onClick={() => handleFilter(1000000, 5000000)}>
                      From 1.000.000 - 5.000.000đ
                    </li>
                    <li onClick={() => handleFilter(5000000, 10000000)}>
                      From 5.000.000 - 10.000.000đ
                    </li>
                    <li onClick={() => handleFilter(10000000, 20000000)}>
                      From 10.000.000 - 20.000.000đ
                    </li>
                    <li onClick={() => handleFilter(20000000, 50000000)}>
                      From 20.000.000 - 50.000.000đ
                    </li>
                  </ul>
                </div>
              </AccordionBody>
            </AccordionItem>
          </UncontrolledAccordion>
        </div>
        <div class="btn-group">
          <Button type="button" class="btn btn-primary" onClick={applyFilters}>
            Tìm kiếm
          </Button>
          <Button type="button" class="btn btn-primary" onClick={clearFilter}>
            Xoá lọc
          </Button>
        </div>
      </div>
    </>
  );
}
