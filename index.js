import mongoose from 'mongoose';
import { Blog } from './model/Blog.js';

mongoose
  .connect('mongodb://127.0.0.1:27017/local', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.error('Error connecting to MongoDB', error));

const article = new Blog({
  title: 'Awesome Post!',
  slug: 'awesome-post',
  published: true,
  content: 'This is the best post ever',
  tags: ['featured', 'announcement'],
});

// Insert the article in our MongoDB database
await article.save();
