import express from "express";
import morgan from "morgan";
import { json,urlencoded } from "body-parser";
import postRouter from "./post/post-router";
import userRouter from "./user/user-router";
import { connect } from "./util/database";
import cors from "cors";

const app = express();
const router = express.Router();

app.use(cors());
app.use(morgan('dev'));
app.use(json());
app.use(urlencoded({extended:true}));

//writing our own custom middlewares
const customLogger = (req,res,next) => {
    console.log("logs incoming");
    console.log(req.body);//middlewares can access the body of the request then decide whether to execute the callback and send the  response or not
    next();
}

app.use('/api/post',postRouter);
app.use('/api/user',userRouter);

app.get('/', [customLogger, customLogger] , (req,res) => {
    // console.log(req);
    res.send("OK GET");
});

//in similar way to get request we can use middleware here
app.post('/',(req,res) => {
    console.log(req);
    res.send("OK POST");
});


// router.get('/post', [customLogger, customLogger] , (req,res) => {
//     res.send("OK Router GET");
// });

// router.post('/post', [customLogger, customLogger] , (req,res) => {
//     res.send("OK Router POST");
// });

export const start = async () => {
    await connect();
    app.listen(3020,() => {
        console.log("Server is running");
    })
}