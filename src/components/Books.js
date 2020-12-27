import Container from "react-bootstrap/Container";
import { navLinkStylesEnter, navLinkStylesLeave, StyledLink } from "./Header";

const BookItems = [
  {
    Title: "Lord of the Flies",
    Author: "William Golding",
    Description: "This is the description for <book>",
    Src:
      "https://images-na.ssl-images-amazon.com/images/I/51eeAWItwbL._SX281_BO1,204,203,200_.jpg",
    Href:
      "https://www.amazon.com/Lord-Flies-William-Golding/dp/0399501487/ref=sr_1_1?crid=2H4S4GZM37AF7&dchild=1&keywords=lord+of+the+flies&qid=1609023157&sprefix=lord+of+the+flies%2Caps%2C175&sr=8-1",
  },
  {
    Title: "Acting with Power",
    Author: "Deborah Gruenfeld",
    Description: "This is the description for <book>",
    Src:
      "https://images-na.ssl-images-amazon.com/images/I/41jbcxHKq7L._SX326_BO1,204,203,200_.jpg",
    Href:
      "https://www.amazon.com/Acting-Power-More-Powerful-Believe/dp/1101903953/ref=sr_1_1?crid=3UUIHIGQ7VCGV&dchild=1&keywords=acting+with+power&qid=1609023215&sprefix=acting+with%2Caps%2C167&sr=8-1",
  },
  {
    Title: "The New Silk Roads: A New History of the World",
    Author: "Peter Frankopan",
    Description: "This is the description for <book>",
    Src:
      "https://images-na.ssl-images-amazon.com/images/I/61ZPM2PFJsL._SX329_BO1,204,203,200_.jpg",
    Href:
      "https://www.amazon.com/Silk-Roads-New-History-World/dp/1101912375/ref=sr_1_2?crid=1FJVPNE6EQRGK&dchild=1&keywords=the+new+silk+roads+by+peter+frankopan&qid=1609023328&sprefix=the+new+silk+roads%3A+a+new+%2Caps%2C162&sr=8-2",
  },
  {
    Title: "The Everything Store",
    Author: "Brad Stone",
    Description: "This is the description for <book>",
    Src:
      "https://images-na.ssl-images-amazon.com/images/I/51BgKxKjkWL._SX331_BO1,204,203,200_.jpg",
    Href:
      "https://www.amazon.com/Everything-Store-Jeff-Bezos-Amazon/dp/0316219282/ref=sr_1_1?crid=3NWX9UK39ILLF&dchild=1&keywords=the+everything+store&qid=1609023352&sprefix=the+everything+sto%2Caps%2C151&sr=8-1",
  },
  {
    Title: "Animal Farm",
    Author: "George Orwell",
    Description: "This is the description for <book>",
    Src:
      "https://images-na.ssl-images-amazon.com/images/I/41NzDuSdIfL._SX277_BO1,204,203,200_.jpg",
    Href:
      "https://www.amazon.com/Animal-Farm-George-Orwell/dp/0451526341/ref=sr_1_1?crid=DUGG67CDB8IZ&dchild=1&keywords=animal+farm+by+george+orwell&qid=1609020557&sprefix=animal+farm%2Caps%2C176&sr=8-1",
  },
];

const Books = () => {
  const FormattedBooks = BookItems.map((book) => {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "flex-start",
          width: "100%",
          padding: "2.5%",
        }}
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
          <h4 style={{ color: "#525252" }}>{book.Author}</h4>
          <p>{book.Description}</p>
        </div>
      </div>
    );
  });

  return <Container>{FormattedBooks}</Container>;
};

export default Books;
