import { Container, Grid, Typography, Button } from "@material-ui/core";
import { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import AdsCard from "../../../../common/AdsCard";
import "./FreeshRecommendations.scss";
import { getAds } from "../../../../redux/reducers/ads";
import { useEffect } from "react";
import { showImage, getHourMinuteSeconds } from "../../../../utils/index";

const FreeshRecommendations = ({ getAds, ads }) => {
  const [seeAll, setSeeAll] = useState(false);
  const [adss, setAds] = useState(null);

  useEffect(() => {
    getAds();
  }, []);

  useEffect(() => {
    setAds(ads);
  }, [ads]);

  return (
    <div className="FreeshRecommendations_wrapper">
      <Container>
        <div
          style={{
            marginBottom: "20px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="h5">
            <strong style={{ fontWeight: "600" }}>Fresh Recommendations</strong>
          </Typography>
        </div>

        <Grid container spacing={3}>
          {!seeAll ? (
            <>
              {adss?.slice(0, 9).map((el) => (
                <Grid key={el.id} item md={3} sm={6} xs={12} lg={3}>
                  <Link to="/AdsDetails" style={{ textDecoration: "none" }}>
                    <AdsCard
                      image={showImage(el.image_01)}
                      alt={"all ads here"}
                      imgTitle={el.title}
                      title={el.title}
                      Description={el.description}
                      balance={el.price}
                      location={el.locations}
                      // date={getHourMinuteSeconds(el.date_posted)}
                      date={el.date_posted}
                    />
                  </Link>
                </Grid>
              ))}
            </>
          ) : (
            <>
              {adss?.map((el) => (
                <Grid key={el.id} item md={3} sm={6} xs={12} lg={3}>
                  <Link to="/AdsDetails" style={{ textDecoration: "none" }}>
                    <AdsCard
                      image={showImage(el.image_01)}
                      alt={"all ads here"}
                      imgTitle={el.title}
                      title={el.title}
                      Description={el.description}
                      balance={el.price}
                      location={el.locations}
                      // date={getHourMinuteSeconds(Number(el.date_posted))}
                      date={el.date_posted}
                    />
                  </Link>
                </Grid>
              ))}
            </>
          )}
        </Grid>
        {!seeAll && (
          <div className="view_aLL_button">
            <Button
              onClick={() => setSeeAll(!seeAll)}
              variant="contained"
              color="secondary"
              style={{ borderRadius: "20px", padding: "8px 15px" }}
            >
              Load more
            </Button>
          </div>
        )}
      </Container>
    </div>
  );
};

export default connect(
  (state) => ({
    ads: state.ads.ads,
  }),
  { getAds }
)(FreeshRecommendations);
