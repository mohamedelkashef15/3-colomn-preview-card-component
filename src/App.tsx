interface CardProps {
  image: string;
  name: string;
  description: string;
}

function App() {
  return (
    <main>
      <div className="container">
        <Card
          image="images/icon-sedans.svg"
          name="SEDANS"
          description="Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip."
        />
        <Card
          image="images/icon-suvs.svg"
          name="SUVS"
          description="Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures."
        />
        <Card
          image="images/icon-luxury.svg"
          name="LUXURY"
          description="Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style."
        />
      </div>
    </main>
  );
}

function Card({ image, name, description }: CardProps) {
  return (
    <div className="card">
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <p>{description}</p>
      <button className="btn">Learn More</button>
    </div>
  );
}

export default App;
