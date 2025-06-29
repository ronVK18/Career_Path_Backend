const express = require('express');
const router = express.Router();
const {upload} = require('../middlewares/upload'); // multer setup
const controller = require('../controllers/articlecontroller');



router.post('/', uploadFields, controller.createArticle);
router.get('/', controller.getAllArticles);
router.get('/:id', controller.getArticleById);

module.exports = router;
