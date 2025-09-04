INSERT INTO card_type (id, name) VALUES (1, 'Action');
INSERT INTO card_type (id, name) VALUES (2, 'Joker');
INSERT INTO card_type (id, name) VALUES (3, 'Boss');
INSERT INTO card_type (id, name) VALUES (4, 'Hero');

INSERT INTO attribute_ref (id, name) VALUES (1, '+');
INSERT INTO attribute_ref (id, name) VALUES (2, '-');
INSERT INTO attribute_ref (id, name) VALUES (3, '*');
INSERT INTO attribute_ref (id, name) VALUES (4, '/');

INSERT INTO collection_ref (id, name) VALUES (1, '1ere Edition');

INSERT INTO rule_ref (id, name) VALUES (1, 'Le plus rapide à calculer reprend {0} {0,choice,1#carte Cristal de sa Défausse et le met|1<cartes Cristal de sa Défausse et les met} dans son Coffre.');
INSERT INTO rule_ref (id, name) VALUES (2, 'Le plus rapide à calculer reprend {0} {0,choice,1#carte Action de sa Défausse et la met|1<cartes Action de sa Défausse et les met} en dessous de son Deck.');
INSERT INTO rule_ref (id, name) VALUES (3, 'Le plus rapide à calculer reprend {0} {0,choice,1#carte Action de sa Défausse et la met|1<cartes Action de sa Défausse et les met} au-dessus de son Deck.');
INSERT INTO rule_ref (id, name) VALUES (5, 'Le plus rapide à calculer reprend {0} {0,choice,1#carte Action de sa Défausse et la met|1<cartes Action de sa Défausse et les met} dans sa main.');
INSERT INTO rule_ref (id, name) VALUES (6, 'Le plus rapide à calculer reprend {0} {0,choice,1#carte Joker de sa Défausse et le met|1<cartes Joker de sa Défausse et les met} en dessous de son Deck.');
INSERT INTO rule_ref (id, name) VALUES (9, 'Le plus rapide à calculer reprend {0} {0,choice,1#carte Joker de sa Défausse et la met|1<cartes Joker de sa Défausse et les met} dans sa main.');
INSERT INTO rule_ref (id, name) VALUES (10, 'Le plus rapide à calculer reprend {0} {0,choice,1#carte Action « + » de sa Défausse et le met|1<cartes Action « + » de sa Défausse et les met} en dessous de son Deck.');
INSERT INTO rule_ref (id, name) VALUES (13, 'Le plus rapide à calculer reprend {0} {0,choice,1#carte Action « + » de sa Défausse et la met|1<cartes Action « + » de sa Défausse et les met} dans sa main.');
INSERT INTO rule_ref (id, name) VALUES (14, 'Le plus rapide à calculer reprend {0} {0,choice,1#carte Action « - » de sa Défausse et le met|1<cartes Action « + » de sa Défausse et les met} en dessous de son Deck.');
INSERT INTO rule_ref (id, name) VALUES (17, 'Le plus rapide à calculer reprend {0} {0,choice,1#carte Action « - » de sa Défausse et la met|1<cartes Action « + » de sa Défausse et les met} dans sa main.');
INSERT INTO rule_ref (id, name) VALUES (18, 'Le plus rapide à calculer reprend {0} {0,choice,1#carte Action « x » de sa Défausse et le met|1<cartes Action « x » de sa Défausse et les met} en dessous de son Deck.');
INSERT INTO rule_ref (id, name) VALUES (21, 'Le plus rapide à calculer reprend {0} {0,choice,1#carte Action « x » de sa Défausse et la met|1<cartes Action « x » de sa Défausse et les met} dans sa main.');
INSERT INTO rule_ref (id, name) VALUES (22, 'Le plus rapide à calculer reprend {0} {0,choice,1#carte Action « ÷ » de sa Défausse et le met|1<cartes Action « ÷ » de sa Défausse et les met} en dessous de son Deck.');
INSERT INTO rule_ref (id, name) VALUES (25, 'Le plus rapide à calculer reprend {0} {0,choice,1#carte Action « ÷ » de sa Défausse et la met|1<cartes Action « ÷ » de sa Défausse et les met} dans sa main.');
INSERT INTO rule_ref (id, name) VALUES (26, 'Le plus rapide à calculer reprend {0} {0,choice,1#carte Héros de sa Défausse et le met|1<cartes Héros de sa Défausse et les met} en dessous de son Deck.');
INSERT INTO rule_ref (id, name) VALUES (29, 'Le plus rapide à calculer reprend {0} {0,choice,1#carte Héros de sa Défausse et la met|1<cartes Héros de sa Défausse et les met} dans sa main.');
INSERT INTO rule_ref (id, name) VALUES (30, 'Le plus rapide à calculer reprend {0} {0,choice,1#carte Boss de sa Défausse et le met|1<cartes Héros de sa Défausse et les met} en dessous de son Deck.');
INSERT INTO rule_ref (id, name) VALUES (33, 'Le plus rapide à calculer reprend {0} {0,choice,1#carte Boss de sa Défausse et la met|1<cartes Héros de sa Défausse et les met} dans sa main.');

