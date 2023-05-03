import express from 'express';  
const router = express.Router(); 
import { authentificate, } from '../controllers/userController';
// Authentication and confirmation of users
router.post('/login', authentificate);

export default router;