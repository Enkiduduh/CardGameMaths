INSERT INTO card_type (id, name) VALUES (1, "Action");
INSERT INTO card_type (id, name) VALUES (2, "Joker");
INSERT INTO card_type (id, name) VALUES (3, "Boss");
INSERT INTO card_type (id, name) VALUES (4, "Hero");

INSERT INTO symbol_ref (code, label) VALUES ("+", "Addition");
INSERT INTO symbol_ref (code, label) VALUES ("-", "Soustraction");
INSERT INTO symbol_ref (code, label) VALUES ("*", "Multiplication");
INSERT INTO symbol_ref (code, label) VALUES ("/", "Division");

INSERT INTO category_ref (id, name) VALUES (1, "Addition");
INSERT INTO category_ref (id, name) VALUES (2, "Soustraction");
INSERT INTO category_ref (id, name) VALUES (3, "Multiplication");
INSERT INTO category_ref (id, name) VALUES (4, "Division");
INSERT INTO category_ref (id, name) VALUES (5, "Boss");
INSERT INTO category_ref (id, name) VALUES (6, "Hero");

INSERT INTO rule_ref (id, name) VALUES (1, "Le plus rapide à calculer reprend 1 Cristal de sa Défausse et le met dans son Coffre.");
INSERT INTO rule_ref (id, name) VALUES (2, "Celui qui perd le duel défausse 1 crystal");
INSERT INTO rule_ref (id, name) VALUES (3, "Celui qui perd le duel défausse 2 crystaux");
INSERT INTO rule_ref (id, name) VALUES (4, "Celui qui perd le duel défausse 3 crystaux");
INSERT INTO rule_ref (id, name) VALUES (5, "Celui qui perd le duel défausse 4 crystaux");
INSERT INTO rule_ref (id, name) VALUES (6, "Celui qui remporte le duel débute le prochain tour. Celui qui perd le duel défausse 2 crystaux.");
INSERT INTO rule_ref (id, name) VALUES (7, "Celui qui remporte le duel récupère 1 crystal");
INSERT INTO rule_ref (id, name) VALUES (8, "Celui qui remporte le duel récupère 2 crystaux");
INSERT INTO rule_ref (id, name) VALUES (9, "Celui qui remporte le duel récupère 3 crystaux");
INSERT INTO rule_ref (id, name) VALUES (10, "Celui qui remporte le duel récupère 4 crystaux");
INSERT INTO rule_ref (id, name) VALUES (11, "Le bonus ou malus de la prochaine manche est multiplié par 2.");
INSERT INTO rule_ref (id, name) VALUES (12, "Celui qui perd le duel défausse 1 crystal");
INSERT INTO rule_ref (id, name) VALUES (13, "Celui qui perd le duel défausse 2 crystaux");
INSERT INTO rule_ref (id, name) VALUES (14, "Celui qui perd le duel défausse 3 crystaux");
INSERT INTO rule_ref (id, name) VALUES (15, "Celui qui perd le duel défausse 4 crystaux");
INSERT INTO rule_ref (id, name) VALUES (16, "Celui qui remporte le duel débute le prochain tour. Celui qui perd le duel défausse 2 crystaux.");
INSERT INTO rule_ref (id, name) VALUES (17, "Celui qui remporte le duel récupère 1 crystal");
INSERT INTO rule_ref (id, name) VALUES (18, "Celui qui remporte le duel récupère 2 crystaux");
INSERT INTO rule_ref (id, name) VALUES (19, "Celui qui remporte le duel récupère 3 crystaux");
INSERT INTO rule_ref (id, name) VALUES (20, "Celui qui remporte le duel récupère 4 crystaux");
INSERT INTO rule_ref (id, name) VALUES (21, "Le bonus ou malus de la prochaine manche est multiplié par 2.");
INSERT INTO rule_ref (id, name) VALUES (22, "Celui qui perd le duel défausse 1 crystal");
INSERT INTO rule_ref (id, name) VALUES (23, "Celui qui perd le duel défausse 2 crystaux");
INSERT INTO rule_ref (id, name) VALUES (24, "Celui qui perd le duel défausse 3 crystaux");
INSERT INTO rule_ref (id, name) VALUES (25, "Celui qui perd le duel défausse 4 crystaux");
INSERT INTO rule_ref (id, name) VALUES (26, "Celui qui remporte le duel débute le prochain tour. Celui qui perd le duel défausse 2 crystaux.");
INSERT INTO rule_ref (id, name) VALUES (27, "Celui qui remporte le duel récupère 1 crystal");
INSERT INTO rule_ref (id, name) VALUES (28, "Celui qui remporte le duel récupère 2 crystaux");
INSERT INTO rule_ref (id, name) VALUES (29, "Celui qui remporte le duel récupère 3 crystaux");
INSERT INTO rule_ref (id, name) VALUES (30, "Celui qui remporte le duel récupère 4 crystaux");
INSERT INTO rule_ref (id, name) VALUES (31, "Le bonus ou malus de la prochaine manche est multiplié par 2.");
INSERT INTO rule_ref (id, name) VALUES (32, "Celui qui perd le duel défausse 1 crystal");
INSERT INTO rule_ref (id, name) VALUES (33, "Celui qui perd le duel défausse 2 crystaux");
INSERT INTO rule_ref (id, name) VALUES (34, "Celui qui perd le duel défausse 3 crystaux");
INSERT INTO rule_ref (id, name) VALUES (35, "Celui qui perd le duel défausse 4 crystaux");
INSERT INTO rule_ref (id, name) VALUES (36, "Celui qui remporte le duel débute le prochain tour. Celui qui perd le duel défausse 2 crystaux.");
INSERT INTO rule_ref (id, name) VALUES (37, "Celui qui remporte le duel récupère 1 crystal");
INSERT INTO rule_ref (id, name) VALUES (38, "Celui qui remporte le duel récupère 2 crystaux");
INSERT INTO rule_ref (id, name) VALUES (39, "Celui qui remporte le duel récupère 3 crystaux");
INSERT INTO rule_ref (id, name) VALUES (40, "Celui qui remporte le duel récupère 4 crystaux");

