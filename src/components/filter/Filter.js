import React, { useContext } from "react";
import {
  AccordionItem,
  AccordionHeader,
  AccordionBody,
  UncontrolledAccordion,
  Button,
} from "reactstrap";
import { AppContext } from "../../AppContext";
import "./Filter.css";

export default function Filter(props) {
  const {
    selectedItems,
    sliderValue,
    filterProducts,
    handleItemSelection,
    handleSliderChange,
    convertMoney,
    handleChange,
  } = useContext(AppContext);
  const { onFilterChange } = props;

  const applyFilters = () => {
    filterProducts(selectedItems, sliderValue);
  };

  const clearFilter = () => {
    handleItemSelection([]);
    handleSliderChange(60000);
    filterProducts([], 60000);
  };
  console.log("Selected Items:", selectedItems);
  console.log("Slider Value:", sliderValue);

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
                            Cáp sạc,Hud,Cáp chuyển đổi
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
                            Củ sạc, sạc không dây
                          </p>
                        </div>
                      </AccordionBody>
                    </AccordionItem>
                  </UncontrolledAccordion>
                </div>
              </AccordionBody>
            </AccordionItem>
            <AccordionItem>
              <AccordionHeader targetId="2">Cấu hình</AccordionHeader>
              <AccordionBody accordionId="2">
                <div className="product-size">
                  <p
                    className={selectedItems.includes("14") ? "active" : ""}
                    pid="14"
                    onClick={() => handleItemSelection("14")}
                  >
                    8GB
                  </p>
                  <p
                    className={selectedItems.includes("15") ? "active" : ""}
                    pid="15"
                    onClick={() => handleItemSelection("15")}
                  >
                    12GB
                  </p>
                  <p
                    className={selectedItems.includes("16") ? "active" : ""}
                    pid="16"
                    onClick={() => handleItemSelection("16")}
                  >
                    16GB
                  </p>
                  <p
                    className={selectedItems.includes("17") ? "active" : ""}
                    pid="17"
                    onClick={() => handleItemSelection("17")}
                  >
                    128GB
                  </p>
                  <p
                    className={selectedItems.includes("18") ? "active" : ""}
                    pid="18"
                    onClick={() => handleItemSelection("18")}
                  >
                    256GB
                  </p>
                  <p
                    className={selectedItems.includes("19") ? "active" : ""}
                    pid="19"
                    onClick={() => handleItemSelection("19")}
                  >
                    512GB
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
                      min="50000"
                      max="60000000"
                      step="50000"
                      value={sliderValue}
                      className="slider"
                      id="myRange"
                      onChange={handleChange}
                    />
                  </div>
                  <h6>{convertMoney(sliderValue)}</h6>
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
