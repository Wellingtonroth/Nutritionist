const connection = require("../database/connection");

module.exports = {
  async index(request, response) {
    const { page = 1 } = request.query;

    const [count] = await connection("posts").count();
    
    const posts = await connection("posts")
    .join("vanessa", "vanessa.id", "=", "posts.vanessa_id")
    .limit(5)
    .offset((page - 1) * 5)
    .select([
      "posts.*",
      "vanessa.name",
      "vanessa.email",
      "vanessa.whatsapp",
      "vanessa.city",
      "vanessa.uf"
    ]);

  response.header("X-Total-Count", count["count(*)"])

    return response.json(posts);
  },

  async create(request, response) {
    const { title, description } = request.body;
    const vanessa_id = request.headers.authorization;

    const [id] = await connection("posts").insert({
      title,
      description,
      vanessa_id,
    });

    return response.json({ id });
  },

  async delete(request, response) {
    const { id } = request.params;
    const vanessa_id = request.headers.authorization;

    const posts = await connection("posts")
      .where("id", id)
      .select("vanessa_id")
      .first();

      if(posts.vanessa_id !== vanessa_id) {
        return response.status(401).json({ error: "Operation not permitted." });
      }

      await connection("posts").where("id", id).delete();

      return response.status(204).send();
  }
};