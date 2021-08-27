import React from "react";
import { Grid, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import data from "../data.json";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Slider from "@material-ui/core/Slider";
import ArrowDropDownCircleIcon from "@material-ui/icons/ArrowDropDownCircle";
import Tooltip from "@material-ui/core/Tooltip";
import AllOutIcon from "@material-ui/icons/AllOut";
import GamesIcon from "@material-ui/icons/Games";
import ControlCameraIcon from "@material-ui/icons/ControlCamera";
import OpenWithIcon from "@material-ui/icons/OpenWith";
const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function Dashboard() {
  const [newData, setnewData] = React.useState([]);
  const classes = useStyles();
  console.log({ data });

  function valuetext(value) {
    return `${value}°C`;
  }
  const valuetextColor = (value) => {
    return `${value}°C`;
  };
  React.useEffect(() => {
    setnewData(data);
  }, []);
  const result = data.filter((value) => {
    console.log(value.color);
  });
  const handleChange = (e, val) => {
    console.log(val);
    if (val === 0) {
      setnewData(data);
    }
    if (val === 30) {
      let res = data.filter((value) => {
        return value.cut === "good";
      });
      setnewData(res);
    }
    if (val === 60) {
      let res = data.filter((value) => {
        return value.cut === "very good";
      });
      setnewData(res);
    }
    if (val === 90) {
      let res = data.filter((value) => {
        return value.cut === "excelent";
      });
      setnewData(res);
    }
  };

  const handleChangeColor = (e, val) => {
    console.log(val);
    if (val === 0) {
      setnewData(data);
    }
    if (val === 10) {
      let res = data.filter((value) => {
        return value.color === "d";
      });
      setnewData(res);
    }
    if (val === 20) {
      let res = data.filter((value) => {
        return value.color === "e";
      });
      setnewData(res);
    }
    if (val === 30) {
      let res = data.filter((value) => {
        return value.color === "f";
      });
      setnewData(res);
    }
    if (val === 40) {
      let res = data.filter((value) => {
        return value.color === "g";
      });
      setnewData(res);
    }
    if (val === 50) {
      let res = data.filter((value) => {
        return value.color === "h";
      });
      setnewData(res);
    }
    if (val === 60) {
      let res = data.filter((value) => {
        return value.color === "i";
      });
      setnewData(res);
    }
    if (val === 70) {
      let res = data.filter((value) => {
        return value.color === "j";
      });
      setnewData(res);
    }
    if (val === 80) {
      let res = data.filter((value) => {
        return value.color === "k";
      });
      setnewData(res);
    }
  };
  const shapeButton = (type) => {
    switch (type) {
      case "Round":
        let res = data.filter((value) => {
          return value.shape === "Round";
        });
        setnewData(res);

        break;
      case "Princess":
        let resPrincess = data.filter((value) => {
          return value.shape === "Princess";
        });
        setnewData(resPrincess);
        break;
      case "Cushion":
        let resCushion = data.filter((value) => {
          return value.shape === "Cushion";
        });
        setnewData(resCushion);
        break;
      case "Emerald":
        let resEmerald = data.filter((value) => {
          return value.shape === "Emerald";
        });
        setnewData(resEmerald);

        break;
      case "Oval":
        let resOval = data.filter((value) => {
          return value.shape === "Oval";
        });
        setnewData(resOval);

        break;
      default:
        setnewData(data);
    }
  };
  const handleChangeClarity = (e, val) => {
    console.log(val);
    switch (val) {
      case 10:
        let rew = data.filter((value) => {
          return value.clarity === "11";
        });
        setnewData(rew);
        console.log(rew);

        break;
      case 20:
        let s12 = data.filter((value) => {
          return value.clarity === "s12";
        });
        setnewData(s12);
        break;
      case 30:
        let s11 = data.filter((value) => {
          return value.clarity === "s11";
        });
        setnewData(s11);
        break;
      case 40:
        let v52 = data.filter((value) => {
          return value.clarity === "v52";
        });
        setnewData(v52);

        break;
      case 50:
        let vv52 = data.filter((value) => {
          return value.clarity === "vv52";
        });
        setnewData(vv52);

        break;
      case 60:
        let vv51 = data.filter((value) => {
          return value.clarity === "vv51";
        });
        setnewData(vv51);

        break;
      case 70:
        let ifff = data.filter((value) => {
          return value.clarity === "if";
        });
        setnewData(ifff);

        break;

      default:
        setnewData(data);
    }
  };
  return (
    <>
      <Container maxWidth="lg">
        <Typography align="center" variant="h2">
          {" "}
          Diamond Store
        </Typography>

        <Grid
          container
          direction="row"
          justifyContent="space-evenly"
          alignItems="center"
          spacing={3}
          style={{ paddingTop: 100 }}
        >
          <Grid item xs={6}>
            <Typography color="textSecondary" display="inline">
              Shapes
            </Typography>
            <ButtonGroup size="small" aria-label="small outlined button group">
              <Tooltip title="Round">
                <Button onClick={() => shapeButton("Round")}>
                  <ArrowDropDownCircleIcon />
                </Button>
              </Tooltip>
              <Tooltip title="Princess">
                <Button onClick={() => shapeButton("Princess")}>
                  <AllOutIcon />
                </Button>
              </Tooltip>
              <Tooltip title="Cushion,">
                <Button onClick={() => shapeButton("Cushion")}>
                  <ControlCameraIcon />
                </Button>
              </Tooltip>
              <Tooltip title="Emerald,">
                <Button onClick={() => shapeButton("Emerald")}>
                  <GamesIcon />
                </Button>
              </Tooltip>
              <Tooltip title="Oval,">
                <Button onClick={() => shapeButton("Oval")}>
                  <OpenWithIcon />
                </Button>
              </Tooltip>
            </ButtonGroup>
          </Grid>
          <Grid item xs={6}>
            <Typography color="textSecondary" display="inline">
              Cut
            </Typography>
            <span style={{ margin: 20 }}>Good</span>{" "}
            <span style={{ margin: 120 }}> Very Good</span>{" "}
            <span style={{ margin: 50 }}>Excelent</span>
            <Slider
              defaultValue={0}
              getAriaValueText={valuetext}
              aria-labelledby="discrete-slider"
              valueLabelDisplay="auto"
              onChange={(e, val) => handleChange(e, val)}
              step={30}
              marks
              min={0}
              max={90}
            />
          </Grid>
          <Grid item xs={6}>
            <Typography color="textSecondary" display="inline">
              Colour
            </Typography>
            <span style={{ margin: 10 }}>D</span>{" "}
            <span style={{ marginLeft: 40 }}> E</span>{" "}
            <span style={{ marginLeft: 40 }}>F</span>
            <span style={{ marginLeft: 50 }}>G</span>
            <span style={{ marginLeft: 60 }}>H</span>
            <span style={{ marginLeft: 70 }}>I</span>
            <span style={{ marginLeft: 80 }}>J</span>
            <span style={{ marginLeft: 90 }}>K</span>
            <Slider
              defaultValue={0}
              getAriaValueText={valuetextColor}
              aria-labelledby="discrete-slider"
              valueLabelDisplay="auto"
              onChange={(e, val) => handleChangeColor(e, val)}
              step={10}
              marks
              min={0}
              max={80}
            />
          </Grid>
          <Grid item xs={6}>
            {" "}
            <Typography color="textSecondary" display="inline">
              Clarity
            </Typography>
            <span style={{ margin: 10 }}>11</span>{" "}
            <span style={{ marginLeft: 40 }}> S12</span>{" "}
            <span style={{ marginLeft: 40 }}>S11</span>
            <span style={{ marginLeft: 50 }}>V52</span>
            <span style={{ marginLeft: 60 }}>VV52</span>
            <span style={{ marginLeft: 70 }}>VV51</span>
            <Slider
              defaultValue={0}
              getAriaValueText={valuetextColor}
              aria-labelledby="discrete-slider"
              valueLabelDisplay="auto"
              onChange={(e, val) => handleChangeClarity(e, val)}
              step={10}
              marks
              min={0}
              max={60}
            />
          </Grid>
        </Grid>

        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          spacing={3}
          style={{ paddingTop: 100 }}
        >
          {newData?.map((item) => (
            <Grid item xs={3}>
              <Card className={classes.root}>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image={item.img}
                    title={item.diamond_name}
                  />

                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      {item.diamond_name}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      {item.discription}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Typography> {item.price}</Typography>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}
