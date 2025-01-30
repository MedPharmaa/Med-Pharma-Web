import express from 'express';
import pkg from '../controllers/adminControllers.cjs';
const { bookLabTest , adminLab  } = pkg;

const router = express.Router();



router.get("/adminLab" , adminLab);
router.post("/bookLabTest", bookLabTest);



export default router;