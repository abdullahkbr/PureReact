import heroImage from "./hero.png";
import "./hero.css";
function Hero() {
  return (
    <section className="hero">
      <div className="hero_image">
        <img src={heroImage} alt="Hero" />
      </div>

      <div className="hero__content">
        <h1>View Our New Menu</h1>

        <p>The freshest ingredients for you every day</p>
      </div>
    </section>
  );
}

export default Hero;
