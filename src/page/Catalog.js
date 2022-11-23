import { useState } from "react";
import Helmet from "../components/Helmet";
import { Row, Container, Col } from "reactstrap";
import { SectionTitle } from "../components/Section";
import products from "../assets/fake-data/products";
import ProductList from "../components/ProductList";
const Catalog = () => {
  const [productData, setProductData] = useState(products);

  const handleFilter = (e) => {
    const filterValue = e.target.value;
    if (filterValue === "full") {
      const fitlerAllProducts = products;
      setProductData(fitlerAllProducts);
    }
    if (filterValue === "ao-thun") {
      const fitleredProducts = products.filter(
        (item) => item.categorySlug === "ao-thun"
      );
      setProductData(fitleredProducts);
    }
    if (filterValue === "ao-somi") {
      const fitleredProducts = products.filter(
        (item) => item.categorySlug === "ao-somi"
      );
      setProductData(fitleredProducts);
    }
    if (filterValue === "quan-jean") {
      const fitleredProducts = products.filter(
        (item) => item.categorySlug === "quan-jean"
      );
      setProductData(fitleredProducts);
    }
  };
  const handleSearch = (e) => {
    const searchTerm = e.target.value;

    const searchProducts = products.filter((item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setProductData(searchProducts);
  };

  return (
    <>
      <Helmet title="Shop thời trang VN">
        <SectionTitle>Sản phẩm cửa hàng</SectionTitle>
        <section>
          <Container>
            <Row className="filter__Product">
              <Col>
                <div className="filter__widget">
                  <select
                    name=""
                    id=""
                    onChange={(e) => {
                      handleFilter(e);
                      console.log(handleFilter);
                    }}
                  >
                    <option value="full"> Mặc Định</option>
                    <option value="ao-thun"> Áo Thun</option>
                    <option value="ao-somi"> Áo Sơ Mi</option>
                    <option value="quan-jean"> Quần jean</option>
                  </select>
                </div>
              </Col>
              <div className="sort__widget">
                <select name="" id="">
                  <option value="full"> Sắp xếp theo</option>
                  <option value="ao-thun"> Tăng dần</option>
                  <option value="ao-somi"> Giảm dần</option>
                </select>
              </div>
              <div className="search__box">
                <input
                  type="text"
                  className="search__box1"
                  placeholder=" Tìm kiếm sản phẩm..."
                  onChange={(e) => handleSearch(e)}
                />
                <span className="icon-search">
                  <i class="bx bx-search"></i>
                </span>
              </div>
            </Row>
          </Container>
        </section>
        <section className="all__Product">
          <Container>
            <Row>
              {productData.length === 0 ? (
                <h1> Không có sản phẩm nào</h1>
              ) : (
                <ProductList data={productData} />
              )}
            </Row>
          </Container>
        </section>
      </Helmet>
    </>
  );
};

export default Catalog;
