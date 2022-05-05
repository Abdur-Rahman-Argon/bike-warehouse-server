const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const product = [
  {
    serial: 1,
    supplierName: "Nasim",
    productName: "watch",
    price: "1500",
    img: "https://i.ibb.co/BCNjjjN/Urine.png",
    description:
      "I am a simple person of my bpersomnalotiy this is my book of self",
    stock: "23",
    delivery: "12",
  },
  {
    serial: 1,
    supplierName: "Nasim",
    productName: "watch",
    price: "1500",
    img: "https://i.ibb.co/BCNjjjN/Urine.png",
    description:
      "I am a simple person of my bpersomnalotiy this is my book of self",
    stock: "23",
    delivery: "12",
  },
  {
    serial: 1,
    supplierName: "Nasim",
    productName: "watch",
    price: "1500",
    img: "https://i.ibb.co/BCNjjjN/Urine.png",
    description:
      "I am a simple person of my bpersomnalotiy this is my book of self",
    stock: "23",
    delivery: "12",
  },
  {
    serial: 1,
    supplierName: "Nasim",
    productName: "watch",
    price: "1500",
    img: "https://i.ibb.co/BCNjjjN/Urine.png",
    description:
      "I am a simple person of my bpersomnalotiy this is my book of self",
    stock: "23",
    delivery: "12",
  },
  {
    serial: 1,
    supplierName: "Nasim",
    productName: "watch",
    price: "1500",
    img: "https://i.ibb.co/BCNjjjN/Urine.png",
    description:
      "I am a simple person of my bpersomnalotiy this is my book of self",
    stock: "23",
    delivery: "12",
  },
  {
    serial: 1,
    supplierName: "Nasim",
    productName: "watch",
    price: "1500",
    img: "https://i.ibb.co/BCNjjjN/Urine.png",
    description:
      "I am a simple person of my bpersomnalotiy this is my book of self",
    stock: "23",
    delivery: "12",
  },
  {
    serial: 1,
    supplierName: "Nasim",
    productName: "watch",
    price: "1500",
    img: "https://i.ibb.co/BCNjjjN/Urine.png",
    description:
      "I am a simple person of my bpersomnalotiy this is my book of self",
    stock: "23",
    delivery: "12",
  },
  {
    serial: 1,
    supplierName: "Nasim",
    productName: "watch",
    price: "1500",
    img: "https://i.ibb.co/BCNjjjN/Urine.png",
    description:
      "I am a simple person of my bpersomnalotiy this is my book of self",
    stock: "23",
    delivery: "12",
  },
  {
    serial: 1,
    supplierName: "Nasim",
    productName: "watch",
    price: "1500",
    img: "https://i.ibb.co/BCNjjjN/Urine.png",
    description:
      "I am a simple person of my bpersomnalotiy this is my book of self",
    stock: "23",
    delivery: "12",
  },
  {
    serial: 1,
    supplierName: "Nasim",
    productName: "watch",
    price: "1500",
    img: "https://i.ibb.co/BCNjjjN/Urine.png",
    description:
      "I am a simple person of my bpersomnalotiy this is my book of self",
    stock: "23",
    delivery: "12",
  },
];

app.get("/product", (req, res) => {
  res.send(product);
});

app.listen(port, () => {
  console.log("server connect port", port);
});
