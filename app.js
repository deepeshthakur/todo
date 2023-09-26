import express from 'express'
const app = express();
import routes from './routes/web.js';
import connectDb from './db/connectDb.js';
const port = process.env.PORT|| 3001;

const DATABASE_URL = "mongodb://localhost:27017";
app.use(express.urlencoded({extended:false}))
app.use(express.static('public'))
app.set("view engine","ejs");


connectDb(DATABASE_URL);

app.use('/',routes);
app.listen(port,()=>{
    console.log("server is running")
})