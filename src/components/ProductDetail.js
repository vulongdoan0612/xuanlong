import React, { useState } from "react";
import Section from "./Section";
import Helmet from "./Helmet";
import { Link, useParams } from "react-router-dom";
import products from "../assets/fake-data/products";
import { Row, Container, Col } from "reactstrap";
import ProductDetailForm from "./ProductDetailForm";
import { useDispatch } from "react-redux";
import { addProduct } from "../redux/slices/cartSlide";
import { toast } from "react-toastify";
const ProductDetail = () => {
  const dispatch = useDispatch();
  const [showDes, setShowDes] = useState();
  const { id } = useParams();
  const product = products.find((item) => item.id === id);
  const { price, image01, categorySlug, colors, size, description, title } =
    product;
  const handleHide = () => {
    setShowDes(!showDes);
  };

  const addToCart = (id, image01, price, title, size, colors) => {
    dispatch(addProduct({ id, image01, price, title, size, colors }));
    toast.success("Đã thêm vào giỏ hàng!");
  };

  return (
    <>
      <Helmet title="Chi tiết sản phẩm">
        <section>
          <Container className="b1">
            <Row className=" body__product__details">
              <Col>
                <div className="product__details">
                  <img src={image01} alt="" />
                </div>
              </Col>

              <Col className="b2">
                <div className="product__details__view">
                  <h1 className="product__details-title"> {title}</h1>
                  <div className="product__details-code"> Sku: </div>
                  <div className="product__details-rate ">
                    <span>
                      <i class="bx bx-star"></i>
                    </span>
                    <span>
                      <i class="bx bx-star"></i>
                    </span>
                    <span>
                      <i class="bx bx-star"></i>
                    </span>
                    <span>
                      <i class="bx bx-star"></i>
                    </span>
                    <span>
                      <i class="bx bx-star"></i>
                    </span>
                    <span> (Đánh giá)</span>
                    <div className="product__details-formPrice">
                      <span> {price}đ</span>
                    </div>
                    <div className="ic1">
                      <i class="bx bxs-error">
                        <span>Lưu ý: sản phẩm không được đổi trả</span>
                      </i>
                    </div>
                  </div>
                  <div className="product__details-addFrom">
                    <div className="product__details-addFrom-color">
                      <span>
                        COLOR:{" "}
                        {product.colors.map((item, index) => (
                          <i key={index}> {item}</i>
                        ))}
                      </span>
                      <div className="img__small">
                        <img className="img__small-1" src={image01} alt="" />
                      </div>
                    </div>
                    <div className="product__details-addFrom-size">
                      <span> Size: EU</span>
                    </div>
                    <div className=" form__size">
                      {product.size.map((item, index) => (
                        <div key={index} className=" form__size-item">
                          {item}
                        </div>
                      ))}
                    </div>

                    <div className="product__details-addFrom-optionSize">
                      <i class="bx bx-ruler"></i>

                      <Link to="#">
                        <span> Hướng dẫn chọn size</span>
                      </Link>
                    </div>
                    <div className="product__details-addFrom-quantity">
                      <label> Số lượng</label>
                      <div className="control">
                        <button className="minus">
                          <i class="bx bx-minus"></i>
                        </button>

                        <input type="" className="input-quantity" value="1" />
                        <button className="plus">
                          <i class="bx bx-plus"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="product__details__action">
                  <button
                    className="product__details__action-tocart"
                    onClick={() => addToCart()}
                  >
                    Thêm vào giỏ hàng
                  </button>
                  <button className="product__details__action-buy">
                    Mua ngay
                  </button>
                </div>
                <div className="product__details_widget">
                  <div className="product__details_widget-like">
                    <i class="bx bx-heart bx-tada"></i>
                    <span> Yêu thích </span>
                  </div>
                  <div className="product__details_widget-share">
                    <i class="bx bx-share-alt bx-tada"></i>
                    <span> Chia sẻ </span>
                  </div>
                </div>
                <div className="product__details_desc">
                  <span className="product__details_desc-name">
                    Chi tiết sản phẩm
                    <i
                      class="bx bxs-down-arrow "
                      onClick={() => handleHide()}
                    ></i>
                    {showDes && (
                      <>
                        <div className="product__details_desc-content">
                          <p>{description}</p>
                        </div>
                      </>
                    )}
                  </span>
                </div>
              </Col>
            </Row>
          </Container>
          <ProductDetailForm dataProductDetails={product} />
        </section>
      </Helmet>
    </>
  );
};

export default ProductDetail;
