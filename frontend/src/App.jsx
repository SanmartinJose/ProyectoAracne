import React from "react";
import MyNavbar from "./components/Navbar";
import Carousel from "./components/Carousel";
import Footer from "./components/Footer";
import Card from "./components/Card";
import "bootstrap/dist/css/bootstrap.min.css";

// Si tienes imágenes en la carpeta 'src/assets' puedes importarlas así:
import image1 from './assets/elegante.jpg';
import image2 from './assets/CV.jpg';
import image3 from './assets/viajes.jpg';

const App = () => {
  return (
    <div>
      <MyNavbar />
      <Carousel />
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-4">
            <Card
              image={image1}
              title="Card Title"
              description="Some quick example text to build on the card title and make up the bulk of the card's content."
              colorClass="bg-primary text-white"  // Color de fondo azul
            />
          </div>
          <div className="col-md-4">
            <Card
              image={image2}
              title="Card Title 2"
              description="Another example text to build on the card title and make up the bulk of the card's content."
              colorClass="bg-success text-white"  // Color de fondo verde
            />
          </div>
          <div className="col-md-4">
            <Card
              image={image3}
              title="Card Title 3"
              description="Additional example text to build on the card title and make up the bulk of the card's content."
              colorClass="bg-warning text-dark"  // Color de fondo amarillo
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
