// const jwt=require("jsonwebtoken")
// const validateUser = (req, res, next) => {
//     // authorization cookie?
//     // token ? valid ?
//     // req.user = decoded data
//     // next()
//     try {
//         // 1. Get token from cookies
//         const token = req.cookies?.authorization;
//         if (!token)
//         {
//             return res.status(401).json({
//                 success: false,
//                 message: "Unauthorized: No token provided"
//             });
//         }
//         // 2. Verify token
//         const decoded = jwt.verify(token, process.env.JWT_SECRET);

//         // 3. Attach user data to request
//         req.user = decoded;

//         // 4. Move to next middleware/controller
//         next();
//     }
//     catch (err)
//     {
//         return res.status(401).json({
//             success: false,
//             message: "Unauthorized: No token provided"
//         });
//     }
// };

// module.exports = { validateUser };



const jwt = require("jsonwebtoken");

const validateUser = (req, res, next) => {
    const { authorization } = req.cookies || {}; // "Bearer ey.xa.asd"
    if (!authorization) {
        res.status(401).json({
            success: false,
            message: "Invalid token - 1!",
        });
        return;
    }
    const [_, token] = authorization.includes("Bearer%20") ? authorization.split("%20") : authorization.split(" ");
    if (!token) {
        res.status(401).json({
            success: false,
            message: "Invalid token - 2!",
        });
        return;
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, data) => {
        if (err) {
            console.log("Auth error -->", err);
            res.status(401).json({
                success: false,
                message: "Invalid Token - 3",
            });
        } else {
            console.log("Auth success -->", data);
            req.user = data;
            next();
        }
    });
};

module.exports = { validateUser };