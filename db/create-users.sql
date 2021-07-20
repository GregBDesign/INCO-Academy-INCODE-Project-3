DROP TABLE IF EXISTS users;

CREATE TABLE IF NOT EXISTS users (
    user_id SERIAL NOT NULL,
    email character varying(200) NOT NULL,
    first_name character varying(100) NOT NULL,
    last_name character varying(100) NOT NULL,
    password character varying(300),
    CONSTRAINT users_pkey PRIMARY KEY (user_id)
);