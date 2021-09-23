CREATE TABLE messages (
  id INT auto_increment,
  text VARCHAR(255),
  customerId INT,
  sent BOOLEAN NOT NULL DEFAULT 0,
  dateSent DATETIME,
  createdAt DATETIME DEFAULT NOW(),
  updatedAt DATETIME DEFAULT NOW() ON UPDATE NOW(),
  PRIMARY KEY(id)
  FOREIGN KEY (customerId) REFERENCES customers(id)
)