import { Document, Schema } from "mongoose";
import defaultType from "../utils/defaultType";

require("dotenv").config();

export interface UserDoc extends Document {
  email: string;
  name: string;
  password: string;
  isAdmin: boolean;
}

const UserSchema = new Schema<UserDoc>({
  email: defaultType.email,
  name: defaultType.string,
  password: defaultType.password
});

export default UserSchema;
