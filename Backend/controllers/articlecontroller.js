const Article = require('../models/admin forms/article');
const uploadToCloudinary = require('../utills/cloudinaryUpload'); // custom helper
const fs = require('fs/promises');

// CREATE new article
exports.createArticle = async (req, res) => {
  try {
    const {
      title,
      expert,
      author,
      content,
      category,
      isFeatured,
    } = req.body;

    const thumbnail = req.files?.photo?.[0];

    let thumbnailurl = null;
   

    if (thumbnailurl) {
      thumbnailurl = await uploadToCloudinary(thumbnail.path, 'articles/photos', 'image');
    }

   

    const article = new Article({
      title,
      expert,
      author,
      content,
      category,
      isFeatured,
      thumbnail:thumbnailurl,

    });

    await article.save();
    res.status(201).json({ message: 'Article created successfully', article });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
};

// GET all articles
exports.getAllArticles = async (req, res) => {
  try {
    const articles = await Article.find().sort({ date: -1 });
    res.json(articles);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// GET single article by ID
exports.getArticleById = async (req, res) => {
  try {
    const article = await Article.findById(req.params.id);
    if (!article) return res.status(404).json({ error: 'Article not found' });
    res.json(article);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
