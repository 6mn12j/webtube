import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import { localsMiddleware } from "./middlewares";
import routes from "./routes";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";
import globalRouter from "./routers/globalRouter";

//import는 알파벳 순으로

const app = express();

//middleware
app.use(helmet({ contentSecurityPolicy: false }));
app.set("view engine", "pug"); //view 엔진을 pug 확장자로 정해준다.
app.use("/uploads", express.static("uploads"));
app.use("/static", express.static("static"));
// /static으로 접속요청하면 static 폴더로 가라
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//form
app.use(morgan("dev"));
app.use(localsMiddleware);

app.use(routes.home, globalRouter);
app.use(routes.users, userRouter);
app.use(routes.videos, videoRouter);

export default app;
