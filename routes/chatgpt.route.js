const { Router } = require('express');
const { callChatGpt, dailySuggest, testSuggest } = require('../controllers/chatgpt.controller');

const router = Router();

router.post('/chatgpt', callChatGpt);
router.post('/daily', dailySuggest);
router.post('/feeling', testSuggest);

module.exports = router;
