import { useRecoilState } from "recoil";
import { bookState } from "./../atoms/bookState";
import BookListItem from "./BookListItem";
import classes from "./BookList.module.css";
import { useState } from "react";
import { category } from "../constants/bookCategory";
import { bookData } from "../types/book";

const BookList = () => {
  const [bookList, setBookList] = useRecoilState(bookState);
  const [categoryFilter, setCategoryFilter] = useState("");

  const handleCategoryClick = (category: string) => {
    if (category === "All") {
      setCategoryFilter("");
    } else {
      setCategoryFilter(category);
    }
  };

  const filteredBooks = bookList.filter((book: bookData) =>
    categoryFilter === ""
      ? true
      : book.category && book.category!.includes(categoryFilter)
  );

  return (
    <article className={classes["book-list"]}>
      <h2>{categoryFilter ? categoryFilter : "전체"}</h2>
      <div className={classes["filter-container"]}>
        <div className={classes["category-list"]}>
          {category.map((category, index) => (
            <button
              key={index}
              onClick={() => handleCategoryClick(category)}
              className={`${classes["category"]} ${
                categoryFilter === category ? classes["category-selected"] : ""
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
      <ul>
        {filteredBooks.map((book: bookData) => (
          <BookListItem
            key={book.id}
            book={{
              id: book.id,
              title: book.title,
              author: book.author,
              imageUrl: book.imageUrl,
              price: book.price,
              description: book.description,
              category: book.category,
            }}
          />
        ))}
      </ul>
    </article>
  );
};
export default BookList;
