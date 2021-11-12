import { Request, Response } from "express";
import { CategoryModel } from "../models";
require("dotenv").config();

const secretKey: any = process.env.TOKEN_SECRET_KEY;

export default class UserCallback {
  static async get(req: Request, res: Response) {
    try {
      const payload = await CategoryModel.find()
      return res.json({ success: true, data: payload });
    } catch (err) {
      res.status(500).json({ error: err });
    }
  }

  static async create(req: Request, res: Response) {
    try {
      const { nameCategory } = req.body

      const payload = await CategoryModel.create({ nameCategory});

      return res.json({ success: true, data: payload });
    } catch (err) {
      res.status(500).json({ error: err });
    }
  }

  static async update(req: Request, res: Response) {
    try {
      const { id } = req.params
      const { name, password } = req.body

      const payload = await CategoryModel.findOneAndUpdate({ email: id }, { name, password });

      return res.json({ success: true, data: payload });
    } catch (err) {
      res.status(500).json({ error: err });
    }
  }

  static async delete(req: Request, res: Response) {
    try {
      const userID = req.params.id;
      const payload = await CategoryModel.deleteOne({ _id: userID });
      return { success: true, data: payload };
    } catch (err) {
      res.status(500).json({ error: err });
    }
  }
}

// https://docs.mongodb.com/manual/crud/
// From Giảng viên 5 to Everyone 09:05 PM
// https://docs.mongodb.com/manual/reference/operator/aggregation/lookup/
// From Giảng viên 5 to Everyone 09:26 PM
// https://binance-docs.github.io/apidocs/spot/en/#change-log
