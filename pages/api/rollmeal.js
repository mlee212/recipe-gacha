import { connectToDatabase } from "../../lib/mongodb";

export default async (req, res) => {
  const { db } = await connectToDatabase();

  const body = req.body

  const recipes = await db
    .collection("recipe-links" + body)
    .find({})
    .sort({ metacritic: -1 })
    .toArray();


  console.log(JSON.stringify(recipes))
  res.json(recipes);
};