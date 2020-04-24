exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries and resets ids
    return knex('users')
      .truncate()
      .then(function() {
        return knex('users').insert([
          { username: "mbtest1", password: "test" },
          { username: "mbtest2", password: "test" },
          { username: "mbtest3", password: "test" },
        ]);
      });
  };
  