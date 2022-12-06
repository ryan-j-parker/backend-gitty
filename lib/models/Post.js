const pool = require('../utils/pool');

module.exports = class Post {
  id;
  post;

  constructor(row) {
    this.id = row.id;
    this.post = row.post;
  }

  static async getAll() {
    const { rows } = await pool.query(
      `
            SELECT * FROM posts
            `
    );
    return new Post(rows[0]);
  }
};
