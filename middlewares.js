import routes from "./routes";

export const localsMiddleware = (req, res, next) =>{
    res.locals.siteName="WeTube";
    res.locals.routes = routes;
    next()
};

//locals에 있는 건 템플릿에서 변수명 처럼 존재