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

INSERT INTO card (image_url, energy, cost, type_id, rarity_id, symbol_code, category_id, collection_id)
VALUES ("/assets/card1.png", 1, 5, 1, 1, '+', 1, 1);

INSERT INTO card (image_url, energy, cost, type_id, rarity_id, symbol_code, category_id, collection_id)
VALUES ("/assets/card2.png", 1, 5, 1, 1, '+', 1, 1);

INSERT INTO card (image_url, energy, cost, type_id, rarity_id, symbol_code, category_id, collection_id)
VALUES ("/assets/card3.png", 1, 10, 1, 1, '+', 1, 1);

INSERT INTO card (image_url, energy, cost, type_id, rarity_id, symbol_code, category_id, collection_id)
VALUES ("/assets/card4.png", 2, 15, 1, 1, '+', 1, 1);

INSERT INTO card_name_i18n (card_id, lang, name)
VALUES (1, 'fr', 'Chiffre 1'), (1, 'en', 'Number 1');

INSERT INTO card_name_i18n (card_id, lang, name)
VALUES (2, 'fr', 'Chiffre 2'), (2, 'en', 'Number 2');

INSERT INTO card_name_i18n (card_id, lang, name)
VALUES (3, 'fr', 'Chiffre 3'), (3, 'en', 'Number 3');

INSERT INTO card_name_i18n (card_id, lang, name)
VALUES (4, 'fr', 'Chiffre 4'), (4, 'en', 'Number 4');

INSERT INTO card_name_i18n (card_id, lang, name)
VALUES (5, 'fr', 'Addition +'), (5, 'en', 'Add +');

INSERT INTO card_rule_i18n (card_id, lang, rule)
VALUES (1, 'fr', 'Energie 1'), (1, 'en', 'Number 1');

INSERT INTO card_rule_i18n (card_id, lang, rule)
VALUES (2, 'fr', 'Energie 2'), (2, 'en', 'Number 2');

INSERT INTO card_rule_i18n (card_id, lang, rule)
VALUES (3, 'fr', 'Energie 3'), (3, 'en', 'Number 3');

INSERT INTO card_rule_i18n (card_id, lang, rule)
VALUES (4, 'fr', 'Energie 4'), (4, 'en', 'Number 4');

INSERT INTO card_rule_i18n (card_id, lang, rule)
VALUES (5, 'fr', 'Ajoute 2 energies'), (5, 'en', 'Add +');