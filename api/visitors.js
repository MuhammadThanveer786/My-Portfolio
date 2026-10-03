import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;

if (!uri) {
  throw new Error("MONGODB_URI is not defined");
}

let client;
let clientPromise;

if (process.env.NODE_ENV === "development") {
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, {
      tls: true,
      serverSelectionTimeoutMS: 10000,
    });

    global._mongoClientPromise = client.connect();
  }

  clientPromise = global._mongoClientPromise;
} else {
  client = new MongoClient(uri, {
    tls: true,
    serverSelectionTimeoutMS: 10000,
  });

  clientPromise = client.connect();
}

export default async function handler(req, res) {
  try {
    const client = await clientPromise;

    const db = client.db("portfolio");
    const collection = db.collection("stats");

    if (req.method === "POST") {
      const result = await collection.findOneAndUpdate(
        { _id: "portfolio" },
        { $inc: { views: 1 } },
        {
          upsert: true,
          returnDocument: "after",
        }
      );

      return res.status(200).json({
        views: result?.views ?? 1,
      });
    }

    if (req.method === "GET") {
      const result = await collection.findOne({
        _id: "portfolio",
      });

      return res.status(200).json({
        views: result?.views ?? 0,
      });
    }

    return res.status(405).json({
      message: "Method not allowed",
    });
  } catch (error) {
    console.error("Visitor counter error:", error);

    return res.status(500).json({
      message: "Failed to process visitor count",
    });
  }
}