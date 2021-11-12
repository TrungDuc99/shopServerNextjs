import { Request, Response } from "express";
import { ProductModel } from "../models";
require("dotenv").config();

const secretKey: any = process.env.TOKEN_SECRET_KEY;

export default class UserCallback {
  static async get(req: Request, res: Response) {
    try {
      const payload = await ProductModel.find()
      return res.json({ success: true, data: payload });
    } catch (err) {
      res.status(500).json({ error: err });
    }
  }

  static async create(req: Request, res: Response) {
    try {
      const { email, name, password } = req.body

      const payload = await ProductModel.create({ email, name, password });

      return res.json({ success: true, data: payload });
    } catch (err) {
      res.status(500).json({ error: err });
    }
  }

  static async update(req: Request, res: Response) {
    try {
      const { id } = req.params
      const { name, password } = req.body

      const payload = await ProductModel.findOneAndUpdate({ email: id }, { name, password });

      return res.json({ success: true, data: payload });
    } catch (err) {
      res.status(500).json({ error: err });
    }
  }

  static async delete(req: Request, res: Response) {
    try {
      const userID = req.params.id;
      const payload = await ProductModel.deleteOne({ _id: userID });
      return { success: true, data: payload };
    } catch (err) {
      res.status(500).json({ error: err });
    }
  }
}
