import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import { localsMiddleware } from "./middlewares";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";
import globalRouter from "./routers/globalRouter";
import routes from "./routes"
//import는 알파벳 순으로 

const app = express(); //app변수에 express를 실행

//middleware
app.use(helmet());
app.set("view engine","pug") //view 엔진을 pug 확장자로 정해준다.
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true})); //form
app.use(morgan("dev"));

app.use(localsMiddleware)

app.use(routes.home, globalRouter);
app.use(routes.users, userRouter);
app.use(routes.videos, videoRouter);


export default app;