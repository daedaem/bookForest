import { bookData } from "../types/book";
import classes from "./BookListItem.module.css";

const BookListItem = ({ book }: { book: bookData }) => {
  const { title, author, description, imageUrl, price, category } = book;

  return (
    <li className={classes["book-list-item"]}>
      <div className={classes["book-cover"]}>
        <img src={imageUrl} alt="" />
      </div>
      <div className={classes["book-info"]}>
        <h3>{title}</h3>
        <h5>{author} </h5>
        <br />

        <p>{description}</p>
        <br />
        <p># {category}</p>
      </div>
      <div className={classes["book-price-add"]}>
        <p>{price}</p>
        <button className={classes["add-to-cart"]}>장바구니 추가</button>
      </div>
    </li>
  );
};
export default BookListItem;
