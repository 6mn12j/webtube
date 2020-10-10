import multer from "multer";
import routes from "./routes";

const multerVideo = multer({ dest: "uploads/videos/" });

export const localsMiddleware = (req, res, next) => {
  res.locals.siteName = "WeTube";
  res.locals.routes = routes;
  //fake login info
  res.locals.user = req.user || null;
  console.log(req.user);
  next();
};

//locals에 있는 건 템플릿에서 변수명 처럼 존재

export const uploadVideo = multerVideo.single("videoFile");
