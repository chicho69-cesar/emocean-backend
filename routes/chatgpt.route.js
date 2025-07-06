import { Router } from 'express';
import { callChatGpt, dailySuggest, testSuggest } from '../controllers/chatgpt.controller.js';

const router = Router();

router.post('/chatgpt', callChatGpt);
router.post('/daily', dailySuggest);
router.post('/feeling', testSuggest);

export default router;
