const router = require('express').Router();
const controllers = require('./controllers');

router.get('/character-list', controllers.getCharacterList);
router.post('/invite-user', controllers.inviteUser);

module.exports = router;