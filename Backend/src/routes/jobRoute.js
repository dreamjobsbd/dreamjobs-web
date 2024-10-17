import express from "express";

import {
  CreateJobPost,
  GetJobPosts,
  GetSingleJobPostById,
  GetJobPostsByCategory
} from "../controllers/jobController.js";

//validation
import { validateJobPost } from "../validation/jobValidation.js";
import RunValidation from "../validation/index.js";
import {IsLoggedIn, IsAdmin} from "../middlewares/authMiddleware.js"


const jobRoute = express.Router();

jobRoute.post("/post-job",validateJobPost, RunValidation, IsLoggedIn, IsAdmin, CreateJobPost);
jobRoute.get("/all-job", GetJobPosts);
jobRoute.get("/:id", GetSingleJobPostById);
jobRoute.get("/category/:slug",GetJobPostsByCategory);




export default jobRoute;
