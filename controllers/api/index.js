const router = require("express").Router();
const userRoutes = require("./userRoutes");
const blogPostsRoutes = require("./blogPostsRoutes");

router.use("/users", userRoutes);
router.use("/blogposts", blogPostsRoutes);

module.exports = router;
