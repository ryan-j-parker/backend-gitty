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
    return rows.map((row) => new Post(row));
  }

  static async insert(newPost) {
    const { rows } = await pool.query(
      `
        INSERT INTO posts (post)
        VALUES ($1)
        RETURNING *
        `,
      [newPost.post]
    );
    return new Post(rows[0]);
  }
};
