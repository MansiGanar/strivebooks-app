import { Component } from "react";
import CommentList from "./CommentList";
import AddComment from "./AddComment";

class CommentArea extends Component {
  state = {
    comments: [],
  };
  componentDidMount = async () => {
    try {
      let response = await fetch(
        `https://striveschool-api.herokuapp.com/api/comments/` +
          this.props.asin,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTRiMmEwMDRiYjUzZDAwMTViMTlmODkiLCJpYXQiOjE2MzMzODA2OTEsImV4cCI6MTYzNDU5MDI5MX0.QjsWeaDP8vsQr25Ksmw6ADCV3nJLfmJgGZSBgz5LikQ",
          },
        }
      );
      console.log(response);
      let comments = await response.json();
      this.setState({ comments: comments });
    } catch (error) {
      console.log(error);
    }
  };
  render() {
    return (
      <div style={{ color: "red" }} className="p-4">
        <AddComment asin={this.props.asin} />
        {<CommentList commentsToShow={this.state.comments} />}
      </div>
    );
  }
}
export default CommentArea;
