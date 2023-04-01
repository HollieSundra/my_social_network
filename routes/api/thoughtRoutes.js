const router = require('express').Router();

const {
  getThoughts,
  getSingleThought,
  createThought,
  updateThought,
  removeThought,
  createReaction,
  removeReaction,
} = require('../../controllers/thoughtController');

// /api/thoughts
router.route('/').get(getThoughts).post(createThought);

router.route('/:thoughtId')
.get(getSingleThought)
.put(updateThought)
.delete(removeThought);

router.route('thoughts/:thoughtId/reactions')
.post(createReaction)
.delete(removeReaction);

module.exports = router;
