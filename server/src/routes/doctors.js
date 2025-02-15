import express from 'express';
import { updateDoctor, getAllDoctors, getSingleDoctor, deleteDoctor, getDoctorProfile } from '../controllers/doctorControllers.js';

const router = express.Router();

import { authenticate, restrict } from '../auth/verifyToken.js';
import reviewRouter from './reviews.js';


// creating routes
router.use('/:doctorId/reviews', reviewRouter)

router.get("/", getAllDoctors);
router.get("/:id", getSingleDoctor);
router.put("/:id", authenticate, restrict(['doctor']), updateDoctor);
router.delete("/:id", authenticate, restrict(['doctor']), deleteDoctor);

router.get("/profile/me", authenticate, restrict(['doctor']), getDoctorProfile);


export default router;