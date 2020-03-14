const router = require('express').Router();
const controllers = require('./controller');

router.get('/character-list', controllers.getCharacterList);

module.exports = router;