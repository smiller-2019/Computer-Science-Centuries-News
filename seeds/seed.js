const sequelize = require("../config/connection");
const { User, BlogPosts } = require("../models");

const userData = require("./userData.json");
const blogPostsData = require("./blogPostsData.json");

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const blogPost of blogPostsData) {
    await BlogPosts.create({
      ...blogPost,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  process.exit(0);
};

seedDatabase();
