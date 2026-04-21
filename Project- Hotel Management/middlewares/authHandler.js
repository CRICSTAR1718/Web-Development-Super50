const jwt=require("jsonwebtokenn")
const validateUser = (req, res, next) => {
    // authorization cookie?
    // token ? valid ?
    // req.user = decoded data
    // next()
    try {
        // 1. Get token from cookies
        const token = req.cookies?.authorization;
        if (!token)
        {
            return res.status(401).json({
                success: false,
                message: "Unauthorized: No token provided"
            });
        }
        // 2. Verify token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // 3. Attach user data to request
        req.user = decoded;

        // 4. Move to next middleware/controller
        next();
    }
    catch (err)
    {
        return res.status(401).json({
            success: false,
            message: "Unauthorized: No token provided"
        });
    }
};

module.exports = { validateUser };