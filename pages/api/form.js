import { MongoClient } from 'mongodb';

export default async function handler(req, res) {
  // Get data submitted in request's body.
  const body = req.body

  // Optional logging to see the responses
  // in the command line where next.js app is running.
  console.log('body.name: ', body.name)
  console.log('body.url: ', body.url)

  // Guard clause checks for first and last name,
  // and returns early if they are not found
  if (!body.name || !body.url) {
    // Sends a HTTP bad request error code
    return res.status(400).json({ data: 'name or url not found' })
  }

  // console.log(JSON.parse(body))

  const client = await MongoClient.connect("mongodb+srv://mlee212:99NF9xXzOyH1ZM5u@cluster0.7myuhnv.mongodb.net/?retryWrites=true&w=majority");

  const db = client.db("recipe-gacha");
  
  const yourCollection = db.collection("recipe-links");

  const result = await yourCollection.insert(body);

  console.log(result);

  client.close();

  // Found the name.
  // Sends a HTTP success code
  res.status(200).json({ data: `${body.name} ${body.url}` })
}
  