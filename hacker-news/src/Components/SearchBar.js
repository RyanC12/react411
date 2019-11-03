import React, { Component } from "react";
import { Input, Form, FormGroup, Col, Container, Row } from "reactstrap";
import axios from "axios";
import ArticleCard from "./ArticleCard";
import Dropdowns from "./Dropdown";

export default class SearchBar extends Component {
  state = {
    search: "",
    articles: [],
    apiUrl: "http://hn.algolia.com/api/v1/",
    dropdownOpen: false,
    date: "search",
    tag: ""
  };

  onChange = e => {
    let { search, articles, apiUrl, date, tag } = this.state;
    this.setState({ [e.target.name]: e.target.value }, () => {
      axios
        .get(`${apiUrl}${date}?query=${search}&tags=${tag}`)
        .then(res =>
          this.setState(
            {
              articles: res.data.hits
            },
            () => console.log(articles)
          )
        )
        .catch(err => console.log(err));
    });
  };
  toggle = () => {
    this.setState({ dropdownOpen: !this.state.dropdownOpen });
  };
  myCallback = dataFromChild => {
    this.setState({ tag: dataFromChild });
  };

  render() {
    let articleSection = this.state.articles.map((article, index) => {
      return (
        <Col>
          <ArticleCard key={index} article={article} index={index} />
        </Col>
      );
    });

    return (
      <div>
        <Form>
          <FormGroup>
            <Input
              type="search"
              name="search"
              id="search"
              placeholder="Search stories by title, url or author"
              onChange={this.onChange}
              value={this.state.search}
            />
          </FormGroup>
        </Form>
        <Dropdowns callBack={this.myCallback} />
        <Container fluid>
          <Row>
            <Col>{articleSection}</Col>
          </Row>
        </Container>
      </div>
    );
  }
}
