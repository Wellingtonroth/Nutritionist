const express = require("express");
const VanessaController = require("./controllers/VanessaController");
const PostController = require("./controllers/PostContollers");
const ProfileController = require("./controllers/ProfileController");
const SessionController = require("./controllers/SessionController");

const routes = express.Router();

routes.post("/sessions", SessionController.create);

routes.get("/vanessa", VanessaController.index);
routes.post("/vanessa", VanessaController.create);

routes.get("/profile", ProfileController.index);

routes.get("/posts", PostController.index);
routes.post("/posts", PostController.create);
routes.delete("/posts/:id", PostController.delete);

module.exports = routes;