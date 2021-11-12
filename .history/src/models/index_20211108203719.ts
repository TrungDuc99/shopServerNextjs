import mongoose from "mongoose";
import ProductSchema, { ProductDoc } from "./Product";
import UserSchema, { UserDoc } from "./User";

const UserModel = mongoose.model<UserDoc>("User", UserSchema);
const ProductModel = mongoose.model<ProductDoc>("Product", ProductSchema);

export { ProductModel };
export { UserModel };
