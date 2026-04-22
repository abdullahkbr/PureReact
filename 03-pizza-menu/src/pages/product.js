import "./css/product.css";
import ProductImage from "./assets/product.png";
function Product() {
  return (
    <section className="product">
      <div className="product__container">
        <div className="product__header">
          <h2>Starters</h2>
          <p>
            This is a section of your menu. Give your section a brief
            description
          </p>
        </div>

        <div className="product_info">
          <div className="product__image">
            <img src={ProductImage} alt="Product" />
          </div>

          <div className="product__plans">
            <div className="product__plans-card">
              <h3>$20</h3>

              <div>
                <h4>Grilled Okra and Tomatoes </h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
              </div>
            </div>

            <div className="product__plans-card">
              <h3>$18</h3>

              <div>
                <h4>Cucumber Salad</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
              </div>
            </div>

            <div className="product__plans-card">
              <h3>$12</h3>

              <div>
                <h4>Basil Pancakes</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Product;
