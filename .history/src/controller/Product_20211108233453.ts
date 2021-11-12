import { Request, Response } from 'express'
import { ProductModel } from '../models'
require('dotenv').config()

const secretKey: any = process.env.TOKEN_SECRET_KEY

export default class UserCallback {
  static async get(req: Request, res: Response) {
    try {
      const payload = await ProductModel.find()
      return res.json({ success: true, data: payload })
    } catch (err) {
      res.status(500).json({ error: err })
    }
  }

  static async create(req: Request, res: Response) {
    try {
      const { name, description, image, show } = req.body

      const payload = await ProductModel.create({ name, description, image, show })

      return res.json({ success: true, data: payload })
    } catch (err) {
      res.status(500).json({ error: err })
    }
  }

  static async update(req: Request, res: Response) {
    try {
      //   const { id } = req.params
      const { description, image, isActive, id } = req.body

      const payload = await ProductModel.findOneAndUpdate(
        { _id: id },
        { description, image, isActive, id }
      )

      return res.json({ success: true, data: payload })
    } catch (err) {
      res.status(500).json({ error: err })
    }
  }

  static async delete(req: Request, res: Response) {
    try {
      const productID = req.params.id
      const payload = await ProductModel.deleteOne({ _id: productID })
      return { success: true, data: payload }
    } catch (err) {
      res.status(500).json({ error: err })
    }
  }
}
