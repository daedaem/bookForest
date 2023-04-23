import book from "../book.json";

export const category = [
  "All",
  "어드벤처",
  "코미디",
  "드라마",
  "공포",
  "미스터리",
  "로맨스",
  "SF",
  "판타지",
  "전쟁",
];

export const priceRanges = [
  { label: "All", min: 0, max: Infinity },
  { label: "10,000원 이하", min: 0, max: 100 },
  { label: "20,000원 이하", min: 101, max: 200 },
  { label: "30,000원 이하", min: 201, max: 300 },
  { label: "30,000원 이상", min: 301, max: Infinity },
];
