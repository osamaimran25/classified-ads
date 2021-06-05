import {
  Container,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
  Button,
} from "@material-ui/core";
import { useState } from "react";
import { connect } from "react-redux";
import ImageUploder from "../../common/ImageUploder";
import { AdAction } from "../../redux/actions";
import Layout from "../Layout";
import "./CreateAds.scss";

const CreateAds = (props) => {
  const [data, setData] = useState({
    image: [],
  });

  const Files = (files) => {
    setData({ ...data, image: files });
  };

  const onClickSubmit = () => {
    // const formData = new FormData();
    // formData.append("title", data.title);
    // formData.append("details", data.details);
    // formData.append("price", data.price);
    // formData.append("image", data.image);
    // if (data.project_media.length > 0) {
    //   data.project_media.forEach((media, index) =>
    //     formData.append(`project_media[${index}]`, media)
    //   );
    // }
    // console.log(formData, "llllll", data);
    // props.addAd(formData);
  };
  const onChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const category = [
    { id: 1, title: "home" },
    { id: 2, title: "home" },
    { id: 3, title: "home" },
    { id: 4, title: "home" },
    { id: 5, title: "home" },
    { id: 6, title: "home" },
    { id: 7, title: "home" },
    { id: 8, title: "home" },
  ];

  return (
    <Layout hindMenu>
      <div className="create_ads_content">
        <Container>
          <Grid container item spacing={3} className="create_ads_wrapper">
            <Grid item md={10}>
              <Typography
                variant="h6"
                style={{ color: "#002f34", fontWeight: "700" }}
              >
                Post an Ad
              </Typography>

              <div className="adsInput_wrapper">
                <Typography variant="subtitle1">
                  Enter your Email <span style={{ color: "red" }}>*</span>
                </Typography>
                <TextField
                  variant="outlined"
                  placeholder="Enter your email address here"
                  onChange={onChange}
                  fullWidth
                  name="email"
                  value={data.email}
                  className="adsInput"
                  // error={error.title}
                  // helperText={error.title}
                />
              </div>

              <div style={{ margin: "15px 0" }}>
                <div
                  style={{
                    margin: "10px 0",
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <Typography variant="subtitle1">
                    Ads Image<span style={{ color: "red" }}>*</span>
                  </Typography>
                  <Typography variant="subtitle2" color="primary">
                    Max 5 media files you can Upload
                  </Typography>
                </div>
                <ImageUploder
                  setFiles={Files}
                  files={data.image}
                  maxSize={10}
                  maxFile={5}
                  dropzoneText="Drag and drop files here or click"
                />
              </div>

              <div className="adsInput_wrapper">
                <Typography variant="subtitle1">
                  Enter Ads Title <span style={{ color: "red" }}>*</span>
                </Typography>
                <TextField
                  variant="outlined"
                  placeholder="Enter ads title here"
                  onChange={onChange}
                  fullWidth
                  name="title"
                  value={data.title}
                  className="adsInput"
                />
              </div>

              <div className="adsInput_wrapper">
                <Typography variant="subtitle1">
                  Enter Ads description <span style={{ color: "red" }}>*</span>
                </Typography>
                <TextField
                  variant="outlined"
                  multiline
                  rows={4}
                  placeholder="Enter ads description here"
                  onChange={onChange}
                  fullWidth
                  name="description"
                  value={data.description}
                  className="adsInput"
                />
              </div>

              <Grid container spacing={3}>
                <Grid item md={6} lg={6} sm={12} xs={12}>
                  <div className="adsInput_wrapper">
                    <Typography variant="subtitle1">
                      Enter Ads Price <span style={{ color: "red" }}>*</span>
                    </Typography>
                    <TextField
                      variant="outlined"
                      placeholder="Enter ads price here"
                      onChange={onChange}
                      fullWidth
                      name="price"
                      value={data.price}
                      className="adsInput"
                    />
                  </div>
                </Grid>
                <Grid item md={6} lg={6} sm={12} xs={12}>
                  <div className="adsInput_wrapper">
                    <Typography variant="subtitle1">
                      Enter your phone Number{" "}
                      <span style={{ color: "red" }}>*</span>
                    </Typography>
                    <TextField
                      variant="outlined"
                      placeholder="Enter your phone number here"
                      onChange={onChange}
                      fullWidth
                      type="Number"
                      name="phone"
                      value={data.phone}
                      className="adsInput"
                    />
                  </div>
                </Grid>
              </Grid>

              <div className="adsInput_wrapper">
                <Typography variant="subtitle1">
                  Select a category <span style={{ color: "red" }}>*</span>
                </Typography>
                <FormControl variant="outlined" fullWidth>
                  <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    onChange={onChange}
                    value={data.category}
                    name="category"
                    className="adsInput"
                  >
                    <MenuItem key={0} value={""}>
                      Select a Category
                    </MenuItem>

                    {category &&
                      category.map((item) => (
                        <MenuItem key={item.id} value={item.id}>
                          {item.title}
                        </MenuItem>
                      ))}
                  </Select>
                </FormControl>
              </div>

              <div>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => onClickSubmit()}
                >
                  Create Ad
                </Button>
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>
    </Layout>
  );
};

const mapStateToProps = ({ ads }) => {
  return { createdStatus: ads.addStatus };
};

const mapDispatchToProps = {
  addAd: (body) => AdAction.addAction(body),
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateAds);

// curl --location --request POST 'http://localhost:8000/ads/create' \
// --data-raw '{
//     "email": "admin1@gmail.com" ,
//     "category": 1,
//     "title": "new ads posted here",
//     "description":"Brand new cars is coming soon",
//     "price":99,
//     "user":1,
//     "featured":true,
//     "spotlight": true,
//     "total":800,
//     "viewed":false,
//     "phone":"876655",
//     "locations":1,
//     "image_01":null,
//     "image_02":null,
//     "image_03":null,
//     "image_04":null,
//     "image_05":null,
//     "item":[
//         {
//         "name" : "color",
//         "value":"red"
//         }
//     ]
//     }'
