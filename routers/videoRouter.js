import express from "express";
import routes from "../routes";
import { 
        videoDetail, 
        deleteVideo, 
        postUpload,
        getUpload,
        getEditVideo,
        postEditVideo
 } from "../controllers/videoController";
import { uploadVideo} from "../middlewares";

const videoRouter = express.Router();

// Upload
videoRouter.get(routes.upload, getUpload);
videoRouter.post(routes.upload, uploadVideo, postUpload);

// Video Detail
videoRouter.get(routes.videoDetail(), videoDetail);
videoRouter.post(routes.editVideo(), postEditVideo);

// Edit Video
videoRouter.get(routes.editVideo(), getEditVideo);

// Delete Video
videoRouter.get(routes.deleteVideo(), deleteVideo);

export default videoRouter;