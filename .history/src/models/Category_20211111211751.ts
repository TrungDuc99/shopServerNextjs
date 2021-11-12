import { Document, Schema } from 'mongoose'
import defaultType from '../utils/defaultType'

require('dotenv').config()

export interface CategoryDoc extends Document {
  id: string
  nameCategory: string
  product_id: String
}

const CategorySchema = new Schema<CategoryDoc>({
  id: defaultType.string,
  nameCategory: defaultType.string,
  product_id: defaultType.string,
})

export default CategorySchema
