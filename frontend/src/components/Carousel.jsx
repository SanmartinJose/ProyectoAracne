import { Carousel, Button } from "react-bootstrap";
import perfil from "../assets/Perfil.jpg";
import viajes from "../assets/viajes.jpg";
import elegante from "../assets/elegante.jpg";

function ImageCarousel() {
  return (
    <div className="container-fluid p-0"> {/* Elimina el padding para ocupar toda la anchura */}
      <Carousel className="w-100">
        <Carousel.Item>
          <img src={perfil} alt="Foto de Perfil" className="d-block w-100" style={{ height: "100vh", objectFit: "cover" }} />
          <Carousel.Caption className="position-absolute top-50 start-50 translate-middle text-center">
            <h3 className="text-white fw-bold">Explora tu Perfil</h3>
            <p className="text-white">Personaliza tu información y gustos.</p>
            <Button variant="primary">Ver más</Button>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img src={viajes} alt="Viajar por el mundo" className="d-block w-100" style={{ height: "100vh", objectFit: "cover" }} />
          <Carousel.Caption className="position-absolute top-50 start-50 translate-middle text-center">
            <h3 className="text-white fw-bold">Descubre Nuevos Destinos</h3>
            <p className="text-white">Viaja y explora el mundo con nosotros.</p>
            <Button variant="warning">Reservar</Button>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img src={elegante} alt="Presentaciones Universidad" className="d-block w-100" style={{ height: "100vh", objectFit: "cover" }} />
          <Carousel.Caption className="position-absolute top-50 start-50 translate-middle text-center">
            <h3 className="text-white fw-bold">Prepárate para el Éxito</h3>
            <p className="text-white">Presentaciones y conferencias para tu crecimiento.</p>
            <Button variant="success">Aprender más</Button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default ImageCarousel;
