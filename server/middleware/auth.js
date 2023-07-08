import jwt from "jsonwebtoken";

const auth = async (res, req, next) => {
    try {
        const token = req.headers.Authorization.split(" ")[1]
        const isCostumAuth = token.length < 500;

        let decodedData;

        if (token && isCostumAuth) {
            decodedData = jwt.verify(token, "test");

            req.userId = decodedData?.id;
        } else {
            decodedData = jwt.decode(token);

            req.userId = decodedData?.sub;
        }

        next();
    } catch (error) {
        console.log(error)
    }
}
export default auth;