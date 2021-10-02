import { LoremIpsum } from "react-lorem-ipsum";
const products = [
  {
    id: "1",
    name: "Airpods",
    image: "/images/airpods.jpg",
    description: <LoremIpsum p={1} />,
    price: 99,
  },
  {
    id: "2",
    name: "Apple Watch",
    image: "/images/apple-watch.jpg",
    description: <LoremIpsum p={1} />,
    price: 79,
  },
  {
    id: "3",
    name: "iPhone 12",
    image: "/images/iphone-12.jpg",
    description: <LoremIpsum p={1} />,
    price: 89,
  },
  {
    id: "4",
    name: "iPhone SE",
    image: "/images/iphone-se.jpg",
    description: <LoremIpsum p={1} />,
    price: 29,
  },
  {
    id: "5",
    name: "MacBook Pro",
    image: "/images/macbook.jpg",
    description: <LoremIpsum p={1} />,
    price: 89,
  },
  {
    id: "6",
    name: "Logitech MX Master",
    image: "/images/mouse.jpg",
    description: <LoremIpsum p={1} />,
    price: 59,
  },
];

export default products;
