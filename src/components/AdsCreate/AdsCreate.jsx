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
import { useState } from "react";
import ImageUploder from "../../common/ImageUploder";
import Layout from "../Layout";
import "./AdsCreate.scss";

const category = [
  { id: 1, title: "home 1" },
  { id: 2, title: "home 2" },
  { id: 3, title: "home 3" },
  { id: 4, title: "home 4" },
  { id: 5, title: "home 5" },
  { id: 6, title: "home 6" },
  { id: 7, title: "home 7" },
  { id: 8, title: "home 8" },
];
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

const AdsCreate = () => {
  const [categorys, setCategorys] = useState(false);
  const [data, setData] = useState({
    image: [],
  });

  const Files = (files) => {
    setData({ ...data, image: files });
  };

  const onChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
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
          <Grid container item spacing={2}>
            <Card style={{ width: "100%" }}>
              <CardContent style={{ background: "#1876d2" }}>
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
                            {item.title}
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
                    <CardContent style={{ background: "#1876d2" }}>
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
                            name="email"
                            value={data.email}
                            className="adsInput"
                          />
                        </div>
                      </Grid>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item md={6} sm={12} xs={12}>
                  <Card style={{ width: "100%" }}>
                    <CardContent style={{ background: "#1876d2" }}>
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
                              // onChange={onChange}
                              // value={data.category}
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
                  <CardContent style={{ background: "#1876d2" }}>
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
                    <CardContent style={{ background: "#1876d2" }}>
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
                    <CardContent style={{ background: "#1876d2" }}>
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
                  <CardContent style={{ background: "#1876d2" }}>
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
              {/* email and phone option here */}
              <Grid container item spacing={2} style={{ marginTop: "30px" }}>
                <Card style={{ width: "100%" }}>
                  <CardContent style={{ background: "#1876d2" }}>
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
                          sonjoybarmon@gmail.com
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
                >
                  Post an Ads
                </Button>
              </div>
            </>
          )}
        </Container>
      </div>
    </Layout>
  );
};

export default AdsCreate;

// import {
//   Container,
//   Typography,
//   Grid,
//   Card,
//   CardContent,
//   Divider,
//   FormControl,
//   Select,
//   MenuItem,
//   Button,
//   TextField,
// } from "@material-ui/core";
// import { useState } from "react";
// import ImageUploder from "../../common/ImageUploder";
// import Layout from "../Layout";
// import "./AdsCreate.scss";

// const category = [
//   { id: 1, title: "home 1" },
//   { id: 2, title: "home 2" },
//   { id: 3, title: "home 3" },
//   { id: 4, title: "home 4" },
//   { id: 5, title: "home 5" },
//   { id: 6, title: "home 6" },
//   { id: 7, title: "home 7" },
//   { id: 8, title: "home 8" },
// ];
// const locations = [
//   { id: 1, title: "location 1" },
//   { id: 2, title: "location 2" },
//   { id: 3, title: "location 3" },
//   { id: 4, title: "location 4" },
//   { id: 5, title: "location 5" },
//   { id: 6, title: "location 6" },
//   { id: 7, title: "location 7" },
//   { id: 8, title: "location 8" },
// ];

// const AdsCreate = () => {
//   const [categorys, setCategorys] = useState(false);
//   const [data, setData] = useState({
//     image: [],
//   });

//   const Files = (files) => {
//     setData({ ...data, image: files });
//   };

//   const onChange = (e) => {
//     setData({ ...data, [e.target.name]: e.target.value });
//   };
//   return (
//     <Layout hindMenu>
//       <div className="ads_create_wrapper">
//         <Container>
//           <Typography
//             variant="h6"
//             style={{
//               color: "#002f34",
//               fontWeight: "700",
//               marginBottom: "15px",
//             }}
//           >
//             Post an ad
//           </Typography>
//           {/* category option here */}
//           <Grid container item spacing={2}>
//             <Card style={{ width: "100%" }}>
//               <CardContent style={{ background: "#1876d2" }}>
//                 <Typography
//                   variant="h6"
//                   style={{ color: "#fff", fontWeight: "700" }}
//                 >
//                   Category
//                 </Typography>
//               </CardContent>
//               <Divider />
//               <CardContent>
//                 <Grid item md={6} sm={10} xs={12}>
//                   <div className="adsInput_create_wrapper">
//                     <Typography
//                       variant="subtitle1"
//                       style={{ fontWeight: "600" }}
//                     >
//                       Tell us what you are posting:
//                       <span style={{ color: "red" }}>*</span>
//                     </Typography>
//                     <FormControl variant="outlined" fullWidth>
//                       <Select
//                         labelId="demo-simple-select-outlined-label"
//                         id="demo-simple-select-outlined"
//                         onChange={onChange}
//                         value={data.category}
//                         name="category"
//                         className="adsInput_create"
//                       >
//                         <MenuItem key={0} value={""}>
//                           Select a Category
//                         </MenuItem>

