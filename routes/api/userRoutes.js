const router = require('express').Router();
const {
  getUser,
  getSingleUser,
  createUser,
  updateUser,
  removeUser,
  addFriend,
  removeFriend
} = require('../../controllers/userController');

// /api/user
router.route('/').get(getUser).post(createUser);
//http://localhost:3001/api/users/:userId
router.route('/:userId')
.get(getSingleUser)
.put(updateUser)
.delete(removeUser);
//http://localhost:3001/api/users/:userId/friends/:friendId
router.route('/:userId/friends/:friendId')
.post(addFriend)
.delete(removeFriend);

module.exports = router;
