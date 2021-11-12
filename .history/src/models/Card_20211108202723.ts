import { Document, Schema } from "mongoose";
import defaultType from "../utils/defaultType";

require("dotenv").config();

export interface CardDoc extends Document {
  id: string;
  date: string;
  quantity: string;
  status: string;
}

const CardSchema = new Schema<CardDoc>({
  
});

export default CardSchema;
