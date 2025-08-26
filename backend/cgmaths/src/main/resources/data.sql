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

INSERT INTO card (code, image_url, energy, cost, type_id, rarity_id, symbol_code, category_id, collection_id)
VALUES
  ('CARD-1', '/assets/card-1.png', 1, 5, 1, 1, '+', 1, 1),
  ('CARD-2', '/assets/card-2.png', 1, 5, 1, 1, '+', 1, 1),
  ('CARD-3', '/assets/card-3.png', 1, 10, 1, 1, '+', 1, 1),
  ('CARD-4', '/assets/card-4.png', 2, 15, 1, 1, '+', 1, 1);

-- Référencer par code (pas besoin de connaître l’ID)
-- CARD 1
INSERT INTO card_name_i18n (card_id, lang, name)
SELECT c.id, 'fr', 'Chiffre 1' FROM card c WHERE c.code = 'CARD-1';
INSERT INTO card_name_i18n (card_id, lang, name)
SELECT c.id, 'en', 'Number 1' FROM card c WHERE c.code = 'CARD-1';

INSERT INTO card_rule_i18n (card_id, lang, rule)
SELECT c.id, 'fr', '-' FROM card c WHERE c.code = 'CARD-1';
INSERT INTO card_rule_i18n (card_id, lang, rule)
SELECT c.id, 'en', '-'   FROM card c WHERE c.code = 'CARD-1';
-- CARD 2
INSERT INTO card_name_i18n (card_id, lang, name)
SELECT c.id, 'fr', 'Chiffre 2' FROM card c WHERE c.code = 'CARD-2';
INSERT INTO card_name_i18n (card_id, lang, name)
SELECT c.id, 'en', 'Number 2' FROM card c WHERE c.code = 'CARD-2';

INSERT INTO card_rule_i18n (card_id, lang, rule)
SELECT c.id, 'fr', '-' FROM card c WHERE c.code = 'CARD-2';
INSERT INTO card_rule_i18n (card_id, lang, rule)
SELECT c.id, 'en', '-'   FROM card c WHERE c.code = 'CARD-2';
-- CARD 3
INSERT INTO card_name_i18n (card_id, lang, name)
SELECT c.id, 'fr', 'Chiffre 3' FROM card c WHERE c.code = 'CARD-3';
INSERT INTO card_name_i18n (card_id, lang, name)
SELECT c.id, 'en', 'Number 3' FROM card c WHERE c.code = 'CARD-3';

INSERT INTO card_rule_i18n (card_id, lang, rule)
SELECT c.id, 'fr', '-' FROM card c WHERE c.code = 'CARD-3';
INSERT INTO card_rule_i18n (card_id, lang, rule)
SELECT c.id, 'en', '-'   FROM card c WHERE c.code = 'CARD-3';
-- CARD 4
INSERT INTO card_name_i18n (card_id, lang, name)
SELECT c.id, 'fr', 'Chiffre 4' FROM card c WHERE c.code = 'CARD-4';
INSERT INTO card_name_i18n (card_id, lang, name)
SELECT c.id, 'en', 'Number 4' FROM card c WHERE c.code = 'CARD-4';

INSERT INTO card_rule_i18n (card_id, lang, rule)
SELECT c.id, 'fr', '-' FROM card c WHERE c.code = 'CARD-4';
INSERT INTO card_rule_i18n (card_id, lang, rule)
SELECT c.id, 'en', '-'   FROM card c WHERE c.code = 'CARD-4';

