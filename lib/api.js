'use strict'

const WhiskyType = require('./whisky');
const express = require('express');

module.exports = db => {
  const router = express.Router()

  const wrapAsync = handler => (req, res) => handler(req)
    .then(result => res.json(result))
    .catch(error => res.status(500).json({ error: error.message }))

  router.get('/', wrapAsync(async function(req) {
    return db.collection('Whisky').find().sort({ createdAt: -1 }).toArray()
  }))

  router.get('/viewdetail/:id', wrapAsync(async function(req) {
    return db.collection('Whisky').find({_id: req.params.id}).toArray()
  }))

  router.post('/', wrapAsync(async function(req) {
    const res = await db.collection('Whisky').insertOne(req.body);

    return { res }
  }))

  router.patch('/update/:id', wrapAsync(async function(req) {
    console.log('id: ', req.params.id);
    console.log('req.body: ', req.body);
    const result = await db.collection('Whisky').findOneAndUpdate({
      _id: req.params.id,
    }, {$set: req.body}, {returnOriginal: false})
    console.log('result: ',result);
    return { result }
  }))

  router.delete('/:id', wrapAsync(async function(req) {
    const { result } = await db.collection('Whisky').deleteOne({
      _id: req.params.id
    })
    return { result }
  }))

  return router
}