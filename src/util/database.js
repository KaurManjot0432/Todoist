import mongoose from "mongoose";
import { config } from "../config/development";

export const connect = (url = config.databaseURL, opt = {}) => {
    console.log("mongodb connected");
    return mongoose.connect(url);
}