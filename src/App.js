import React, { Component } from 'react';

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
      console.log("evens-data",evensArray)

      //splicing the data into 50
      this.setState({ gallery: evensArray.splice(0, 50)  });
      this.setState({ gallery2: this.state.gallery.splice(0, 10) });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
      <div> textInComponent </div>
    );
  }
}

export default App;