INSERT INTO rule_ref (id, name) VALUES (34, 'Le moins rapide à calculer envoie {0,choice,1#{0} carte Cristal|1<{0} cartes Cristaux} de son Coffre dans sa Défausse.');
INSERT INTO rule_ref (id, name) VALUES (35, 'Le moins rapide à calculer envoie {0,choice,1#{0} carte|1<{0} cartes} en dessous de son Deck dans sa Défausse.');
INSERT INTO rule_ref (id, name) VALUES (36, 'Le moins rapide à calculer envoie {0,choice,1#{0} carte|1<{0} cartes} au-dessus de son Deck dans sa Défausse.');
INSERT INTO rule_ref (id, name) VALUES (38, 'Le moins rapide à calculer envoie {0,choice,1#{0} carte|1<{0} cartes} de sa main dans sa Défausse.');
INSERT INTO rule_ref (id, name) VALUES (40, 'Le moins rapide à calculer envoie {0,choice,1#{0} carte Joker|1<{0} cartes Joker} de sa main dans sa Défausse.');
INSERT INTO rule_ref (id, name) VALUES (42, 'Le moins rapide à calculer envoie {0,choice,1#{0} carte Action|1<{0} cartes Action} de sa main dans sa Défausse.');
INSERT INTO rule_ref (id, name) VALUES (44, 'Le moins rapide à calculer envoie {0,choice,1#{0} carte Action « + »|1<{0} cartes Action « + »} de sa main dans sa Défausse.');
INSERT INTO rule_ref (id, name) VALUES (47, 'Le moins rapide à calculer envoie {0,choice,1#{0} carte Action « - »|1<{0} cartes Action « - »} de sa main dans sa Défausse.');
INSERT INTO rule_ref (id, name) VALUES (50, 'Le moins rapide à calculer envoie {0,choice,1#{0} carte Action « x »|1<{0} cartes Action « x »} de sa main dans sa Défausse.');
INSERT INTO rule_ref (id, name) VALUES (53, 'Le moins rapide à calculer envoie {0,choice,1#{0} carte Action « ÷ »|1<{0} cartes Action « ÷ »} de sa main dans sa Défausse.');
INSERT INTO rule_ref (id, name) VALUES (55, "Le moins rapide à calculer ne peut pas piocher de carte durant son prochain tour.");
INSERT INTO rule_ref (id, name) VALUES (57, "Le moins rapide à calculer ne peut pas jouer de carte Joker durant son prochain tour.");
INSERT INTO rule_ref (id, name) VALUES (62, "Le moins rapide à calculer ne peut pas jouer de carte Héros durant son prochain tour.");
INSERT INTO rule_ref (id, name) VALUES (63, "Le moins rapide à calculer ne peut pas jouer de carte Boss durant son prochain tour.");

