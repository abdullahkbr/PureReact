import "../css/product.css";
import ProductImage from "../assets/product-2.png";
function ProductSecondary() {
  return (
    <section className="product">
      <div className="product__container">
        <div className="product__header">
          <h2>Mains</h2>
          <p>
            This is a section of your menu. Give your section a brief
            description
          </p>
        </div>

        <div className="product_info secondary__container">
          <div className="product__image">
            <img src={ProductImage} alt="Product" />
          </div>

          <div className="product__plans">
            <div className="product__plans-card">
              <h3>$20</h3>

              <div>
                <h4>Deep Sea Snow White Cod Fillet</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>

            <div className="product__plans-card">
              <h3>$22</h3>

              <div>
                <h4>Steak With Rosemary Butter</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>

            <div className="product__plans-card">
              <h3>$20</h3>

              <div>
                <h4>Steaks with Grilled Kimchi</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductSecondary;
