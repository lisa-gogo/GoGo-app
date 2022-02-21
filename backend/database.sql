CREATE DATABASE gogo;

CREATE TABLE users(
  user_id SERIAL PRIMARY KEY,
  first_name VARCHAR(255) NOT NULL,
  last_name VARCHAR(255) NOT NULL,
  gender VARCHAR(6) NOT NULL,
  job VARCHAR(255) NOT NULL,
  health_condition VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  UNIQUE (email)
  )
;