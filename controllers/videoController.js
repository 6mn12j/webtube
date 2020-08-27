export const home=(req, res) => res.render("home"); //home controller
export const search = (req, res) => res.send("SERACH");
export const videos =(reqm ,res) =>res.send("Videos");
export const upload =(reqm ,res) =>res.send("Upload");
export const videoDetail =(reqm ,res) =>res.send("Video Detail");
export const editVideo =(reqm ,res) =>res.send("Edit Video");
export const deleteVideo =(reqm ,res) =>res.send("Delete Video");