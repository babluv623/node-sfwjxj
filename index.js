import router from './routes/recipes.js';
import Express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import { User } from './models/User.js';
import { Image } from './models/Upload.js';

const url = 'mongodb://localhost/UserData';

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
const con = mongoose.connection;
con.on('open', () => {
  console.log('mongodb connected');
});

const app = Express();
const port = process.env.PORT || 3200;
app.use(cors());
app.use(Express.json());
app.use(Express.urlencoded({ extended: true }));



app.get('/', async (req, res) => {
  try {
    const data = await User.find();
    res.send(data);
  } catch (err) {
    res.send('error', err);
  }
});
app.get("/register", async (req,res)=>{
  req.send()
});
app.post("/register", async (req,res)=>{
  try{
    res.send(req.body.name)
  }
})


app.listen(port, () => console.log('started'));
