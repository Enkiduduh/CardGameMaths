INSERT INTO card_type (id, name) VALUES (1, 'Action');
INSERT INTO card_type (id, name) VALUES (2, 'Joker');
INSERT INTO card_type (id, name) VALUES (3, 'Boss');
INSERT INTO card_type (id, name) VALUES (4, 'Hero');
INSERT INTO card_type (id, name) VALUES (5, 'Number');

INSERT INTO attribute_ref (id, name) VALUES (1, '+');
INSERT INTO attribute_ref (id, name) VALUES (2, '-');
INSERT INTO attribute_ref (id, name) VALUES (3, 'x');
INSERT INTO attribute_ref (id, name) VALUES (4, '÷');
INSERT INTO attribute_ref (id, name) VALUES (5, 'n');

INSERT INTO collection_ref (id, name) VALUES (1, '1ere Edition');

INSERT INTO rule_ref (id, name) VALUES (1, 'Celui qui remporte le duel gagne {0} {0,choice,1# cristal supplémentaire|1<cristaux supplémentaires}.');
INSERT INTO rule_ref (id, name) VALUES (2, 'Celui qui perd le duel perd {0} {0,choice,1# cristal supplémentaire|1<cristaux supplémentaires} .');
INSERT INTO rule_ref (id, name) VALUES (3, 'Celui qui remporte le duel voit son score multiplié par {0,choice,2#2|3#3|4#4}.');
INSERT INTO rule_ref (id, name) VALUES (4, 'Celui qui perd le duel voit son score divisé par {0,choice,2#2|3#3|4#4}.');

INSERT INTO rule_ref (id, name) VALUES (100, '{0,choice,1#+1 cristal|2#+2 cristaux|3#+3 cristaux} si victoire, {0,choice,1#-1 cristal|2#-2 cristaux|3#-3 cristaux} si défaite.');
INSERT INTO rule_ref (id, name) VALUES (101, '+10 cristaux si victoire, score divisé par 2 si défaite.');
INSERT INTO rule_ref (id, name) VALUES (102, "Protection contre la perte de score jusqu'à la prochaine ouverture de la boutique.");

INSERT INTO boost_ref (id, name) VALUES (1, 'boost');
INSERT INTO boost_ref (id, name) VALUES (2, 'malus');
INSERT INTO boost_ref (id, name) VALUES (3, 'conditional');

INSERT INTO card (code, image_url, name_fr, cost, multiplicator, rule_id, type_id, attribute_id, boost_id,collection_id)
VALUES
  ('CARD-1',  '/assets/card-1.png', 'Carte 1',   5, 1, 1, 1, 1, 1, 1),
  ('CARD-2',  '/assets/card-1.png', 'Carte 2',   5, 1, 2, 1, 2, 2, 1),
  ('CARD-3',  '/assets/card-1.png', 'Carte 3',   5, 1, 3, 1, 3, 1, 1),
  ('CARD-4',  '/assets/card-1.png', 'Carte 4',   5, 1, 4, 1, 4, 2, 1),
  ('CARD-5',  '/assets/card-1.png', 'Carte 5',   5, 2, 1, 1, 1, 1, 1),
  ('CARD-6',  '/assets/card-1.png', 'Carte 6',   5, 2, 2, 1, 2, 2, 1),
  ('CARD-7',  '/assets/card-1.png', 'Carte 7',   5, 2, 3, 1, 3, 1, 1),
  ('CARD-8',  '/assets/card-1.png', 'Carte 8',   5, 2, 4, 1, 4, 2, 1),
  ('CARD-9',  '/assets/card-1.png', 'Carte 9',   5, 3, 2, 1, 1, 1, 1),
  ('CARD-10', '/assets/card-1.png', 'Carte 10',  5, 3, 3, 1, 3, 2, 1),
  ('CARD-11', '/assets/card-1.png', 'Carte 11',  5, 3, 4, 1, 4, 1, 1),
  ('CARD-12', '/assets/card-1.png', 'Carte 12',  5, 1, 100, 2, 5, 1, 1),
  ('CARD-13', '/assets/card-1.png', 'Carte 13',  5, 1, 101, 2, 5, 1, 1),
  ('CARD-14', '/assets/card-1.png', 'Carte 14',  5, 1, 102, 2, 5, 1, 1);

