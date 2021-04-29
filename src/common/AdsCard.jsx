import { Card, CardContent, CardMedia, Typography } from "@material-ui/core";
import SliceText from "../HOC/SliceText";
import Readmore from "../HOC/Readmore";

const AdsCard = ({
  image,
  alt,
  imgTitle,
  title,
  Description,
  balance,
  location,
  date,
}) => {
  return (
    <Card>
      <CardMedia
        component="img"
        image={image}
        height="200"
        alt={alt}
        title={imgTitle}
      />
      <CardContent style={{ background: "#a5abbd", color: "#3d3d4e" }}>
        <Typography variant="h6" style={{ fontWeight: "600" }}>
          <SliceText number="25">{title}</SliceText>
        </Typography>
        <Typography variant="subtitle2" style={{ padding: "10px 0" }}>
          <Readmore number="55">{Description}</Readmore>
        </Typography>
        <Typography variant="h6">
          <strong>RS: {balance}</strong>
        </Typography>
      </CardContent>
      <CardContent
        style={{
          display: "flex",
          justifyContent: "space-between",
          background: "#2f3a51",
          padding: "10px 15px",
          color: "#fff",
        }}
      >
        <Typography variant="body2" color="initial">
          {location}
        </Typography>
        <Typography variant="body2" color="initial">
          {date}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default AdsCard;
