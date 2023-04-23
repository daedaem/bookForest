import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";
import books from "../book.json";
// const { persistAtom } = recoilPersist({
//   key: "bookState",
//   storage: sessionStorage,
// });

const sessionStorageEffect =
  (key) =>
  ({ setSelf, onSet }) => {
    const savedValue = sessionStorage.getItem(key);
    if (savedValue != null) {
      setSelf(JSON.parse(savedValue));
    } else {
      setSelf(books);
      sessionStorage.setItem(key, JSON.stringify(books));
    }

    onSet((newValue, _, isReset) => {
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
