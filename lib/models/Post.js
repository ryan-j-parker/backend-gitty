const pool = require('../utils/pool');

module.exports = class Post {
  id;
  postbody;

  constructor(row) {
    this.id = row.id;
    this.postbody = row.postbody;
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
        INSERT INTO posts (postbody)
        VALUES ($1)
        RETURNING *
        `,
      [newPost.postbody]
    );
    return new Post(rows[0]);
  }
};
