let xAxisData = [
  { name: "Jan", sale: 112_000 },
  { name: "Feb", sale: 90_000 },
  { name: "Mar", sale: 105_090 },
  { name: "Apr", sale: 99_000 },
  { name: "May", sale: 54_000 },
  { name: "Jun", sale: 85_000 },
  { name: "Jul", sale: 34_000 },
  { name: "Agu", sale: 18_598 },
  { name: "Sep", sale: 0 },
  { name: "Oct", sale: 73_078 },
  { name: "Nov", sale: 12_900 },
  { name: "Des", sale: 97_000 },
];

const newMembers = [
  {
    id: 1,
    username: "Hamed Man",
    title: "Web Developer",
    img: "./images/hamed.jpg",
  },
  {
    id: 2,
    username: "Amir Mas",
    title: "Hacker",
    img: "./images/amir.jpg",
  },
  {
    id: 3,
    username: "Ehsan Kar",
    title: "PremierePro",
    img: "./images/ehsan.jpg",
  },
  {
    id: 4,
    username: "Ali Hos",
    title: "React",
    img: "./images/ali.jpg",
  },
];

const transactions = [
  {
    id: 1,
    customer: "Hamed Man",
    date: "12 Jun 2022",
    amount: 921,
    status: "Approved",
    img: "./images/hamed.jpg",
  },
  {
    id: 2,
    customer: "Ehsan Karam",
    date: "23 Jul 2022",
    amount: 524,
    status: "Declined",
    img: "./images/ehsan.jpg",
  },
  {
    id: 3,
    customer: "Amir Mas",
    date: "28 May 2022",
    amount: 325,
    status: "Pending",
    img: "./images/amir.jpg",
  },
  {
    id: 1,
    customer: "Ali Hos",
    date: "1 Feb 2022",
    amount: 785,
    status: "Approved",
    img: "./images/ali.jpg",
  },
];

let userRow = [
  {
    id: 1,
    username: "Hamed Man",
    avatar: "./images/hamed.jpg",
    status: "active",
    transaction: "$112",
    email: "Hamed@gmail.com",
  },
  {
    id: 2,
    username: "Ehsan Karam",
    avatar: "./images/ehsan.jpg",
    status: "non-active",
    transaction: "$152",
    email: "Ehsan@gmail.com",
  },
  {
    id: 3,
    username: "Amir Mas",
    avatar: "./images/amir.jpg",
    status: "active",
    transaction: "$108",
    email: "Amir@gmail.com",
  },
  {
    id: 4,
    username: "Ali Hos",
    avatar: "./images/ali.jpg",
    status: "active",
    transaction: "$104",
    email: "Ali@gmail.com",
  },
  {
    id: 5,
    username: "Arman Khat",
    avatar: "./images/arman.jpg",
    status: "active",
    transaction: "$88.95",
    email: "Arman@gmail.com",
  },
];

let products = [
  {
    id: 1,
    title: "Asus",
    avatar: "./images/asus.jpg",
    price: "$890",
  },
  {
    id: 2,
    title: "Acer",
    avatar: "./images/acer.jpg",
    price: "$700",
  },
  {
    id: 3,
    title: "Lenovo",
    avatar: "./images/lenovo.jpg",
    price: "$990",
  },
  {
    id: 4,
    title: "HP",
    avatar: "./images/hp.jpg",
    price: "$780",
  },
  {
    id: 1,
    title: "Dell",
    avatar: "./images/dell.jpg",
    price: "$810",
  },
];

let productsData = [
  { name: "Jan", sale: 118_000 },
  { name: "Feb", sale: 88_000 },
  { name: "Mar", sale: 111_090 },
];

export { xAxisData, newMembers, transactions, userRow, products, productsData };
