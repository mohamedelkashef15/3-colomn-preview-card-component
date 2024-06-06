interface CardProps {
  image: string;
  name: string;
  description: string;
  bgColor: string;
}

function App() {
  return (
    <main>
      <div className="container">
        <Card
          image="/images/icon-sedans.svg"
          name="SEDANS"
          description="Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip."
          bgColor="hsl(31, 77%, 52%)"
        />
        <Card
          image="/images/icon-suvs.svg"
          name="SUVS"
          description="Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures."
          bgColor="hsl(184, 100%, 22%)"
        />
        <Card
          image="./images/icon-luxury.svg"
          name="LUXURY"
          description="Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style."
          bgColor="hsl(179, 100%, 13%)"
        />
      </div>
    </main>
  );
}

function Card({ image, name, description, bgColor }: CardProps) {
  return (
    <div className="card" style={{ backgroundColor: bgColor }}>
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <p>{description}</p>
      <button className="btn" style={{ color: bgColor }}>
        Learn More
      </button>
    </div>
  );
}

export default App;