INSERT INTO rule_ref (id, name) VALUES (66, 'Si tu es le plus rapide à calculer, pioche {0,choice,1#{0} carte|1<{0} cartes} de ton Deck.');
INSERT INTO rule_ref (id, name) VALUES (67, 'Si tu es le plus rapide à calculer, ton adversaire ne peut pas piocher de carte de son Deck à son prochain tour.');
INSERT INTO rule_ref (id, name) VALUES (68, 'Si tu es le plus rapide à calculer, reprends {0,choice,1#{0} carte|1<{0} cartes} Action de ta Défausse et mets-la en dessous de ton Deck.');
INSERT INTO rule_ref (id, name) VALUES (71, 'Si tu es le plus rapide à calculer, reprends {0,choice,1#{0} carte Action|1<{0} cartes Action} de ta Défausse et {0,choice,1#mets-la|1<mets-les} dans ta main.');
INSERT INTO rule_ref (id, name) VALUES (72, 'Si tu es le plus rapide à calculer, reprends {0,choice,1#{0} carte Action|1<{0} cartes Action} ou {0,choice,1#{0} Joker|1<{0} Jokers} de ta Défausse et {0,choice,1#mets-le|1<mets-les} en dessous de ton Deck.');
INSERT INTO rule_ref (id, name) VALUES (76, 'Si tu es le plus rapide à calculer, reprends {0,choice,1#{0} carte Joker|1<{0} cartes Joker} de ta Défausse et {0,choice,1#mets-le|1<mets-les} dans ta main.');
INSERT INTO rule_ref (id, name) VALUES (80, 'Si tu es le plus rapide à calculer, reprends {0,choice,1#{0} carte Action « + »|1<{0} cartes Action « + »} de ta Défausse et {0,choice,1#mets-la|1<mets-les} dans ta main.');
INSERT INTO rule_ref (id, name) VALUES (84, 'Si tu es le plus rapide à calculer, reprends {0,choice,1#{0} carte Action « - »|1<{0} cartes Action « - »} de ta Défausse et {0,choice,1#mets-la|1<mets-les} dans ta main.');
INSERT INTO rule_ref (id, name) VALUES (88, 'Si tu es le plus rapide à calculer, reprends {0,choice,1#{0} carte Action « x »|1<{0} cartes Action « x »} de ta Défausse et {0,choice,1#mets-la|1<mets-les} dans ta main.');
INSERT INTO rule_ref (id, name) VALUES (92, 'Si tu es le plus rapide à calculer, reprends {0,choice,1#{0} carte Action « ÷ »|1<{0} cartes Action « ÷ »} de ta Défausse et {0,choice,1#mets-la|1<mets-les} dans ta main.');
INSERT INTO rule_ref (id, name) VALUES (93, 'Si tu es le plus rapide à calculer, ton adversaire ne peut pas jouer de carte Action à son prochain tour.');
INSERT INTO rule_ref (id, name) VALUES (94, 'Si tu es le plus rapide à calculer, ton adversaire ne peut pas jouer de carte Joker à son prochain tour.');
INSERT INTO rule_ref (id, name) VALUES (99, 'Si tu es le plus rapide à calculer, ton adversaire envoie {0,choice,1#{0} Cristal|1<{0} Cristaux} de son Coffre dans sa Défausse.');
INSERT INTO rule_ref (id, name) VALUES (100, 'Si tu es le plus rapide à calculer, ton adversaire envoi la carte en dessous de son Deck dans sa Défausse.');
INSERT INTO rule_ref (id, name) VALUES (101, 'Si tu es le plus rapide à calculer, ton adversaire envoi la carte au-dessus de son Deck dans sa Défausse.');
INSERT INTO rule_ref (id, name) VALUES (102, 'Si tu es le plus rapide à calculer, ton adversaire envoie {0,choice,1#{0} carte|1<{0} cartes} de sa main dans sa Défausse.');

