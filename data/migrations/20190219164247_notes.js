
exports.up = function(knex, Promise) {
    //DB CHANGE
      return knex.schema.createTable('notes',
          table => {
              table.increments()
              table.string('title').notNullable();
              table.string('content', 300).notNullable();
          });
  };
  
  exports.down = function(knex, Promise) {
    //ROLLBACK DB
      return knex.schema.dropTableIfExists('notes');
  };
  