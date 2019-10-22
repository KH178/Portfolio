const mongoose = require('mongoose');
const router = require('express').Router();
const Articles = require('../../models/Articles');

router.post('/', async (req, res, next) => {
    const { body } = req;
  if(!body.title) {
    return res.status(422).json({
      errors: {
        title: 'is required',
      },
    });
  }

  if(!body.author) {
    return res.status(422).json({
      errors: {
        author: 'is required',
      },
    });
  }

  if (!body.description) {
    return res.status(422).json({
      errors: {
        body: 'is required',
      },
    });
  }
  const finalArticle =await new Articles(body);
  return finalArticle.save()
      .then(() => res.json({
          article: finalArticle.toJSON()
      }))
      .catch(next);
  });

router.get('/', async (req, res, next) => {
  const page = parseInt(req.query.page) || 0;
  const limit = parseInt(req.query.limit) || 3;
  const count = await Articles.count();
  console.log(count);
  
  return await Articles.find()
    .sort({ createdAt: 'descending' })
    .skip(page * limit)
    .limit(limit)
    .then((articles) => res.json({  
      count: count,
      articles: articles.map(article => {
        return article.toJSON()
      })
    }))
    .catch(next);
  });

  
router.param('id', async (req, res, next, id) => {
  return await Articles.findById(id, (err, article) => {
    if(err) {
      return res.sendStatus(404);
    } else if(article) {
      req.article = article;
      return next();
    }
  }).catch(next);
});

router.get('/:id', async (req, res, next) => {
  try{
    return res.json({
      article: req.article.toJSON(),
    });
  }
  catch (e) {
    res.send('Not Found')
  }
});
  
router.patch('/:id', async (req, res, next) => {
  const { body } = req;
  res.send(body)
  if(typeof body.title !== 'undefined') {
    req.article.title = body.title;
  }

  if(typeof body.author !== 'undefined') {
    req.article.author = body.author;
  }

  if(typeof body.body !== 'undefined') {
    req.article.body = body.body;
  }

  return await req.article.save()
    .then(() => res.json({ article: req.article.toJSON() }))
    .catch(next);
});

router.delete('/:id', async (req, res, next) => {
  return await Articles.findByIdAndRemove(req.article._id)
    .then(() => res.sendStatus(200))
    .catch(next);
});

module.exports = router;