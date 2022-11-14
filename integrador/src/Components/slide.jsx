import Carousel from 'react-bootstrap/Carousel';

function UncontrolledExample() {
  return (
    <div >
    <Carousel id='Carrusel'>
      <Carousel.Item>
        <img
          className="d-block w-100 imagenCar"
          src="https://pbs.twimg.com/media/E91HzkYXIAM5bvY.jpg:large"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Promocion ESTRELLA</h3>
          <p>Mercado Libre + Star Plus</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 imagenCar"
          src="https://wwflac.awsassets.panda.org/img/8886_1_736993.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Ropa</h3>
          <p>La mejor ropa al mejor precio</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 imagenCar"
          src="https://stopcambioclimatico.es/wp-content/uploads/2019/06/scc-2.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Ropa </h3>
          <p>
            La mejor ropa al mejor precio
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default UncontrolledExample;