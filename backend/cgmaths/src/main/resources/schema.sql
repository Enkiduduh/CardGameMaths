CREATE TABLE IF NOT EXISTS card_type (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(16) NOT NULL UNIQUE  -- Action, Joker, Boss, Hero
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE IF NOT EXISTS collection_ref (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(32) NOT NULL UNIQUE  -- "collection_1", "collection_2", etc
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE IF NOT EXISTS rule_ref (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(300) NOT NULL UNIQUE -- rules..
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE IF NOT EXISTS attribute_ref (
  id INT PRIMARY KEY AUTO_INCREMENT,
  label CHAR(1) NOT NULL UNIQUE -- +, -, *, /
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE IF NOT EXISTS boost_ref (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(16) NOT NULL UNIQUE -- bonus, malus, conditional
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE IF NOT EXISTS card (
  id            INT PRIMARY KEY AUTO_INCREMENT,
  code          VARCHAR(50) NOT NULL UNIQUE,
  image_url     VARCHAR(200) NOT NULL,
  cost          INT NOT NULL,
  name_fr       VARCHAR(100) NOT NULL,
  multiplicator INT NOT NULL, -- 1, 2, 3
  type_id       INT NOT NULL,
  attribute_id  INT NOT NULL,
  collection_id INT NOT NULL,
  boost_id      INT NOT NULL,
  rule_id       INT NOT NULL,

  CONSTRAINT fk_card_type        FOREIGN KEY (type_id)       REFERENCES card_type(id),
  CONSTRAINT fk_card_attribute   FOREIGN KEY (attribute_id)  REFERENCES attribute_ref(id),
  CONSTRAINT fk_card_collection  FOREIGN KEY (collection_id) REFERENCES collection_ref(id),
  CONSTRAINT fk_card_boost       FOREIGN KEY (boost_id)      REFERENCES boost_ref(id),
  CONSTRAINT fk_card_rule        FOREIGN KEY (rule_id)       REFERENCES rule_ref(id),

  INDEX idx_card_type       (type_id),
  INDEX idx_card_attribute  (attribute_id),
  INDEX idx_card_collection (collection_id),
  INDEX idx_card_boost      (boost_id),
  INDEX idx_card_rule       (rule_id)

) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE IF NOT EXISTS user (
    id INT PRIMARY KEY,
    username VARCHAR(100) NOT NULL,
    email VARCHAR(100),
    password VARCHAR(100)
);
