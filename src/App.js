import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import WarningSign from "./components/WarningSign";
// import MyBadge from "./components/MyBAdge";
// import SingleBook from "./components/SingleBook";
import fantasy from "./data/fantasy.json";
import BookList from "./components/BookList";

function App() {
  return (
    <>
      <WarningSign text="Hello There!" />
      {/* <MyBadge text="Badge" color="info" /> */}
      {/* <SingleBook book={fantasy[0]} /> */}
      <BookList books={fantasy} />
    </>
  );
}

export default App;
