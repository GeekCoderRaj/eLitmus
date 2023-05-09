import { number } from "joi";
import mongoose from "mongoose";
const Schema = mongoose.Schema;

const resultSchema = new Schema({
    name:{
        type: String,
    },
    email:{
        type: String,
    },
    Total_Marks:{
        type: Number
    },
    Time:{
        type: [Number]
    }
},{timestamps: true})

export default mongoose.model('Result',resultSchema,'results');