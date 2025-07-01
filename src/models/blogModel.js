import mongoose from 'mongoose'

const blogSchema = new mongoose.Schema({

});

const Blog = mongoose.models.Blog || mongoose.model("Blog", blogSchema)

export default /** @type {import("mongoose").Model<import("mongoose").Document>} */ (
  Blog
);
  