import express from "express";

import { signIn, createUser } from "../controllers/users.js";

const router = express.Router();

router.post("/register", createUser);
router.post("/signin", signIn);

export default router;
