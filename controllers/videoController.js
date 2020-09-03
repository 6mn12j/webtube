import {videos} from "../db";
import routes from "../routes";

export const home=(req, res) => {
    res.render("home", {pageTitle: "Home",videos});
};

export const search = (req, res) => {
    //const searchingaBy = req.query.term;
    const {
        query : {term:searchingBy}
    } = req;

    res.render("search",{pageTitle: "Search",searchingBy:searchingBy, videos});

};

//export const videos =(req,res) =>res.render("Videos",{pageTitle: "Videos"});

export const getUpload =(req,res) =>res.render("upload",{pageTitle: "Upload"});
export const postUpload =(req,res) =>{
    cosnt ={
        body:{file,title,description}
        } = req;
        //To Do:Upload and save video
        res.redirect(routes.videoDetail(324393));
    };

export const videoDetail =(req,res) =>res.render("videoDetail",{pageTitle:"Video Detail"});

export const editVideo =(req,res) =>res.render("edit Video",{pageTitle: "Edit Video"});

export const deleteVideo =(req,res) =>res.render("deleteVideo",{pageTitle: "Delete Video"});

