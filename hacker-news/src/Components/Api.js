import React, { Component } from "react";
import SearchBar from "./SearchBar";

export default class Api extends Component {
  constructor(props) {
    super(props);

    this.state = {
      articles: []
    };
  }

  async componentDidMount() {
    const proxy = "https://cors-anywhere.herokuapp.com/";
    const url = `${proxy}http://hn.algolia.com/api/v1/search?query=jon`;
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    this.setState(
      {
        articles: data
      },
      () => console.log(this.state.articles)
    );
  }
  render() {
    return <div></div>;
  }
}
