import { Document, Schema } from "mongoose";
import defaultType from "../utils/defaultType";

require("dotenv").config();

export interface CartDoc extends Document {
  id: string;
  date: string;
  quantity: string;
    status: string;
    
}

const CartSchema = new Schema<CartDoc>({
  
});

export default CartSchema;
