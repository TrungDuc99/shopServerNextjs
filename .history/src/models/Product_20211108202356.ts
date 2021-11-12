import { Document, Schema } from "mongoose";
import defaultType from "../utils/defaultType";

require("dotenv").config();

export interface ProductDoc extends Document {
  id: string;
  nameProductme: string;
    description: string;
    image: string;
  show: boolean;
}

const ProductSchema = new Schema<ProductDoc>({
  
});

export default ProductSchema;
