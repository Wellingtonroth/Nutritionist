const connection = require("../database/connection");

module.exports = {
  async index(request, response) {
    const vanessa_id = request.headers.authorization;

    const posts = await connection("posts")
      .where("vanessa_id", vanessa_id)
      .select("*")
      
    return response.json(posts);
  },
}