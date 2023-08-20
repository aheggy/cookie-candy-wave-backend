DROP DATABASE IF EXISTS products_db;
CREATE DATABASE products_db;

\c products_db;

CREATE TABLE cookie_candy (
    id SERIAL PRIMARY KEY,
    product_name TEXT,
    product_type TEXT,
    calories INTEGER,
    price Numeric,
    url TEXT,
    last_updated TIMESTAMP,
    is_favorite BOOLEAN
);