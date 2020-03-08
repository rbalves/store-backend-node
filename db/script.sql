CREATE DATABASE store;
\c store;
CREATE SEQUENCE product_id_seq;
CREATE TABLE product
(
    id integer NOT NULL default nextval('product_id_seq'::regclass),
    name text NOT NULL,
    price numeric NOT NULL,
    PRIMARY KEY (id)
);
