CREATE TABLE IF NOT EXISTS card (
  id            INT PRIMARY KEY AUTO_INCREMENT,
  image_url     VARCHAR(200) NOT NULL,
  energy        INT NOT NULL,
  cost          INT NOT NULL,

  type_id       INT NOT NULL,
  rarity_id     INT NOT NULL,
  symbol_code   CHAR(1) NOT NULL,
  category_id   INT NOT NULL,
  collection_id INT NOT NULL,

  CONSTRAINT fk_card_type       FOREIGN KEY (type_id)       REFERENCES card_type(id),
  CONSTRAINT fk_card_rarity     FOREIGN KEY (rarity_id)     REFERENCES rarity_ref(id),
  CONSTRAINT fk_card_symbol     FOREIGN KEY (symbol_code)   REFERENCES symbol_ref(code),
  CONSTRAINT fk_card_category   FOREIGN KEY (category_id)   REFERENCES category_ref(id),
  CONSTRAINT fk_card_collection FOREIGN KEY (collection_id) REFERENCES collection_ref(id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE IF NOT EXISTS card_type (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(100) NOT NULL UNIQUE  -- Action, Joker, Boss, Hero
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE IF NOT EXISTS symbol_ref (
  code CHAR(1) PRIMARY KEY, -- "+", "-", "*", "/"
  label VARCHAR(32) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE IF NOT EXISTS category_ref (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(32) NOT NULL   -- "Addition", "Soustraction", "Multiplication", "Division", "Boss", "Hero"
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE IF NOT EXISTS collection_ref (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(32) NOT NULL UNIQUE  -- "collection_1", "collection_2", etc
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE IF NOT EXISTS rarity_ref (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(100) NOT NULL UNIQUE -- Commune, Rare, Super Rare, Ultra Rare
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE IF NOT EXISTS card_name_i18n (
  card_id INT NOT NULL,
  lang    CHAR(2) NOT NULL,         -- 'fr', 'en', ...
  name    VARCHAR(100) NOT NULL,
  PRIMARY KEY (card_id, lang),
  CONSTRAINT fk_name_card
    FOREIGN KEY (card_id) REFERENCES card(id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE IF NOT EXISTS card_rule_i18n (
  card_id INT NOT NULL,
  lang    CHAR(2) NOT NULL,
  rule    VARCHAR(200) NOT NULL,
  PRIMARY KEY (card_id, lang),
  CONSTRAINT fk_rule_card
    FOREIGN KEY (card_id) REFERENCES card(id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE INDEX idx_card_name_lang ON card_name_i18n (lang, name);


CREATE TABLE IF NOT EXISTS user (
    id INT PRIMARY KEY,
    username VARCHAR(100) NOT NULL,
    email VARCHAR(100),
    password VARCHAR(100)
);