INSERT INTO rule_ref (id, name) VALUES (108, 'Pioche {0,choice,1#{0} carte|1<{0} cartes} de ton Deck.');
INSERT INTO rule_ref (id, name) VALUES (110, 'Reprends {0,choice,1#{0} carte Action|1<{0} cartes Actions} de ta Défausse et {0,choice,1#mets-la|1<mets-les} dans ta main.');
INSERT INTO rule_ref (id, name) VALUES (111, 'Durant le prochain tour de ton adversaire, tu ne peux pas perdre de Cristaux.');
INSERT INTO rule_ref (id, name) VALUES (117, 'Si tu ne trouves pas le résultat du calcul, rejoue une carte Action.');
INSERT INTO rule_ref (id, name) VALUES (118, 'Regarde {0,choice,1#la {0} carte|1<les {0} cartes} au-dessus de ton Deck, prends-en une et envoie les autres dans ta Défausse.');
INSERT INTO rule_ref (id, name) VALUES (122, 'Prends une carte Action dans ton Deck, ajoute la à ta main et mélange on Deck.');
INSERT INTO rule_ref (id, name) VALUES (123, 'Prends une carte Joker dans ton Deck, ajoute la à ta main et mélange on Deck.');
INSERT INTO rule_ref (id, name) VALUES (124, 'Prends une carte Héros dans ton Deck, ajoute la à ta main et mélange on Deck.');

INSERT INTO rule_ref (id, name) VALUES (126, 'Ton adversaire envoie {0,choice,1#{0} carte|1<{0} cartes} de sa main dans sa Défausse.');
INSERT INTO rule_ref (id, name) VALUES (127, 'Ton adversaire envoie dans sa Défausse {0,choice,1#{0} carte Cristal|1<{0} cartes Cristaux} de son Coffre.');
INSERT INTO rule_ref (id, name) VALUES (132, 'Regarde {0,choice,1#la {0} carte|1<les {0} cartes} au-dessus du Deck de ton adversaire, remets-les dans l''ordre que tu veux.');
INSERT INTO rule_ref (id, name) VALUES (139, 'Ton adversaire envoie dans sa Défausse {0,choice,1#{0} carte Action|1<{0} cartes Actions} de son Deck et {0,choice,1#{0} carte|1<{0} cartes} de sa main.');
INSERT INTO rule_ref (id, name) VALUES (140, 'Ton adversaire envoie {0} carte Héros de son Deck ou de sa main dans sa Défausse.');
INSERT INTO rule_ref (id, name) VALUES (141, 'Ton adversaire envoie dans sa Défausse {0,choice,1#{0} carte Cristal|1<{0} cartes Cristaux} de son Coffre et {0,choice,1#{0} carte|1<{0} cartes} de sa main.');
INSERT INTO rule_ref (id, name) VALUES (142, 'Ton adversaire ne peut jouer aucune carte Action durant {0,choice,1#le prochain tour|1<les {0} prochains tours}.');
INSERT INTO rule_ref (id, name) VALUES (143, 'Ton adversaire envoie dans sa Défausse {0,choice,1#{0} carte Cristal|1<{0} cartes Cristaux} de son Coffre pour chaque carte dans sa main.');

INSERT INTO boost_ref (id, name) VALUES (1, 'boost');
INSERT INTO boost_ref (id, name) VALUES (2, 'malus');
INSERT INTO boost_ref (id, name) VALUES (3, 'conditional');

