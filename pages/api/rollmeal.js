import { connectToDatabase } from "../../lib/mongodb";

export default async (req, res) => {
  const { db } = await connectToDatabase();


  const recipes = await db
    .collection("recipe-links")
    .find({})
    .sort({ metacritic: -1 })
    .limit(20)
    .toArray();


  console.log(JSON.stringify(recipes))
  res.json(recipes);
};