import Carousel from 'react-bootstrap/Carousel';
import styles from '../styles/Slider.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function CarouselFadeExample() {
  return (

    <div className={styles.container}>
<Carousel fade className={styles.slider}>
      <Carousel.Item className={styles.item}>
        <img
          className="d-block w-100"
          src="/images/3.webp"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item >
      <Carousel.Item className={styles.item}>
        <img
          className="d-block w-100"
          src="/images/1.webp"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className={styles.item}>
        <img
          className="d-block w-100"
          src="/images/2.webp"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

    </div>
    
  );
}

export default CarouselFadeExample;