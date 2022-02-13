CREATE DATABASE gogo;

CREATE TABLE user(
  user_id SERIAL PRIMARY KEY,
  description VARCHAR(255)
  first_name VARCHAR(255),
  last_name VARCHAR(255),
  gender VARCHAR(6),
  date_of_birth TIMESTAMP
)