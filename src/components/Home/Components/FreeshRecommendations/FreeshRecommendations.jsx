import { Container, Grid, Typography, Button } from "@material-ui/core";
import { useState } from "react";
import { Link } from "react-router-dom";
import AdsCard from "../../../../common/AdsCard";
import freeshData from "./freeshData";
import "./FreeshRecommendations.scss";

const FreeshRecommendations = () => {
  const [seeAll, setSeeAll] = useState(false);

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
          <Typography variant="h4">Fresh Recommendations</Typography>
          <Button variant="text" color="default">
            View More
          </Button>
        </div>

        <Grid container spacing={3}>
          {!seeAll ? (
            <>
              {freeshData?.slice(0, 9).map((el) => (
                <Grid key={el.id} item md={3} sm={6} xs={12} lg={3}>
                  <Link to="/AdsDetails" style={{ textDecoration: "none" }}>
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
                </Grid>
              ))}
            </>
          ) : (
            <>
              {freeshData?.map((el) => (
                <Grid key={el.id} item md={3} sm={6} xs={12} lg={3}>
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
              color="primary"
            >
              Load more
            </Button>
          </div>
        )}
      </Container>
    </div>
  );
};

export default FreeshRecommendations;
