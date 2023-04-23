import { atom } from "recoil";
import books from "../constants/book.json";
import { bookData } from "../types/book";
const sessionStorageEffect =
  (key: string) =>
  ({
    setSelf,
    onSet,
  }: {
    setSelf: (newValue: unknown) => void;
    onSet: (callback: any) => void;
  }) => {
    const savedValue = sessionStorage.getItem(key);
    if (savedValue != null) {
      setSelf(JSON.parse(savedValue));
    } else {
      setSelf(books);
      sessionStorage.setItem(key, JSON.stringify(books));
    }

    onSet((newValue: bookData[], _, isReset: boolean) => {
      isReset
        ? sessionStorage.removeItem(key)
        : sessionStorage.setItem(key, JSON.stringify(newValue));
    });
  };

export const bookState = atom({
  key: "bookState",
  default: books,
  effects: [sessionStorageEffect("book")],
});
