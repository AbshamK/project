const adminAuth = (req, res, next) => {
    console.log("Admin Auth is checking......");
    const token = "xyz";
    const isAdminAuth = token === "xyz";
    if (!isAdminAuth) {
        res.status(401).send("Unauthorized requests...");
    } else {
        next();
    }
};

module.exports =
{
    adminAuth,
};