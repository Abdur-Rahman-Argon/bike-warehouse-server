const express = require("express");
const { MongoClient, ServerApiVersion } = require("mongodb");
const cors = require("cors");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri =
  "mongodb+srv://databaseassainment11:YtNby235AV4WjbLU@cluster0.3r9sp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

//databaseassainment11
//YtNby235AV4WjbLU

async function run() {
  try {
    await client.connect();
    const itemsCollection = client
      .db("databaseAssainment11")
      .collection("productItems");

    app.get("/productItems", async (req, res) => {
      const query = {};
      const cursor = itemsCollection.find(query);
      const productItems = await cursor.toArray();
      res.send(productItems);
    });
  } finally {
    //await client.close();
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("product");
});
app.get("/product", (req, res) => {
  res.send(product);
});

app.listen(port, () => {
  console.log("server connect port", port);
});
