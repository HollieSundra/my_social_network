const router = require('express').Router();
const apiRoutes = require('./api');
// Import all API routes from /api/index.js
//http://localhost:3001/api
router.use('/api', apiRoutes);

router.use((req, res) => res.send('Wrong route!'));

module.exports = router;
