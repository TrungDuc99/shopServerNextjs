import { Document, Schema } from 'mongoose'
import defaultType from '../utils/defaultType'

require('dotenv').config()

export interface CategoryDoc extends Document {
  id: string
  nameCategory: string
  description: String
  image: string
}

const CategorySchema = new Schema<CategoryDoc>({
  id: defaultType.string,
  nameCategory: defaultType.string,
  description: defaultType.string,
  image: defaultType.string,
})

export default CategorySchema
