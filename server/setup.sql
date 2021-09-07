CREATE TABLE messages (
  id INT auto_increment,
  text VARCHAR(255),
  customerId INT,
  sent BOOLEAN NOT NULL DEFAULT 0,
  dateSent DATE
  PRIMARY KEY(id)
  FOREIGN KEY (customerId) REFERENCES customers(id)
)