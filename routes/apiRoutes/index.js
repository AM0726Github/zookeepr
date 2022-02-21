const router = require('express').Router();
const animalRoutes = require('../apiRoutes/animalRoutes');
const zookeprRoutes = require('../apiRoutes/zookeeperRoutes');

router.use(zookeprRoutes);
router.use(animalRoutes);

module.exports = router;