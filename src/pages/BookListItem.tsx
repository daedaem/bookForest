import classes from "./BookListItem.module.css";
const BookListItem = ({ book }) => {
  const { id, title, author, description, imageUrl, price, category } = book;

  return (
    <li className={classes["book-list-item"]}>
      <div className={classes["book-cover"]}>
        <img src={imageUrl} alt="" />
      </div>
      <div className={classes["book-info"]}>
        <h3>{title}</h3>
        <p>{description}</p>
        <p>{author}</p>
        <p>{category}</p>
      </div>
      <div className={classes["book-price-add"]}>
        <button className={classes["add-to-cart"]}>장바구니 추가</button>
        <p>{price}</p>
      </div>
    </li>
  );
};
export default BookListItem;
