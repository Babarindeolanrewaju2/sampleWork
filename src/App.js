import React, { Component } from 'react';
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import Typography from '@material-ui/core/Typography';
import Grid from "@material-ui/core/Grid";
// import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gallery: [],
      gallery2: [],
    };

  }

  async componentDidMount() {
    try {
      //fetching data from the Api
      const response = await fetch(`https://jsonplaceholder.typicode.com/photos`);
      const json = await response.json();

      //filtering the data for even items
      const evensArray = json.filter(item => item.id % 2 === 0);
      // console.log("evens-data",evensArray)

      //splicing the data into 50
      this.setState({ gallery: evensArray.splice(0, 50)  });
      this.setState({ gallery2: this.state.gallery.splice(0, 10) });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const { gallery2 } = this.state;

    return (
      <div className="card">
      <Typography variant="h2" align="center" gutterBottom>
        Tillate
      </Typography>
      <Grid container spacing={3} >
        {gallery2.map(row => (
          <Grid item xs={12} md={6} lg={4} xl={4} className="item">
            <Card className="box">
              <CardHeader
                title={row.id}
                subheader={row.title}
                className="text"
                // align="center"
              />
              <CardContent className="photo">
                <img src={row.thumbnailUrl} alt={row.title} />

                {/* <CardMedia
                  // className={classes.media}
                  style={{height: 0, paddingTop: '56.25%'}}
                  image={row.thumbnailUrl} 
                  title={row.title} 
                /> */}
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <div className="more">
         <Button variant="contained" color="primary" onClick={this.handleClick}>Show More</Button>
      </div>
      </div>
    );
  }
}

export default App;
