const router = require('express').Router();
const {
  createThought,
  getThoughts,
  getSingleThought,
} = require('../../controllers/thoughtController.js');

router.route('/').get(getThoughts).post(createThought);

router.route('/:thoughtId').get(getSingleThought);

module.exports = router;