const User = require("./User");
const BlogPosts = require("./BlogPosts");

User.hasMany(BlogPosts, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

BlogPosts.belongsTo(User, {
  foreignKey: "user_id",
});

module.exports = { User, BlogPosts };
