INSERT INTO card_type (id, name) VALUES (1, "Action");
INSERT INTO card_type (id, name) VALUES (2, "Joker");
INSERT INTO card_type (id, name) VALUES (3, "Boss");
INSERT INTO card_type (id, name) VALUES (4, "Hero");

INSERT INTO attribute_ref (id, label) VALUES (1, "+");
INSERT INTO attribute_ref (id, label) VALUES (2, "-");
INSERT INTO attribute_ref (id, label) VALUES (3, "*");
INSERT INTO attribute_ref (id, label) VALUES (4, "/");

INSERT INTO collection_ref (id, name) VALUES (1, "1ere Edition");

INSERT INTO rule_ref (id, name) VALUES (1, "Le plus rapide à calculer reprend {multiplicator} Cristal de sa Défausse et le met dans son Coffre.");
INSERT INTO rule_ref (id, name) VALUES (2, "Le plus rapide à calculer reprend {multiplicator} Action de sa Défausse et la met en dessous de son Deck.");

INSERT INTO boost_ref (id, name) VALUES (1, "boost");
INSERT INTO boost_ref (id, name) VALUES (2, "malus");
INSERT INTO boost_ref (id, name) VALUES (3, "conditional");


INSERT INTO card (code, image_url, name_fr, cost, multiplicator, rule_id, type_id, attribute_id, boost_id,collection_id)
VALUES
  ('CARD-1', '/assets/card-1.png', "Carte 1", 5, 1, 1, 1, 1, 1, 1),
  ('CARD-2', '/assets/card-2.png', "Carte 2", 5, 2, 2, 1, 1, 1, 1);
