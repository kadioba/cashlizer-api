--
-- PostgreSQL database dump
--

-- Dumped from database version 14.8 (Ubuntu 14.8-0ubuntu0.22.04.1)
-- Dumped by pg_dump version 14.8 (Ubuntu 14.8-0ubuntu0.22.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: users; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.users (
    id integer NOT NULL,
    name character varying(128) NOT NULL,
    cpf character varying(11) NOT NULL,
    email character varying(128) NOT NULL,
    cellphone character varying(11) NOT NULL,
    created_at date DEFAULT now()
);


--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.users VALUES (3, 'Ana Oliveira', '22222222222', 'anaoliveira@gmail.com', '45999765432', '2023-06-29');
INSERT INTO public.users VALUES (4, 'Carlos Alberto', '33333333333', 'carlosalberto@gmail.com', '45999654321', '2023-06-29');
INSERT INTO public.users VALUES (5, 'Maria Santos', '44444444444', 'mariasantos@gmail.com', '45999543210', '2023-06-29');
INSERT INTO public.users VALUES (6, 'Pedro Rocha', '55555555555', 'pedrorocha@gmail.com', '45999432109', '2023-06-29');
INSERT INTO public.users VALUES (7, 'Juliana Souza', '66666666666', 'julianasouza@gmail.com', '45999321098', '2023-06-29');
INSERT INTO public.users VALUES (8, 'Luiz Felipe', '77777777777', 'luizfelipe@gmail.com', '45999210987', '2023-06-29');
INSERT INTO public.users VALUES (9, 'Patricia Moraes', '88888888888', 'patriciamoraes@gmail.com', '45999109876', '2023-06-29');
INSERT INTO public.users VALUES (10, 'Guilherme Castro', '99999999999', 'guilhermecastro@gmail.com', '45999098765', '2023-06-29');
INSERT INTO public.users VALUES (11, 'Marta Almeida', '12345678910', 'martaalmeida@gmail.com', '45998987654', '2023-06-29');
INSERT INTO public.users VALUES (12, 'Ricardo Mendes', '10987654321', 'ricardomendes@gmail.com', '45998876543', '2023-06-29');
INSERT INTO public.users VALUES (13, 'Isabela Pereira', '12121212121', 'isabelapereira@gmail.com', '45998765432', '2023-06-29');
INSERT INTO public.users VALUES (14, 'Gustavo Ribeiro', '13131313131', 'gustavoribeiro@gmail.com', '45998654321', '2023-06-29');
INSERT INTO public.users VALUES (15, 'Luciana Costa', '14141414141', 'lucianacosta@gmail.com', '45998543210', '2023-06-29');
INSERT INTO public.users VALUES (16, 'Roberto Andrade', '15151515151', 'robertoandrade@gmail.com', '45998432109', '2023-06-29');
INSERT INTO public.users VALUES (17, 'Renata Barros', '16161616161', 'renatabarros@gmail.com', '45998321098', '2023-06-29');
INSERT INTO public.users VALUES (18, 'Leonardo Peixoto', '17171717171', 'leonardopeixoto@gmail.com', '45998210987', '2023-06-29');
INSERT INTO public.users VALUES (19, 'Beatriz Teixeira', '18181818181', 'beatrizteixeira@gmail.com', '45998109876', '2023-06-29');
INSERT INTO public.users VALUES (20, 'Antonio Pinto', '19191919191', 'antoniopinto@gmail.com', '45998098765', '2023-06-29');
INSERT INTO public.users VALUES (21, 'Fernanda Dias', '20202020202', 'fernandadias@gmail.com', '45997987654', '2023-06-29');
INSERT INTO public.users VALUES (22, 'Rafael Alencar', '21212121212', 'rafaelalencar@gmail.com', '45997123456', '2023-06-30');


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.users_id_seq', 22, true);


--
-- Name: users users_cellphone_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_cellphone_key UNIQUE (cellphone);


--
-- Name: users users_cpf_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_cpf_key UNIQUE (cpf);


--
-- Name: users users_email_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key UNIQUE (email);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

