import Express from "express";
import 'dotenv/config';
import "./database/connectdb.js";
import authrouter from "./routes/auth.route.js";


const app=Express();
app.use(Express.json());
app.use("/api/v1/auth", authrouter)

const PORT=process.env.PORT || 5000;
app.listen(5000, ()=> console.log("alejandro http://localhost:"+PORT));
