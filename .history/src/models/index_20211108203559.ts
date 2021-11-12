import mongoose from "mongoose";
import ProductSchema, { ProductDoc } from "./Product";
import UserSchema, { UserDoc } from "./User";

const UserModel = mongoose.model<UserDoc>("User", UserSchema);
const ProductDoc = mongoose.model<ProductDoc>("Product", ProductSchema);

export { ProductDoc };
export { UserModel };
