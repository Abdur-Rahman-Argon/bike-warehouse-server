const express = require("express");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const cors = require("cors");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const app = express();

const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

//mongo url
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.3r9sp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
//mongo client
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

//server with mongo
async function run() {
  try {
    await client.connect();
    const itemsCollection = client
      .db("databaseAssainment11")
      .collection("productItems");

    // mongo get data api
    app.get("/productItems", async (req, res) => {
      const query = {};
      const cursor = itemsCollection.find(query);
      const productItems = await cursor.toArray();
      res.send(productItems);
    });

    // single data api
    app.get("/productItem/:id", async (req, res) => {
      const id = req.params.id;
      const query = {};
      const cursor = itemsCollection.find(query);
      const productItems = await cursor.toArray();
      const productItem = productItems.find((product) => product._id == id);
      res.send(productItem);
    });

    //Auth
    app.post("/jwtToken", async (req, res) => {
      const user = req.body;
      const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: "1d",
      });
      res.send({ accessToken });
    });

    // mongo post data
    app.post("/productItems", async (req, res) => {
      const newItem = req.body;
      const result = await itemsCollection.insertOne(newItem);
      res.send(result);
    });

    // load multiple user data
    app.get("/singleUserData", async (req, res) => {
      const email = req.query.email;
      const query = { email };
      const cursor = itemsCollection.find(query);
      const productItems = await cursor.toArray();
      res.send(productItems);
    });

    // update productItem
    app.put("/productItem/:id", async (req, res) => {
      const id = req.params.id;
      const updateItms = req.body;
      const filter = { _id: ObjectId(id) };
      const options = { upsert: true };
      const updateDoc = {
        $set: {
          stock: updateItms.stock,
          delivery: updateItms.delivery,
        },
      };
      const result = await itemsCollection.updateOne(
        filter,
        updateDoc,
        options
      );
      res.send(result);
    });

    // mongo remove data
    app.delete("/productItem/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: ObjectId(id) };
      const result = await itemsCollection.deleteOne(query);
      res.send(result);
    });
  } finally {
    //await client.close();
  }
}
run().catch(console.dir);

//get api
app.get("/", (req, res) => {
  res.send("Running our database vh assainment server : warehouse");
});

//port runing
app.listen(port, (err) => {
  console.log("server connected port", port);
});
