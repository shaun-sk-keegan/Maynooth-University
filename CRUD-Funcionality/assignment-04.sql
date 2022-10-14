--SQL DATA DUMP FOR ASSIGNMENT 4

--CREATE THE FIRST TABLE
CREATE TABLE Person (
    Title varchar(255),
    FName varchar(255) NOT NULL,
    Surname varchar(255) NOT NULL,
    Mobile varchar(255) NOT NULL,
    Email varchar(255) NOT NULL
);

--INSERT SAMPLE DATA INTO THE TABLE
INSERT INTO Person (Title, FName, Surname, Mobile, Email)
VALUES ('Mr', 'Shaun', 'Keegan', '0871234567', 'shaun@mail.com');

INSERT INTO Person (Title, FName, Surname, Mobile, Email)
VALUES ('', 'Joe', 'Bloggs', '0867654321', 'jbloggs@mail.com');

--CREATE THE SECOND TABLE
CREATE TABLE HomeAddress (
  AddressLn1 varchar(255) NOT NULL,
  AddressLn2 varchar(255),
  Town varchar(255) NOT NULL,
  County varchar(255) NOT NULL,
  Eircode varchar(255)
)

--INSERT SAMPLE DATA INTO THE TABLE 
INSERT INTO HomeAddress (AddressLn1, AddressLn2, Town, County, Eircode)
VALUES ('42', 'Lucan', 'Road', 'Lucan', 'Dublin', 'K78X123');

INSERT INTO HomeAddress (AddressLn1, AddressLn2, Town, County, Eircode)
VALUES ('123', 'NUIM', 'Park', 'Maynooth', 'Kildare', '');

--CREATE THE FINAL TABLE, WHICH IS IDENTICAL TO THE SECOND
CREATE TABLE ShippingAddress (
  AddressLn1 varchar(255) NOT NULL,
  AddressLn2 varchar(255),
  Town varchar(255) NOT NULL,
  County varchar(255) NOT NULL,
  Eircode varchar(255)
)

--INSERT MORE SAMPLE DATA INTO THE TABLE
INSERT INTO ShippingAddress (AddressLn1, AddressLn2, Town, County, Eircode)
VALUES ('42', 'Lucan', 'Road', 'Lucan', 'Dublin', 'K78X123');

INSERT INTO ShippingAddress (AddressLn1, AddressLn2, Town, County, Eircode)
VALUES ('123', 'NUIM', 'Park', 'Maynooth', 'Kildare', '');