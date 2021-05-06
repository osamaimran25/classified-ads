import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import AdsCard from "../../../common/AdsCard";
import { showImage } from "../../../utils";
import freeshData from "../../Home/Components/FreeshRecommendations/freeshData";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const AdsSuggetions = () => {
  return (
    <div>
      <Carousel responsive={responsive} infinite autoPlay autoPlaySpeed={2000}>
        {freeshData?.map((el) => (
          <div key={el.id} style={{ margin: "0 10px" }}>
            <AdsCard
              // image={showImage(el.image_01)}
              // alt={"all ads here"}
              // imgTitle={el.title}
              // title={el.title}
              // Description={el.description}
              // balance={el.price}
              // location={el.locations}
              // date={el.date_posted}
              image={el.image}
              alt={"all ads here"}
              imgTitle={el.title}
              title={el.title}
              Description={el.Description}
              balance={el.balance}
              location={el.location}
              date={el.date}
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default AdsSuggetions;
