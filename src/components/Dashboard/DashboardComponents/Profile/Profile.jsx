import { Grid } from "@material-ui/core";
import "./Profile.scss";

const Profile = () => {
  return (
    <>
      <Grid container item spacing={3}>
        <Grid item lg={12} md={12} sm={12} xs={12}>
          <div className="dashboard__profile">
            <div className="dashboard__profile__field">
              <h1>Rayhan Islam Shagor</h1>
              <div className="dashboard__profile_info">
                <div>
                  <h5>Login email</h5>
                  <p>raihanislamshagor@gmail.com</p>
                </div>
                <div>
                  <h5>Password</h5>
                  <span>******</span>
                </div>
                <div>
                  <a href="!#">edit</a>
                </div>
              </div>
              <div className="dashboard__contact">
                <div>
                  <h4>Contact details</h4>
                  <span>contact number:</span> <br />
                  <a href="!#">Add a phone number</a> <br />
                  <span>Display name:</span>
                  <p>Rayhan</p>
                </div>
                <div>
                  <span>Primary email</span> <br />
                  <p>raihanislamshagor@gmail.com</p>
                </div>
                <div>
                  <a href="!#">edit</a>
                </div>
              </div>
              <div className="dashboard__cv_section">
                <h5>Your CV</h5>
                <p>
                  Upload your CV and it will be instantly available to send
                  every time you apply for a job.
                </p>

                <div className="dashboard__uploadCV">
                  <div>
                    <label required className="custom-file-upload ">
                      <input style={{ display: "none" }} type="file" />
                      choose file
                    </label>
                  </div>

                  <p>We accept Word, PDF and Richtext formats (Max 6MB)</p>
                </div>
              </div>
              <div className="dashboard__account">
                <h2>Account</h2>
                <a href="!#">Deactivate your account</a>
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
    </>
  );
};

export default Profile;
