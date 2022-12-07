import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Button from "@mui/material/Button";
import classes from "./Footer.module.css";
import { Avatar } from "@mui/material";
import Stack from "@mui/material/Stack";

const Footer = () => {
  const avatarStyle = { backgroundColor: "#045F5F" };
  return (
    <div>
      <footer>
        <div>
          <h2>Get in touch</h2>
          <div>
            <p className={classes.para}>
              If you wanna get in touch, talk to me about a project
              collaboration or just say hi, fill up the awesome form below or
              send an email to mansi25vv@gmail.com and ~let's talk.
            </p>
          </div>
          <div className={classes.form}>
            {/* <Form /> */}
            <Box className={classes["para-box"]}>
              {/* <AccountCircle className={classes["account-circle"]} /> */}
              <Avatar
                className={classes["account-circle"]}
                style={avatarStyle}
              ></Avatar>
              <TextField
                id="input-with-name"
                label="Fill with your name"
                variant="standard"
              />
              <div className={classes.btn}>
                <Stack direction="row" spacing={2}>
                  <Button variant="contained" color="success">
                    NEXT
                  </Button>
                  <Button variant="contained" color="success">
                    SUBMIT YOUR MESSAGE
                  </Button>
                </Stack>
              </div>
            </Box>
          </div>
          {/* <div className={classes.btn}>
            <Stack direction="row" spacing={2}>
              <Button variant="contained" color="success">
                NEXT
              </Button>
              <Button variant="contained" color="success">
                SUBMIT YOUR MESSAGE
              </Button>
            </Stack>
          </div> */}

          {/* <div className={classes.btn}>
            <Button variant="contained">NEXT</Button>
            <Button variant="contained">SUBMIT YOUR MESSAGE</Button>
          </div> */}
        </div>

        {/* <div className={classes.container}>
          <div className={classes.field} style="flex-wrap: wrap;">
            <div className={classes.des}>
              <div className={classes.logo}>
                <i className={classes["fas fa-shopping-basket"]}></i>Grocery
                Basket
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Incidunt, distinctio aperiam consequuntur!
              </p>
              <div className={classes.social}>
                <i className={classes["fab fa-facebook"]}></i>
                <i className={classes["fab fa-instagram"]}></i>
                <i className={classes["fab fa-twitter"]}></i>
                <i className={classes["fab fa-youtube"]}></i>
              </div>
            </div>

            <div className={classes.contact}>
              <h2>contact us</h2>
              <li>
                <span>Address:</span>
                <li>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.6730423334334!2d73.96776071415975!3d18.498463474679664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c27747b4827d%3A0xa0fbb47ff6618e7!2sNandini%20Bellus!5e0!3m2!1sen!2sin!4v1667808934299!5m2!1sen!2sin"
                    width="600"
                    height="450"
                    style="border:0;"
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                  ></iframe>
                </li>
              </li>
              <li>
                <span>Email-Id:</span> grosarybasket@demo.com
              </li>
              <li>
                <span>Phone:</span> (0741)-32146541
              </li>
              <li>
                <span>mobile:</span> +91 9420746307
              </li>
            </div>
          </div>

          <div className={classes.copy}>
            <hr></hr>
            created by <span>Mansi Vakte</span> | All right reserved.!
          </div>
        </div> */}
      </footer>
    </div>
  );
};

export default Footer;
