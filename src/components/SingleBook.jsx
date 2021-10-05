import React from "react";
import { Card } from "react-bootstrap";
import CommentArea from "./CommentArea";

class SingleBook extends React.Component {
  state = {
    selected: false,
  };
  render() {
    return (
      <>
        <Card
          className="BookCards"
          onClick={() => this.setState({ selected: !this.state.selected })}
          style={{
            border: this.state.selected ? "3px solid red" : "1px solid black",
          }}
        >
          <Card.Img
            className=" ml-5 mt-2"
            style={{ width: "150px" }}
            variant="top"
            src={this.props.book.img}
          />
          <Card.Body>
            <Card.Title>{this.props.book.title}</Card.Title>
          </Card.Body>
        </Card>
        {this.state.selected && <CommentArea asin={this.props.book.asin} />}
      </>
    );
  }
}
export default SingleBook;
