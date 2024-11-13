import "bootstrap/dist/css/bootstrap.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Home from "./pages/home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Address from "./pages/address/Address";
import Payment from "./pages/payment/Payment";
import ProductDetail from "./pages/productDetail/ProductDetail";
import Success from "./pages/success/Success";
import BlogDetail from "./pages/blog-page/blogDetail/BlogDetail";
import HomeBlog from "./pages/blog-page/homeBlogPage/HomeBlogPage";
import Cart from "./pages/cart/Cart";
import Contact from "./pages/contact/Contact";
import ProductList from "./pages/product-list/Product-list";
import { AppProvider } from "./AppContext";
import ProductFilter from "./pages/product-filter/ProductFilter";

function App() {
  return (
    <div>
      <AppProvider>
        <BrowserRouter>
          <Routes>
            <Route index element={<Home/>}></Route>
            <Route path="/trang-chu/" element={<Home/>}></Route>
            <Route path="/tim-kiem/" element={<ProductFilter/>}></Route>
            <Route path="/thanh-toan/" element={<Payment />}></Route>
            <Route path="/danh-sach-san-pham" element={<ProductList />}></Route>
            <Route
              path="/chi-tiet-san-pham/:id"
              element={<ProductDetail />}
            ></Route>
            <Route path="/gio-hang/" element={<Cart />}></Route>
            <Route path="/dia-chi/" element={<Address />}></Route>
            <Route path="/thanh-cong/" element={<Success />}></Route>
            <Route path="/tin-tuc/" element={<HomeBlog />}></Route>
            <Route path="/blog-detail/" element={<BlogDetail />}></Route>
            <Route path="/lien-he" element={<Contact />}></Route>
            <Route path="/*" element={<h1>Không tìm thấy trang</h1>}></Route>
          </Routes>
        </BrowserRouter>
      </AppProvider>
    </div>
  );
}

export default App;
