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

INSERT INTO collection_ref (id, name) VALUES (1, "1ere Edition");

INSERT INTO rarity_ref (id, name) VALUES (1, "Commune");
INSERT INTO rarity_ref (id, name) VALUES (2, "Rare");
INSERT INTO rarity_ref (id, name) VALUES (3, "Super Rare");
INSERT INTO rarity_ref (id, name) VALUES (4, "Ultra Rare");

INSERT INTO card (code, image_url, name_fr, rule_fr, energy, cost, type_id, rarity_id, symbol_code, category_id, collection_id)
VALUES
  ('CARD-1', '/assets/card-1.png', "Carte 1", "Le joueur qui remporte la manche récupère un crystal dans la défausse." , 1, 5, 1, 1, '+', 1, 1),
  ('CARD-2', '/assets/card-2.png', "Carte 2", "Le joueur qui perd la manche doit défausser un deuxième crystal." , 1, 5, 1, 1, '+', 1, 1),
  ('CARD-3', '/assets/card-3.png', "Carte 3", "-" , 1, 10, 1, 1, '+', 1, 1),
  ('CARD-4', '/assets/card-4.png', "Carte 4", "Le premier joueur qui trouve la réponse doit la multiplier par 2. S'il trouve, il récupère 2 crystaux, sinon, il dépose 2 crystaux dans la défausse." , 2, 15, 1, 1, '+', 1, 1);
