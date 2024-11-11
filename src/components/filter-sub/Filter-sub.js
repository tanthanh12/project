import React, { useCallback, useContext } from "react";
import {
  AccordionItem,
  AccordionHeader,
  AccordionBody,
  UncontrolledAccordion,
  Button,
} from "reactstrap";
import { AppContext } from "../../AppContext";
import "./Filter-sub.css";

export default function FilterSub(props) {
  const {
    filterProducts,
    setSliderValue,
    selectedItems,
    sliderValue,
    handleItemSelection,
    setSelectedItems,
  } = useContext(AppContext);
  const { onFilterChange } = props;
  const handleSliderChange = useCallback(
    (event) => {
      setSliderValue(parseInt(event.target.value));
      if (onFilterChange) {
        onFilterChange(selectedItems, parseInt(event.target.value));
      }
    },
    [onFilterChange, selectedItems, setSliderValue]
  );

  const applyFilters = () => {
    console.log(selectedItems, sliderValue);
    filterProducts(selectedItems, sliderValue);
  };

  const clearFilter = () => {
    setSelectedItems([]);
    setSliderValue(60000);
    filterProducts([], 600000);
  };
  console.log("Selected Items:", selectedItems);
  console.log("Slider Value:", sliderValue);

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
  return (
    <>
      <div className="filter-sub">
        <div>
          <UncontrolledAccordion stayOpen>
            <AccordionItem>
              <AccordionHeader targetId="1">Sản phẩm</AccordionHeader>
              <AccordionBody accordionId="1">
                <div>
                  <UncontrolledAccordion stayOpen>
                    <AccordionItem>
                      <AccordionHeader targetId="4">Áo</AccordionHeader>
                      <AccordionBody accordionId="4">
                        <div className="shirts">
                          <p
                            pid="1"
                            className={
                              selectedItems.includes("1") ? "active" : ""
                            }
                            onClick={() => handleItemSelection("1")}
                          >
                            Áo thun
                          </p>
                          <p
                            pid="2"
                            className={
                              selectedItems.includes("2") ? "active" : ""
                            }
                            onClick={() => handleItemSelection("2")}
                          >
                            Áo khoác
                          </p>
                          <p
                            pid="3"
                            className={
                              selectedItems.includes("3") ? "active" : ""
                            }
                            onClick={() => handleItemSelection("3")}
                          >
                            Áo polo
                          </p>
                          <p
                            pid="4"
                            className={
                              selectedItems.includes("4") ? "active" : ""
                            }
                            onClick={() => handleItemSelection("4")}
                          >
                            Áo giữ nhiệt
                          </p>
                        </div>
                      </AccordionBody>
                    </AccordionItem>
                    <AccordionItem>
                      <AccordionHeader targetId="5">Quần</AccordionHeader>
                      <AccordionBody accordionId="5">
                        <div className="pants">
                          <p
                            pid="5"
                            className={
                              selectedItems.includes("5") ? "active" : ""
                            }
                            onClick={() => handleItemSelection("5")}
                          >
                            Quần Âu
                          </p>
                          <p
                            pid="6"
                            className={
                              selectedItems.includes("6") ? "active" : ""
                            }
                            onClick={() => handleItemSelection("6")}
                          >
                            Quần Kaki
                          </p>
                          <p
                            pid="7"
                            className={
                              selectedItems.includes("7") ? "active" : ""
                            }
                            onClick={() => handleItemSelection("7")}
                          >
                            Quần Jeans
                          </p>
                          <p
                            pid="8"
                            className={
                              selectedItems.includes("8") ? "active" : ""
                            }
                            onClick={() => handleItemSelection("8")}
                          >
                            Quần Short
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
                            Tất
                          </p>
                          <p
                            pid="10"
                            className={
                              selectedItems.includes("10") ? "active" : ""
                            }
                            onClick={() => handleItemSelection("10")}
                          >
                            Thắt lưng
                          </p>
                          <p
                            pid="11"
                            className={
                              selectedItems.includes("11") ? "active" : ""
                            }
                            onClick={() => handleItemSelection("11")}
                          >
                            Mũ
                          </p>
                          <p
                            pid="12"
                            className={
                              selectedItems.includes("12") ? "active" : ""
                            }
                            onClick={() => handleItemSelection("12")}
                          >
                            Túi
                          </p>
                        </div>
                      </AccordionBody>
                    </AccordionItem>
                  </UncontrolledAccordion>
                </div>
              </AccordionBody>
            </AccordionItem>
            <AccordionItem>
              <AccordionHeader targetId="2">Kích cỡ</AccordionHeader>
              <AccordionBody accordionId="2">
                <div className="product-size">
                  <p
                    className={selectedItems.includes("13") ? "active" : ""}
                    pid="13"
                    onClick={() => handleItemSelection("13")}
                  >
                    S
                  </p>
                  <p
                    className={selectedItems.includes("14") ? "active" : ""}
                    pid="14"
                    onClick={() => handleItemSelection("14")}
                  >
                    M
                  </p>
                  <p
                    className={selectedItems.includes("15") ? "active" : ""}
                    pid="15"
                    onClick={() => handleItemSelection("15")}
                  >
                    L
                  </p>
                  <p
                    className={selectedItems.includes("16") ? "active" : ""}
                    pid="16"
                    onClick={() => handleItemSelection("16")}
                  >
                    XL
                  </p>
                  <p
                    className={selectedItems.includes("17") ? "active" : ""}
                    pid="17"
                    onClick={() => handleItemSelection("17")}
                  >
                    29
                  </p>
                  <p
                    className={selectedItems.includes("18") ? "active" : ""}
                    pid="18"
                    onClick={() => handleItemSelection("18")}
                  >
                    30
                  </p>
                  <p
                    className={selectedItems.includes("19") ? "active" : ""}
                    pid="19"
                    onClick={() => handleItemSelection("19")}
                  >
                    31
                  </p>
                  <p
                    className={selectedItems.includes("20") ? "active" : ""}
                    pid="20"
                    onClick={() => handleItemSelection("20")}
                  >
                    32
                  </p>
                  <p
                    className={selectedItems.includes("21") ? "active" : ""}
                    pid="21"
                    onClick={() => handleItemSelection("21")}
                  >
                    33
                  </p>
                </div>
              </AccordionBody>
            </AccordionItem>
            <AccordionItem>
              <AccordionHeader targetId="3">Giá thành</AccordionHeader>
              <AccordionBody accordionId="3">
                <div className="product-price">
                  <div class="slidecontainer">
                    <input
                      type="range"
                      min="60000"
                      max="600000"
                      step="30000"
                      value={sliderValue}
                      class="slider"
                      id="myRange"
                      onChange={handleSliderChange}
                    />
                  </div>
                  <h6>{convertMoney(sliderValue.toString())}</h6>
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
