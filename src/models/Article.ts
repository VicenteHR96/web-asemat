import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IArticle extends Document {
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: 'caso-exito' | 'articulo';
  image?: string;
  tags: string[];
  published: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const ArticleSchema: Schema = new Schema(
  {
    title: {
      type: String,
      required: [true, 'El título es requerido'],
      trim: true,
      maxlength: [200, 'El título no puede exceder 200 caracteres'],
    },
    slug: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },
    excerpt: {
      type: String,
      required: [true, 'El extracto es requerido'],
      maxlength: [500, 'El extracto no puede exceder 500 caracteres'],
    },
    content: {
      type: String,
      required: [true, 'El contenido es requerido'],
    },
    category: {
      type: String,
      enum: ['caso-exito', 'articulo'],
      default: 'articulo',
    },
    image: {
      type: String,
      default: '',
    },
    tags: {
      type: [String],
      default: [],
    },
    published: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

ArticleSchema.pre('save', function (next) {
  if (this.isModified('title') && !this.slug) {
    this.slug = (this.title as string)
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');
  }
  next();
});

const Article: Model<IArticle> =
  mongoose.models.Article || mongoose.model<IArticle>('Article', ArticleSchema);

export default Article;