INSERT INTO card (code, image_url, name_fr, cost, multiplicator, rule_id, type_id, attribute_id, boost_id,collection_id)
VALUES
  ('CARD-1',  '/assets/card-1.png', 'Carte 1',   5, 1, 1, 1, 1, 1, 1),
  ('CARD-2',  '/assets/card-1.png', 'Carte 2',   5, 2, 2, 1, 2, 1, 1),
  ('CARD-3',  '/assets/card-1.png', 'Carte 3',   5, 2, 3, 1, 3, 1, 1),
  ('CARD-4',  '/assets/card-1.png', 'Carte 4',   5, 1, 5, 1, 4, 1, 1),
  ('CARD-5',  '/assets/card-1.png', 'Carte 5',   5, 2, 6, 1, 1, 1, 1),
  ('CARD-6',  '/assets/card-1.png', 'Carte 6',   5, 1, 9, 1, 2, 1, 1),
  ('CARD-7',  '/assets/card-1.png', 'Carte 7',   5, 2, 10, 1, 1, 1, 1),
  ('CARD-8',  '/assets/card-1.png', 'Carte 8',   5, 1, 13, 1, 1, 1, 1),
  ('CARD-9',  '/assets/card-1.png', 'Carte 9',   5, 2, 14, 1, 2, 1, 1),
  ('CARD-10', '/assets/card-1.png', 'Carte 10',  5, 2, 17, 1, 2, 1, 1),
  ('CARD-11', '/assets/card-1.png', 'Carte 11',  5, 1, 18, 1, 3, 1, 1),
  ('CARD-12', '/assets/card-1.png', 'Carte 12',  5, 2, 21, 1, 3, 1, 1),
  ('CARD-13', '/assets/card-1.png', 'Carte 13',  5, 1, 22, 1, 4, 1, 1),
  ('CARD-14', '/assets/card-1.png', 'Carte 14',  5, 1, 25, 1, 4, 1, 1),
  ('CARD-15', '/assets/card-1.png', 'Carte 15',  5, 2, 26, 1, 3, 1, 1),
  ('CARD-16', '/assets/card-1.png', 'Carte 16',  5, 2, 29, 1, 4, 1, 1),
  ('CARD-17', '/assets/card-1.png', 'Carte 17',  5, 1, 30, 1, 1, 1, 1),
  ('CARD-18', '/assets/card-1.png', 'Carte 18',  5, 2, 33, 1, 2, 1, 1),
  ('CARD-19', '/assets/card-1.png', 'Carte 19',  5, 1, 34, 1, 1, 2, 1),
  ('CARD-20', '/assets/card-1.png', 'Carte 20',  5, 2, 35, 1, 2, 2, 1),
  ('CARD-21', '/assets/card-1.png', 'Carte 21',  5, 1, 36, 1, 3, 2, 1),
  ('CARD-22', '/assets/card-1.png', 'Carte 22',  5, 2, 38, 1, 4, 2, 1),
  ('CARD-23', '/assets/card-1.png', 'Carte 23',  5, 2, 40, 1, 1, 2, 1),
  ('CARD-24', '/assets/card-1.png', 'Carte 24',  5, 1, 42, 1, 2, 2, 1),
  ('CARD-25', '/assets/card-1.png', 'Carte 25',  5, 2, 44, 1, 1, 2, 1),
  ('CARD-26', '/assets/card-1.png', 'Carte 26',  5, 2, 47, 1, 2, 2, 1),
  ('CARD-27', '/assets/card-1.png', 'Carte 27',  5, 1, 50, 1, 3, 2, 1),
  ('CARD-28', '/assets/card-1.png', 'Carte 28',  5, 2, 53, 1, 4, 2, 1),
  ('CARD-29', '/assets/card-1.png', 'Carte 29',  5, 1, 55, 1, 1, 2, 1),
  ('CARD-30', '/assets/card-1.png', 'Carte 30',  5, 2, 57, 1, 2, 2, 1),
  ('CARD-31', '/assets/card-1.png', 'Carte 31',  5, 2, 62, 1, 3, 2, 1),
  ('CARD-32', '/assets/card-1.png', 'Carte 32',  5, 1, 63, 1, 4, 2, 1),
  ('CARD-33', '/assets/card-1.png', 'Carte 33',  5, 1, 66, 1, 1, 3, 1),
  ('CARD-34', '/assets/card-1.png', 'Carte 34',  5, 2, 67, 1, 2, 3, 1),
  ('CARD-35', '/assets/card-1.png', 'Carte 35',  5, 1, 68, 1, 3, 3, 1),
  ('CARD-36', '/assets/card-1.png', 'Carte 36',  5, 1, 71, 1, 4, 3, 1),
  ('CARD-37', '/assets/card-1.png', 'Carte 37',  5, 2, 72, 1, 1, 3, 1),
  ('CARD-38', '/assets/card-1.png', 'Carte 38',  5, 2, 76, 1, 1, 3, 1),
  ('CARD-39', '/assets/card-1.png', 'Carte 39',  5, 1, 80, 1, 1, 3, 1),
  ('CARD-40', '/assets/card-1.png', 'Carte 40',  5, 2, 84, 1, 2, 3, 1),
  ('CARD-41', '/assets/card-1.png', 'Carte 41',  5, 1, 88, 1, 3, 3, 1),
  ('CARD-42', '/assets/card-1.png', 'Carte 42',  5, 2, 92, 1, 4, 3, 1),
  ('CARD-43', '/assets/card-1.png', 'Carte 43',  5, 1, 93, 1, 1, 3, 1),
  ('CARD-44', '/assets/card-1.png', 'Carte 44',  5, 2, 94, 1, 2, 3, 1),
  ('CARD-45', '/assets/card-1.png', 'Carte 45',  5, 2, 99, 1, 3, 3, 1),
  ('CARD-46', '/assets/card-1.png', 'Carte 46',  5, 1, 100, 1, 4, 3, 1),
  ('CARD-47', '/assets/card-1.png', 'Carte 47',  5, 2, 101, 1, 1, 3, 1),
  ('CARD-48', '/assets/card-1.png', 'Carte 48',  5, 2, 102, 1, 2, 3, 1),
  ('CARD-49', '/assets/card-1.png', 'Carte 49', 22, 1, 108, 4, 1, 1, 1),
  ('CARD-50', '/assets/card-1.png', 'Carte 50', 22, 2, 110, 4, 2, 1, 1),
  ('CARD-51', '/assets/card-1.png', 'Carte 51', 22, 1, 111, 4, 3, 1, 1),
  ('CARD-52', '/assets/card-1.png', 'Carte 52', 22, 2, 117, 4, 4, 1, 1),
  ('CARD-53', '/assets/card-1.png', 'Carte 53', 22, 2, 118, 4, 1, 1, 1),
  ('CARD-54', '/assets/card-1.png', 'Carte 54', 22, 1, 122, 4, 2, 1, 1),
  ('CARD-55', '/assets/card-1.png', 'Carte 55', 22, 1, 123, 4, 3, 1, 1),
  ('CARD-56', '/assets/card-1.png', 'Carte 56', 20, 2, 124, 4, 4, 1, 1),
  ('CARD-57', '/assets/card-1.png', 'Carte 57', 20, 1, 126, 3, 1, 2, 1),
  ('CARD-58', '/assets/card-1.png', 'Carte 58', 30, 2, 127, 3, 2, 2, 1),
  ('CARD-59', '/assets/card-1.png', 'Carte 59', 30, 2, 132, 3, 3, 2, 1),
  ('CARD-60', '/assets/card-1.png', 'Carte 60', 30, 1, 139, 3, 4, 2, 1),
  ('CARD-61', '/assets/card-1.png', 'Carte 61', 30, 2, 140, 3, 1, 2, 1),
  ('CARD-62', '/assets/card-1.png', 'Carte 62', 30, 2, 141, 3, 2, 2, 1),
  ('CARD-63', '/assets/card-1.png', 'Carte 63', 30, 1, 142, 3, 3, 2, 1),
  ('CARD-64', '/assets/card-1.png', 'Carte 64', 30, 2, 143, 3, 4, 2, 1);