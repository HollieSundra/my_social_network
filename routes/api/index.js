const router = require('express').Router();
const userRoutes = require('./userRoutes');
const thoughtRoutes = require('./thoughtRoutes');
//http://localhost:3001/api/users
//http://localhost:3001/api/thoughts
router.use('/users', userRoutes);
router.use('/thoughts', thoughtRoutes);

module.exports = router;
