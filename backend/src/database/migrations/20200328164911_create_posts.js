
exports.up = function(knex) {
  return knex.schema.createTable("posts", function (table) {
    table.increments();

    table.string("title").notNullable();
    table.string("description").notNullable();

    table.string("vanessa_id").notNullable();
    //chave estrangeira
    table.foreign("vanessa_id").references("id").inTable("vanessa");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("posts");
};
