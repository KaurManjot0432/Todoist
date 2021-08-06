import express from "express";
import morgan from "morgan";
import { json,urlencoded } from "body-parser";

const app = express();


app.use(morgan('dev'));

app.get('/',(req,res) => {
    console.log(req);
    res.send("Hello World");
});
app.post('/',(req,res) => {
    console.log(req);
    res.send("BYY World");
});
export const start = () => {
    app.listen(3000,() => {
        console.log("Server is running");
    })
}