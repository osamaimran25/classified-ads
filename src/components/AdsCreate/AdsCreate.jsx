import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Divider,
  FormControl,
  Select,
  MenuItem,
  Button,
  TextField,
} from "@material-ui/core";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import ImageUploder from "../../common/ImageUploder";
import { AdAction, UserAction } from "../../redux/actions";
import Layout from "../Layout";
import "./AdsCreate.scss";
import CSRFToken from './csrf-token';
const locations = [
  { id: 1, title: "location 1" },
  { id: 2, title: "location 2" },
  { id: 3, title: "location 3" },
  { id: 4, title: "location 4" },
  { id: 5, title: "location 5" },
  { id: 6, title: "location 6" },
  { id: 7, title: "location 7" },
  { id: 8, title: "location 8" },
];

const AdsCreate = (props) => {
  const [categorys, setCategorys] = useState(false);
  const [data, setData] = useState({
    image: [],
    price: 0,
  });
  const [category, setCategory] = useState(null);

  const [catFieldData, setCatField] = useState(null);

  useEffect(() => {
    console.log(props.categories);
    if (props.categoriesField) {
      setCatObject();
    } else if (props.categories) {
      setCategory(props.categories);
    } else {
      props.getUserDetail();
      props.getCategory();
    }
  }, [props.categoriesField, props.categories]);

  const setCatObject = async () => {
    let mapData = {};
    await props.categoriesField.fields.forEach((el, i) => {
      mapData[el.name] = {
        name: el.name,
        value: null,
      };
    });
    await setCatField(mapData);
  };

  const setCatValueObject = async (el) => {
    let data = catFieldData;
    data[el.target.name].value = el.target.value;
    setCatField({ ...catFieldData, ...data });
  };

  const Files = (files) => {
    console.log(files)
    setData({ ...data, image: files });
  };

  const onChange = (e) => {
    if (e.target.name === "category") {
      props.getCategoryField(e.target.value);
    }
    setData({
      ...data,
      [e.target.name]:
        e.target.name === "price" || e.target.name === "phone"
          ? parseInt(e.target.value)
          : e.target.value,
    });
  };

  const onClickSubmit = () => {
    const body = {
      ...data,
      email: props.userInfo.email,
      user: props.userInfo.user_id,
      items: catFieldData,
    };
    props.addAd(body);
  };

  const inputFieldType = (el, type) => {
    return (
      <TextField
        variant="outlined"
        placeholder={`${props.categoriesField.category.name} ${el.name} here`}
        onChange={setCatValueObject}
        fullWidth
        type={type}
        name={el.name}
        value={catFieldData[el.name].value}
        className="adsInput"
        required={el.required}
        min={el.min}
        max={el.max}
      />
    );
  };

  const inputFiles = (el) => {
    switch (el.field_type) {
      case "str":
        return inputFieldType(el, "text");
      case "int":
        return inputFieldType(el, "number");

      case "dropwdown":
        return (
          <FormControl variant="outlined" fullWidth style={{ margin: "0" }}>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              onChange={setCatValueObject}
              value={catFieldData[el.name].value}
              name={el.name}
              className="adsInput_create"
            >
              <MenuItem key={0} value={""}>
                Select a {el.name}
              </MenuItem>

              {el.options?.map((item, key) => (
                <MenuItem key={key} value={item}>
                  {item}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        );

      default:
        return inputFieldType(el, "text");
    }
  };

  const categoryFieldRender = () => {
    return (
      <Grid container item spacing={2} style={{ marginTop: "30px" }}>
        {props.categoriesField?.fields.map((el, i) => (
          <Grid item md={6} sm={12} xs={12}>
            <Card style={{ width: "100%" }}>
              <CardContent style={{ background: "#2f3a51" }}>
                <Typography
                  variant="h6"
                  style={{ color: "#fff", fontWeight: "700" }}
                >
                  {el.name}
                  {el.validation.required ? (
                    <span style={{ color: "red" }}>*</span>
                  ) : (
                    <></>
                  )}
                </Typography>
              </CardContent>
              <Divider />
              <CardContent>
                <Grid item md={12} sm={12} xs={12}>
                  <div className="adsInput_create_wrapper">
                    <Typography
                      variant="subtitle1"
                      style={{ fontWeight: "600" }}
                    >
                      Enter your {props.categoriesField.name}
                      {el.name} here:
                      {el.validation.required ? (
                        <span style={{ color: "red" }}>*</span>
                      ) : (
                        <></>
                      )}
                    </Typography>
                    {inputFiles(el)}
                  </div>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    );
  };

  return (
    <Layout hindMenu>
      <div className="ads_create_wrapper">
        <Container>
          <Typography
            variant="h6"
            style={{
              color: "#002f34",
              fontWeight: "700",
              marginBottom: "15px",
            }}
          >
            Post an ad
          </Typography>
          {/* category option here */}
        <form action="/endpoint" method="post">
        <CSRFToken />
        <Grid container item spacing={2}>
            <Card style={{ width: "100%" }}>
              <CardContent style={{ background: "#2f3a51" }}>
                <Typography
                  variant="h6"
                  style={{ color: "#fff", fontWeight: "700" }}
                >
                  Category
                </Typography>
              </CardContent>
              <Divider />
              <CardContent>
                <Grid item md={6} sm={10} xs={12}>
                  <div className="adsInput_create_wrapper">
                    <Typography
                      variant="subtitle1"
                      style={{ fontWeight: "600" }}
                    >
                      Tell us what you are posting:
                      <span style={{ color: "red" }}>*</span>
                    </Typography>
                    <FormControl variant="outlined" fullWidth>
                      <Select
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"
                        onChange={onChange}
                        value={data.category}
                        name="category"
                        className="adsInput_create"
                      >
                        <MenuItem key={0} value={""}>
                          Select a Category
                        </MenuItem>

                        {category?.map((item) => (
                          <MenuItem key={item.id} value={item.id}>
                            {item.name}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </div>
                </Grid>
              </CardContent>
            </Card>

            {!categorys && (
              <Button
                variant="contained"
                color="secondary"
                style={{ marginTop: "20px" }}
                onClick={() => setCategorys(true)}
                disabled={!data.category}
              >
                Continue
              </Button>
            )}
          </Grid>

          {categorys && (
            <>
              {/* Location option here */}
              <Grid container item spacing={2} style={{ marginTop: "30px" }}>
                <Grid item md={6} sm={12} xs={12}>
                  <Card style={{ width: "100%" }}>
                    <CardContent style={{ background: "#2f3a51" }}>
                      <Typography
                        variant="h6"
                        style={{ color: "#fff", fontWeight: "700" }}
                      >
                        Title <span style={{ color: "red" }}>*</span>
                      </Typography>
                    </CardContent>
                    <Divider />
                    <CardContent>
                      <Grid item md={12} sm={12} xs={12}>
                        <div className="adsInput_create_wrapper">
                          <Typography
                            variant="subtitle1"
                            style={{ fontWeight: "600" }}
                          >
                            Enter your ads Title here:
                            <span
                              style={{ color: "red", marginBottom: "15px" }}
                            >
                              *
                            </span>
                          </Typography>
                          <TextField
                            variant="outlined"
                            placeholder="Ads Title here"
                            onChange={onChange}
                            fullWidth
                            name="title"
                            value={data.title}
                            className="adsInput"
                          />
                        </div>
                      </Grid>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item md={6} sm={12} xs={12}>
                  <Card style={{ width: "100%" }}>
                    <CardContent style={{ background: "#2f3a51" }}>
                      <Typography
                        variant="h6"
                        style={{ color: "#fff", fontWeight: "700" }}
                      >
                        Location
                      </Typography>
                    </CardContent>
                    <Divider />
                    <CardContent style={{ padding: "10px" }}>
                      <Grid item md={12} sm={12} xs={12}>
                        <div className="adsInput_create_wrapper">
                          <Typography
                            variant="subtitle1"
                            style={{ fontWeight: "600" }}
                          >
                            Enter your post code:
                            <span style={{ color: "red" }}>*</span>
                          </Typography>
                          <FormControl
                            variant="outlined"
                            fullWidth
                            style={{ margin: "0" }}
                          >
                            <Select
                              labelId="demo-simple-select-outlined-label"
                              id="demo-simple-select-outlined"
                              onChange={onChange}
                              value={data.location}
                              name="location"
                              className="adsInput_create"
                            >
                              <MenuItem key={0} value={""}>
                                Select a location
                              </MenuItem>

                              {locations?.map((item) => (
                                <MenuItem key={item.id} value={item.id}>
                                  {item.title}
                                </MenuItem>
                              ))}
                            </Select>
                          </FormControl>
                        </div>
                      </Grid>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>

              {/* images option here */}
              <Grid container item spacing={2} style={{ marginTop: "30px" }}>
                <Card style={{ width: "100%" }}>
                  <CardContent style={{ background: "#2f3a51" }}>
                    <Typography
                      variant="h6"
                      style={{ color: "#fff", fontWeight: "700" }}
                    >
                      Images <span style={{ color: "red" }}>*</span>
                    </Typography>
                  </CardContent>
                  <Divider />
                  <CardContent
                    style={{ display: "flex", justifyContent: "center" }}
                  >
                    <Grid item md={10} sm={12} xs={12}>
                      <div
                        style={{
                          margin: "15px 0",
                          width: "100%",
                        }}
                      >
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
                    </Grid>
                  </CardContent>
                </Card>
              </Grid>

              {/* description option here */}
              <Grid container item spacing={2} style={{ marginTop: "30px" }}>
                <Grid item md={6} sm={12} xs={12}>
                  <Card style={{ width: "100%" }}>
                    <CardContent style={{ background: "#2f3a51" }}>
                      <Typography
                        variant="h6"
                        style={{ color: "#fff", fontWeight: "700" }}
                      >
                        Description <span style={{ color: "red" }}>*</span>
                      </Typography>
                    </CardContent>
                    <Divider />
                    <CardContent>
                      <Grid item md={12} sm={12} xs={12}>
                        <div style={{ margin: "15px 0" }}>
                          <TextField
                            variant="outlined"
                            multiline
                            rows={1}
                            placeholder="Enter ads description here"
                            onChange={onChange}
                            fullWidth
                            name="description"
                            value={data.description}
                            className="adsInput"
                          />
                        </div>
                      </Grid>
                    </CardContent>
                  </Card>
                </Grid>

                {/* price option here */}

                <Grid item md={6} sm={12} xs={12}>
                  <Card style={{ width: "100%" }}>
                    <CardContent style={{ background: "#2f3a51" }}>
                      <Typography
                        variant="h6"
                        style={{ color: "#fff", fontWeight: "700" }}
                      >
                        How much do you want for your item?
                        <span style={{ color: "red" }}>*</span>
                      </Typography>
                    </CardContent>
                    <Divider />
                    <CardContent>
                      <Grid item md={12} sm={12} xs={12}>
                        <div>
                          <Typography variant="subtitle1" gutterBottom>
                            Price <span style={{ color: "red" }}>*</span>
                          </Typography>
                          <TextField
                            variant="outlined"
                            placeholder="Enter ads price here"
                            onChange={onChange}
                            fullWidth
                            name="price"
                            type="number"
                            value={data.price}
                          />
                        </div>
                      </Grid>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
              {/* promote option here */}
              <Grid container item spacing={2} style={{ marginTop: "30px" }}>
                <Card style={{ width: "100%" }}>
                  <CardContent style={{ background: "#2f3a51" }}>
                    <Typography
                      variant="h6"
                      style={{ color: "#fff", fontWeight: "700" }}
                    >
                      Make your ad stand out!
                      <span style={{ color: "red" }}>*</span>
                    </Typography>
                  </CardContent>
                  <Divider />
                  <CardContent>
                    <Grid item md={8} sm={12} xs={12}>
                      <div className="adsInput_wrapper">
                        <Typography variant="subtitle1">coming soon</Typography>
                      </div>
                    </Grid>
                  </CardContent>
                </Card>
              </Grid>
              {/* dynamic category fields */}
              {categoryFieldRender()}
              {/* email and phone option here */}
              <Grid container item spacing={2} style={{ marginTop: "30px" }}>
                <Card style={{ width: "100%" }}>
                  <CardContent style={{ background: "#2f3a51" }}>
                    <Typography
                      variant="h6"
                      style={{ color: "#fff", fontWeight: "700" }}
                    >
                      Your contact details
                      <span style={{ color: "red" }}>*</span>
                    </Typography>
                  </CardContent>
                  <Divider />
                  <CardContent>
                    <Grid item md={8} sm={12} xs={12}>
                      <Typography variant="subtitle1">
                        Please select at least one option to be contacted by:
                      </Typography>
                      <Grid
                        container
                        item
                        spacing={3}
                        style={{ margin: "15px 0" }}
                      >
                        <Grid item md={3} sm={4} xs={4}>
                          <Typography variant="subtitle1">Email:</Typography>
                        </Grid>
                        <Grid item md={9} sm={8} xs={8}>
                          {props.userInfo.email}
                        </Grid>
                        <Grid item md={3} sm={4} xs={4}>
                          <Typography variant="subtitle1">Phone:</Typography>
                        </Grid>
                        <Grid item md={9} sm={8} xs={8}>
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
                        </Grid>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              </Grid>

              <div>
                <Button
                  variant="contained"
                  color="secondary"
                  style={{
                    marginTop: "50px",
                    width: "200px",
                    padding: "15px 25px",
                    borderRadius: "30px",
                  }}
                  onClick={() => onClickSubmit()}
                >
                  Post an Ads
                </Button>
              </div>
            </>
          )}
        </form>
        </Container>
      </div>
    </Layout>
  );
};

const mapStateToProps = ({ ads, userReducer }) => {
  console.log(ads);
  return {
    createdStatus: ads.addStatus,
    userInfo: userReducer.userInfo,
    categories: ads.categories,
    categoriesField: ads.categoriesField,
  };
};

const mapDispatchToProps = {
  addAd: (body) => AdAction.addAds(body),
  getUserDetail: () => UserAction.getUserDetail(),
  getCategory: () => AdAction.getCategory(),
  getCategoryField: (id) => AdAction.getCategoryField(id),
};

export default connect(mapStateToProps, mapDispatchToProps)(AdsCreate);
