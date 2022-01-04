const jwt = require("jsonwebtoken");

const { response } = require("../helpers");

module.exports = (req, res, next) => {
  try {
    //jwt.verify(req.headers["x-access-token"], process.env.SECRET);
    const token = req.headers.authorization;
    if(token != process.env.SECRET){
      console.log("unauthorized access token")
      return response(res, { status: false, message: "Unauthorized Access" }, 401);

    }
    console.log("authorized access token")
    return response("authorized access")

  } catch (error) {
    console.log("umauthorized access token")
    return response(res, { status: false, message: "Unauthorized Access" }, 401);
  }
  next();
};
