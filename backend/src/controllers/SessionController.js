const connection = require("../database/connection");

module.exports = {
  async create(request, response) {
    const { id } = request.body;

    const vanessa = await connection("vanessa")
      .where("id", id)
      .select("name")
      .first();

    if(!vanessa) {
      return response.status(400).json({ error: "The ID is not registered" });
    }

    return response.json(vanessa);
  },
}