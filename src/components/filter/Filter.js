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
import "./Filter.css";

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
                        <div className="lap">
                          <ul>
                          <li
                            pid="1"
                            className={
                              selectedItems.includes("1") ? "active" : ""
                            }
                            onClick={() => handleItemSelection("1")}
                          >
                            Dell
                          </li>
                          <li
                            pid="2"
                            className={
                              selectedItems.includes("2") ? "active" : ""
                            }
                            onClick={() => handleItemSelection("2")}
                          >
                            Asus
                          </li>
                          <li
                            pid="3"
                            className={
                              selectedItems.includes("3") ? "active" : ""
                            }
                            onClick={() => handleItemSelection("3")}
                          >
                            MSI
                          </li>
                          </ul>
                        </div>
                      </AccordionBody>
                    </AccordionItem>
                    <AccordionItem>
                      <AccordionHeader targetId="5">Điện thoại</AccordionHeader>
                      <AccordionBody accordionId="5">
                        <div className="phones">
                          <ul>
                          <li
                            pid="5"
                            className={
                              selectedItems.includes("5") ? "active" : ""
                            }
                            onClick={() => handleItemSelection("5")}
                          >
                            Samsung
                          </li>
                          <li
                            pid="6"
                            className={
                              selectedItems.includes("6") ? "active" : ""
                            }
                            onClick={() => handleItemSelection("6")}
                          >
                            iPhone
                          </li>
                          <li
                            pid="7"
                            className={
                              selectedItems.includes("7") ? "active" : ""
                            }
                            onClick={() => handleItemSelection("7")}
                          >
                            OPPO
                          </li>
                          <li
                            pid="8"
                            className={
                              selectedItems.includes("8") ? "active" : ""
                            }
                            onClick={() => handleItemSelection("8")}
                          >
                            Nokia
                          </li></ul>
                        </div>
                      </AccordionBody>
                    </AccordionItem>
                    <AccordionItem>
                      <AccordionHeader targetId="6">Phụ kiện</AccordionHeader>
                      <AccordionBody accordionId="6">
                        <div className="accessories">
                          <ul>
                            <li
                              pid="9"
                              className={
                                selectedItems.includes("9") ? "active" : ""
                              }
                              onClick={() => handleItemSelection("9")}
                            >
                              Sạc dự phòng
                            </li>
                            <li
                              pid="10"
                              className={
                                selectedItems.includes("10") ? "active" : ""
                              }
                              onClick={() => handleItemSelection("10")}
                            >
                              Cáp
                            </li>
                            <li
                              pid="11"
                              className={
                                selectedItems.includes("11") ? "active" : ""
                              }
                              onClick={() => handleItemSelection("11")}
                            >
                              Tai nghe
                            </li>
                            <li
                              pid="12"
                              className={
                                selectedItems.includes("12") ? "active" : ""
                              }
                              onClick={() => handleItemSelection("12")}
                            >
                              Loa
                            </li>
                            <li
                              pid="13"
                              className={
                                selectedItems.includes("13") ? "active" : ""
                              }
                              onClick={() => handleItemSelection("13")}
                            >
                              Sạc, Sạc không dây
                            </li>
                          </ul>
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
                    <li
                      pid="14"
                      className={selectedItems.includes("14") ? "active" : ""}
                      onClick={() => {
                        handleItemSelection("14");
                        handleFilter(0, 1000000);
                      }}
                    >
                     Từ 0 - 1.000.000đ
                    </li>
                    <li
                      pid="15"
                      className={selectedItems.includes("15") ? "active" : ""}
                      onClick={() => {
                        handleItemSelection("15");
                        handleFilter(1000000, 5000000);
                      }}
                    >
                      Từ 1.000.000 - 5.000.000đ
                    </li>
                    <li
                      pid="11"
                      className={selectedItems.includes("16") ? "active" : ""}
                      onClick={() => {
                        handleItemSelection("16");
                        handleFilter(5000000, 10000000);
                      }}
                    >
                     Từ 5.000.000 - 10.000.000đ
                    </li>
                    <li
                      pid="17"
                      className={selectedItems.includes("17") ? "active" : ""}
                      onClick={() => {
                        handleItemSelection("17");
                        handleFilter(10000000, 20000000);
                      }}
                    >
                     Từ 10.000.000 - 20.000.000đ
                    </li>
                    <li
                      pid="13"
                      className={selectedItems.includes("18") ? "active" : ""}
                      onClick={() => {
                        handleItemSelection("18");
                        handleFilter(20000000, 50000000);
                      }}
                    >
                      Từ 20.000.000 - 50.000.000đ
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