//                         {category?.map((item) => (
//                           <MenuItem key={item.id} value={item.id}>
//                             {item.title}
//                           </MenuItem>
//                         ))}
//                       </Select>
//                     </FormControl>
//                   </div>
//                 </Grid>
//               </CardContent>
//             </Card>

//             {!categorys && (
//               <Button
//                 variant="contained"
//                 color="secondary"
//                 style={{ marginTop: "20px" }}
//                 onClick={() => setCategorys(true)}
//                 disabled={!data.category}
//               >
//                 Continue
//               </Button>
//             )}
//           </Grid>

//           {categorys && (
//             <>
//               {/* Location option here */}
//               <Grid container item spacing={2} style={{ marginTop: "30px" }}>
//                 <Card style={{ width: "100%" }}>
//                   <CardContent style={{ background: "#1876d2" }}>
//                     <Typography
//                       variant="h6"
//                       style={{ color: "#fff", fontWeight: "700" }}
//                     >
//                       Location
//                     </Typography>
//                   </CardContent>
//                   <Divider />
//                   <CardContent>
//                     <Grid item md={6} sm={10} xs={12}>
//                       <div className="adsInput_create_wrapper">
//                         <Typography
//                           variant="subtitle1"
//                           style={{ fontWeight: "600" }}
//                         >
//                           Enter your post code:
//                           <span style={{ color: "red" }}>*</span>
//                         </Typography>
//                         <FormControl variant="outlined" fullWidth>
//                           <Select
//                             labelId="demo-simple-select-outlined-label"
//                             id="demo-simple-select-outlined"
//                             // onChange={onChange}
//                             // value={data.category}
//                             name="location"
//                             className="adsInput_create"
//                           >
//                             <MenuItem key={0} value={""}>
//                               Select a location
//                             </MenuItem>

//                             {locations?.map((item) => (
//                               <MenuItem key={item.id} value={item.id}>
//                                 {item.title}
//                               </MenuItem>
//                             ))}
//                           </Select>
//                         </FormControl>
//                       </div>
//                     </Grid>
//                   </CardContent>
//                 </Card>
//               </Grid>
//               {/* Title option here */}
//               <Grid container item spacing={2} style={{ marginTop: "30px" }}>
//                 <Card style={{ width: "100%" }}>
//                   <CardContent style={{ background: "#1876d2" }}>
//                     <Typography
//                       variant="h6"
//                       style={{ color: "#fff", fontWeight: "700" }}
//                     >
//                       Title <span style={{ color: "red" }}>*</span>
//                     </Typography>
//                   </CardContent>
//                   <Divider />
//                   <CardContent>
//                     <Grid item md={6} sm={10} xs={12}>
//                       <div className="adsInput_create_wrapper">
//                         <TextField
//                           variant="outlined"
//                           placeholder="Enter your email address here"
//                           onChange={onChange}
//                           fullWidth
//                           name="email"
//                           value={data.email}
//                           className="adsInput"
//                           // error={error.title}
//                           // helperText={error.title}
//                         />
//                       </div>
//                     </Grid>
//                   </CardContent>
//                 </Card>
//               </Grid>

//               {/* images option here */}
//               <Grid container item spacing={2} style={{ marginTop: "30px" }}>
//                 <Card style={{ width: "100%" }}>
//                   <CardContent style={{ background: "#1876d2" }}>
//                     <Typography
//                       variant="h6"
//                       style={{ color: "#fff", fontWeight: "700" }}
//                     >
//                       Images <span style={{ color: "red" }}>*</span>
//                     </Typography>
//                   </CardContent>
//                   <Divider />
//                   <CardContent>
//                     <Grid item md={10} sm={12} xs={12}>
//                       <div style={{ margin: "15px 0" }}>
//                         <div
//                           style={{
//                             margin: "10px 0",
//                             display: "flex",
//                             justifyContent: "space-between",
//                           }}
//                         >
//                           <Typography variant="subtitle1">
//                             Ads Image<span style={{ color: "red" }}>*</span>
//                           </Typography>
//                           <Typography variant="subtitle2" color="primary">
//                             Max 5 media files you can Upload
//                           </Typography>
//                         </div>
//                         <ImageUploder
//                           setFiles={Files}
//                           files={data.image}
//                           maxSize={10}
//                           maxFile={5}
//                           dropzoneText="Drag and drop files here or click"
//                         />
//                       </div>
//                     </Grid>
//                   </CardContent>
//                 </Card>
//               </Grid>

