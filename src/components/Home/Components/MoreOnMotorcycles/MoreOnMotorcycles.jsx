import { Button, Container, Typography } from "@material-ui/core";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";
import AdsCard from "../../../../common/AdsCard";
import motorcycleData from "./Motorcycles";
import "./MoreOnMotorcycles.scss";
import { connect, useDispatch, useSelector } from "react-redux";
import { getAds } from "../../../../redux/actions";
import { useEffect } from "react";
// import { getAds } from "../../../../redux/actions/adsAction";
import axios from "axios";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 600 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 600, min: 0 },
    items: 1,
  },
};

const MoreOnMotorcycles = ({ getAds }) => {
  // const ads = useSelector((state) => state.ads);

  // const dispatch = useDispatch();

  useEffect(() => {
    getAds();
    // const data = async () => {
    //   const res = await axios.get(`http://209.97.162.0/ads/list`);
    //   console.log(res.data);
    // };
    // data();
  }, []);

  // getAds;
  return (
    <div className="more_motorcycles_wrapper">
      <Container>
        <div
          style={{
            marginBottom: "20px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="h4">More on Motorcycles</Typography>
          <Button variant="text" color="default">
            View More
          </Button>
        </div>

        <Carousel
          responsive={responsive}
          infinite={true}
          autoPlay
          autoPlaySpeed={1500}
        >
          {motorcycleData?.map((el) => (
            <div key={el.id} style={{ margin: "10px" }}>
              <Link to="/" style={{ textDecoration: "none" }}>
                <AdsCard
                  image={el.image}
                  alt={el.alt}
                  imgTitle={el.title}
                  title={el.title}
                  Description={el.Description}
                  balance={el.balance}
                  location={el.location}
                  date={el.date}
                />
              </Link>
            </div>
          ))}
        </Carousel>
      </Container>
    </div>
  );
};

// export default MoreOnMotorcycles;
export default connect((state) => ({}), { getAds })(MoreOnMotorcycles);
