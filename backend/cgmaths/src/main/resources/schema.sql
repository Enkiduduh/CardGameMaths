
CREATE TABLE IF NOT EXISTS card_type (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(100) NOT NULL UNIQUE,  -- Action, Joker, Boss, Hero
  attribut VARCHAR(32) UNIQUE, -- +, -, *, /
  boost VARCHAR(32) NOT NULL UNIQUE, -- bonus, malus, optionnal
  multiplicator INT NOT NULL UNIQUE -- 1, 2, 3
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE IF NOT EXISTS category_ref (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(32) NOT NULL   -- "Addition", "Soustraction", "Multiplication", "Division", "Boss", "Hero"
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE IF NOT EXISTS collection_ref (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(32) NOT NULL UNIQUE  -- "collection_1", "collection_2", etc
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE IF NOT EXISTS difficulty_ref (
  id INT PRIMARY KEY AUTO_INCREMENT,
  power INT NOT NULL UNIQUE -- 1, 2, 3, 4
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE IF NOT EXISTS rule_ref (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(300) NOT NULL UNIQUE -- "rule1", "rule2", "rule3", "rule4",etc...
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE IF NOT EXISTS card (
  id            INT PRIMARY KEY AUTO_INCREMENT,
  code          VARCHAR(50) NOT NULL UNIQUE,
  image_url     VARCHAR(200) NOT NULL,
  energy        INT NOT NULL,
  cost          INT NOT NULL,
  name_fr       VARCHAR(100) NOT NULL,

  type_id       INT NOT NULL,
  difficulty_id INT NOT NULL,
  category_id   INT NOT NULL,
  collection_id INT NOT NULL,
  rule_id       INT NOT NULL,

  CONSTRAINT fk_card_type       FOREIGN KEY (type_id)       REFERENCES card_type(id),
  CONSTRAINT fk_card_difficulty FOREIGN KEY (difficulty_id) REFERENCES difficulty_ref(id),
  CONSTRAINT fk_card_category   FOREIGN KEY (category_id)   REFERENCES category_ref(id),
  CONSTRAINT fk_card_collection FOREIGN KEY (collection_id) REFERENCES collection_ref(id),
  CONSTRAINT fk_card_rule       FOREIGN KEY (rule_id)       REFERENCES rule_ref(id),

  INDEX idx_card_type       (type_id),
  INDEX idx_card_difficulty (difficulty_id),
  INDEX idx_card_symbol     (symbol_code),
  INDEX idx_card_category   (category_id),
  INDEX idx_card_collection (collection_id),
  INDEX idx_card_rule       (rule_id)

) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


CREATE TABLE IF NOT EXISTS user (
    id INT PRIMARY KEY,
    username VARCHAR(100) NOT NULL,
    email VARCHAR(100),
    password VARCHAR(100)
);