//               {/* description option here */}
//               <Grid container item spacing={2} style={{ marginTop: "30px" }}>
//                 <Card style={{ width: "100%" }}>
//                   <CardContent style={{ background: "#1876d2" }}>
//                     <Typography
//                       variant="h6"
//                       style={{ color: "#fff", fontWeight: "700" }}
//                     >
//                       Description <span style={{ color: "red" }}>*</span>
//                     </Typography>
//                   </CardContent>
//                   <Divider />
//                   <CardContent>
//                     <Grid item md={8} sm={12} xs={12}>
//                       <div style={{ margin: "15px 0" }}>
//                         <TextField
//                           variant="outlined"
//                           multiline
//                           rows={4}
//                           placeholder="Enter ads description here"
//                           onChange={onChange}
//                           fullWidth
//                           name="description"
//                           value={data.description}
//                           className="adsInput"
//                         />
//                       </div>
//                     </Grid>
//                   </CardContent>
//                 </Card>
//               </Grid>

//               {/* price option here */}
//               <Grid container item spacing={2} style={{ marginTop: "30px" }}>
//                 <Card style={{ width: "100%" }}>
//                   <CardContent style={{ background: "#1876d2" }}>
//                     <Typography
//                       variant="h6"
//                       style={{ color: "#fff", fontWeight: "700" }}
//                     >
//                       How much do you want for your item?
//                       <span style={{ color: "red" }}>*</span>
//                     </Typography>
//                   </CardContent>
//                   <Divider />
//                   <CardContent>
//                     <Grid item md={8} sm={12} xs={12}>
//                       <div>
//                         <Typography variant="subtitle1" gutterBottom>
//                           Price <span style={{ color: "red" }}>*</span>
//                         </Typography>
//                         <TextField
//                           variant="outlined"
//                           placeholder="Enter ads price here"
//                           onChange={onChange}
//                           fullWidth
//                           name="price"
//                           value={data.price}
//                         />
//                       </div>
//                     </Grid>
//                   </CardContent>
//                 </Card>
//               </Grid>
//               {/* promote option here */}
//               <Grid container item spacing={2} style={{ marginTop: "30px" }}>
//                 <Card style={{ width: "100%" }}>
//                   <CardContent style={{ background: "#1876d2" }}>
//                     <Typography
//                       variant="h6"
//                       style={{ color: "#fff", fontWeight: "700" }}
//                     >
//                       Make your ad stand out!
//                       <span style={{ color: "red" }}>*</span>
//                     </Typography>
//                   </CardContent>
//                   <Divider />
//                   <CardContent>
//                     <Grid item md={8} sm={12} xs={12}>
//                       <div className="adsInput_wrapper">
//                         <Typography variant="subtitle1">coming soon</Typography>
//                       </div>
//                     </Grid>
//                   </CardContent>
//                 </Card>
//               </Grid>
//               {/* email and phone option here */}
//               <Grid container item spacing={2} style={{ marginTop: "30px" }}>
//                 <Card style={{ width: "100%" }}>
//                   <CardContent style={{ background: "#1876d2" }}>
//                     <Typography
//                       variant="h6"
//                       style={{ color: "#fff", fontWeight: "700" }}
//                     >
//                       Your contact details
//                       <span style={{ color: "red" }}>*</span>
//                     </Typography>
//                   </CardContent>
//                   <Divider />
//                   <CardContent>
//                     <Grid item md={8} sm={12} xs={12}>
//                       <Typography variant="subtitle1">
//                         Please select at least one option to be contacted by:
//                       </Typography>
//                       <Grid
//                         container
//                         item
//                         spacing={3}
//                         style={{ margin: "15px 0" }}
//                       >
//                         <Grid item md={3} sm={4} xs={4}>
//                           <Typography variant="subtitle1">Email:</Typography>
//                         </Grid>
//                         <Grid item md={9} sm={8} xs={8}>
//                           sonjoybarmon@gmail.com
//                         </Grid>
//                         <Grid item md={3} sm={4} xs={4}>
//                           <Typography variant="subtitle1">Phone:</Typography>
//                         </Grid>
//                         <Grid item md={9} sm={8} xs={8}>
//                           <TextField
//                             variant="outlined"
//                             placeholder="Enter your phone number here"
//                             onChange={onChange}
//                             fullWidth
//                             type="Number"
//                             name="phone"
//                             value={data.phone}
//                             className="adsInput"
//                           />
//                         </Grid>
//                       </Grid>
//                     </Grid>
//                   </CardContent>
//                 </Card>
//               </Grid>
//               <div>
//                 <Button
//                   variant="contained"
//                   color="secondary"
//                   style={{
//                     marginTop: "50px",
//                     width: "200px",
//                     padding: "15px 25px",
//                     borderRadius: "30px",
//                   }}
//                 >
//                   Post an Ads
//                 </Button>
//               </div>
//             </>
//           )}
//         </Container>
//       </div>
//     </Layout>
//   );
// };

// export default AdsCreate;
