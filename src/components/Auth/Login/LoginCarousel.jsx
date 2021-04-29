import { CardMedia, Typography } from "@material-ui/core";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import image1 from "../../../assets/login/image1.png";
import image2 from "../../../assets/login/image2.png";
import image3 from "../../../assets/login/image3.png";
import image4 from "../../../assets/login/image4.png";

const data = [
  { id: 1, image: image1, title: "Contact and close deals faster" },
  { id: 2, image: image2, title: "Save all you favorite items in one place" },
  {
    id: 3,
    image: image3,
    title: "Help make IslamicAd safer place to buy and sell",
  },
  { id: 4, image: image4, title: "Contact and close deals faster" },
];

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 600 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 600, min: 0 },
    items: 1,
  },
};

const LoginCarousel = () => {
  return (
    <div>
      <Carousel
        responsive={responsive}
        infinite={true}
        autoPlay
        autoPlaySpeed={1500}
      >
        {data?.map((el) => (
          <div
            key={el.id}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <CardMedia
              component="img"
              image={el.image}
              style={{ width: "20%" }}
            />
            <Typography
              variant="subtitle1"
              color="initial"
              style={{ margin: "10px 0" }}
            >
              {el.title}
            </Typography>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default LoginCarousel;
