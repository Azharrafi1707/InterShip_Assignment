import JWT from "jsonwebtoken";
export const requireSignIn = async (req, res, next) => {
    try {
        // console.log(req.token);
        const decode =JWT.verify(
          req.headers.authorization,
          process.env.JWT_SECRET
        );
        req.user = decode;
        next();
      } catch (error) {
        console.log(error);
        console.log("eeror aa gaya in require sign in me");
      }
  };