INSERT INTO collection_ref (id, name) VALUES (1, "1ere Edition");

INSERT INTO difficulty_ref (id, power) VALUES (1, 1);
INSERT INTO difficulty_ref (id, power) VALUES (2, 2);
INSERT INTO difficulty_ref (id, power) VALUES (3, 3);
INSERT INTO difficulty_ref (id, power) VALUES (4, 4);

INSERT INTO card (code, image_url, name_fr, rule_id, energy, cost, type_id, difficulty_id, symbol_code, category_id, collection_id)
VALUES
  ('CARD-1', '/assets/card-1.png', "Carte 1", 1 , 1, 5, 1, 2, '+', 1, 1),
  ('CARD-2', '/assets/card-2.png', "Carte 2", 1 , 1, 5, 1, 1, '+', 1, 1),
  ('CARD-3', '/assets/card-3.png', "Carte 3", 2 , 1, 10, 1, 2, '+', 1, 1),
  ('CARD-4', '/assets/card-4.png', "Carte 4", 3 , 2, 15, 1, 3, '+', 1, 1),
  ('CARD-5', '/assets/card-5.png', "Carte 5", 1 , 1, 10, 1, 1, '+', 1, 1),
  ('CARD-6', '/assets/card-6.png', "Carte 6", 4 , 1, 10, 1, 4, '-', 2, 1),
  ('CARD-7', '/assets/card-7.png', "Carte 7", 2 , 1, 10, 1, 2, '-', 2, 1),
  ('CARD-8', '/assets/card-8.png', "Carte 8", 1 , 1, 10, 1, 4, '+', 1, 1),
  ('CARD-9', '/assets/card-9.png', "Carte 9", 2 , 1, 10, 1, 2, '+', 1, 1),
  ('CARD-10', '/assets/card-10.png', "Carte 10", 3 , 1, 10, 1, 1, '+', 1, 1),
  ('CARD-11', '/assets/card-11.png', "Carte 11", 2 , 1, 10, 1, 2, '+', 1, 1),
  ('CARD-12', '/assets/card-12.png', "Carte 12", 3 , 1, 10, 1, 1, '-', 2, 1),
  ('CARD-13', '/assets/card-13.png', "Carte 13", 5 , 1, 10, 1, 3, '*', 3, 1),
  ('CARD-14', '/assets/card-14.png', "Carte 14", 4 , 1, 10, 1, 2, '+', 1, 1),
  ('CARD-15', '/assets/card-15.png', "Carte 15", 6 , 1, 10, 1, 3, '*', 3, 1);
