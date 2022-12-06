-- Use this file to define your SQL tables
-- The SQL in this file will be executed when you run `npm run setup-db`
DROP TABLE IF EXISTS users CASCADE;

DROP TABLE IF EXISTS github_users CASCADE;

DROP TABLE IF EXISTS posts;

CREATE TABLE users (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  email VARCHAR,
  password_hash VARCHAR NOT NULL,
  first_name VARCHAR NOT NULL,
  last_name VARCHAR NOT NULL
);

CREATE TABLE github_users (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  login TEXT NOT NULL,
  email TEXT,
  avatar TEXT
);

CREATE TABLE posts (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  postbody VARCHAR(255)
);

INSERT INTO posts (postbody)
VALUES
('here is a post about posts'),
('here is another post, wonder what it is about?'),
('I do not yet know how to escape single quotes in SQL'),
('perhaps the answer I seek has been within me the entire time'),
('perchance perhaps peradventure possibly maybe mayhaps conceivably feasibly'),
('the greatest treasure is the friends we made along the way'),
('but also mostly the treasure is the treasure tbh');
