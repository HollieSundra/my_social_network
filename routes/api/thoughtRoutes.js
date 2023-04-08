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

//http://localhost:3001/api/thoughts/
router.route('/').get(getThoughts).post(createThought);

//http://localhost:3001/api/:thoughtId
router.route('/:thoughtId')
.get(getSingleThought)
.put(updateThought)
.delete(removeThought);

//http://localhost:3001/api/thoughts/:thoughtId/reactions
router.route('/thoughts/:thoughtId/reactions')
.post(createReaction);

router.route('/thoughts/:thoughtId/reactions/:reactionId')
.delete(removeReaction);


module.exports = router;
