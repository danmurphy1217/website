import Container from "react-bootstrap/Container";
import { navLinkStylesEnter, navLinkStylesLeave } from "./Header";

const Books = (props) => {
  const FormattedBooks = props.books.map((book) => {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "flex-start",
          width: "100%",
          padding: "2.5%",
        }}
        key={Math.random().toString(36)}
      >
        <a
          href={book.Href}
          target="_blank"
          rel="noreferrer"
          className="book-imgs"
        >
          <img alt="Book" src={book.Src} height="150" width="100" />
        </a>
        <div style={{ paddingLeft: "5%" }}>
          <a
            href={book.Href}
            target="_blank"
            rel="noreferrer"
            style={{ textDecoration: "none" }}
            onMouseEnter={(e) => {
              navLinkStylesEnter(e, "underline", "3px", "#748492", "#525252");
            }}
            onMouseLeave={(e) => {
              navLinkStylesLeave(e);
            }}
          >
            <h3 style={{ color: "#525252" }}>{book.Title}</h3>
          </a>
          <h5 style={{ color: "#525252" }}>{book.Author}</h5>
          <p>{book.Description}</p>
        </div>
      </div>
    );
  });

  return (
    <Container style={{ marginBottom: "50px" }}>{FormattedBooks}</Container>
  );
};

export default Books;
