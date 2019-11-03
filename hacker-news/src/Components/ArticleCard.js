import React, { Component } from "react";
import { Toast, ToastBody, ToastHeader } from "reactstrap";

export default class ArticleCard extends Component {
  render() {
    let {
      created_at,
      points,

      title,
      url,
      author,

      num_comments
    } = this.props.article;
    return (
      <div>
        <Toast style={{ maxWidth: "100%" }}>
          <ToastHeader>
            <strong>{title}</strong> <a href={url}>({url})</a>
          </ToastHeader>
          <ToastBody>
            {points} points | {author} |{created_at} | {num_comments} comments
          </ToastBody>
        </Toast>
      </div>
    );
  }
}
