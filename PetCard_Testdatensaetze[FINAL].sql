-- #######################################################################################
--  Testdatensätze
-- #######################################################################################


-- Medikamente

INSERT INTO medication (description, name, price, version)
VALUES ('Wund und Heilsalbe', 'Bepanthen® Salbe, 100 g', 14.99, 0);

INSERT INTO medication (description, name, price, version)
VALUES ('Wund und Heilsalbe', 'Vitawund® Salbe, 40 g', 7.99, 0);

INSERT INTO medication (description, name, price, version)
VALUES ('Nahrungsergänzung für den älteren Hund', 'CANICOX® GR Tabletten, 100 St', 35.99, 0);

INSERT INTO medication (description, name, price, version)
VALUES ('Parasiten-Prophylaxe bei Katzen und Kleintiere', 'Bogadual® ANTI-PARASIT Spot-on, 4X0.75 ml', 13.48, 0);

INSERT INTO medication (description, name, price, version)
VALUES ('Spezialvlies mit Al Co Cid-Liquid getränkt für Pferde', 'SanDitan® Horn Pads, 25 St', 18.53, 0);

INSERT INTO medication (description, name, price, version)
VALUES ('Ergänzungsfuttermittel für Kaninchen, Meerschweinchen und Kleinnager', 'RodiCare® uro, 20 ml', 12.98, 0);


-- Krankheiten

INSERT INTO disease (description, name, version)
VALUES ('Parasiten wie Zecken, Flöhe und Würmer nisten sich im Fell von Katzen ein oder befallen gar ihre inneren Organe.', 'Parasiten', 0);

INSERT INTO disease (description, name, version)
VALUES ('Eine Schürfwunde ist eine oberflächliche Wunde, die entsteht, wenn die Haut durch Reibungskräfte verletzt wird, beispielsweise bei einem Sturz.', 'Abschürfung', 0);

INSERT INTO disease (description, name, version)
VALUES ('Als Räude bezeichnet man Milbenerkrankungen bei Tieren.', 'Raeude', 0);

INSERT INTO disease (description, name, version)
VALUES ('Die Tollwut ist eine seit Jahrtausenden bekannte Virusinfektion, die bei Tieren und Menschen eine akute, fast immer tödliche Enzephalitis (Gehirnentzündung) verursacht.', 'Tollwut', 0);

INSERT INTO disease (description, name, version)
VALUES ('Mit dem Begriff Allgemeinzustand (Abkürzung: AZ) werden die allgemeine körperliche, geistige und seelische Verfassung eines Tieres und die Auswirkung auf seinen Alltag beschrieben.', 'Schlechter AZ', 0);


-- Eigentümer

INSERT INTO pet_owner (address, email, first_name, last_name, phone, version)
VALUES ('Maierstrasse 1', 'hans.maier@petcard.at', 'Hans', 'Maier', '0660123456789', 0);

INSERT INTO pet_owner (address, email, first_name, last_name, phone, version)
VALUES ('Huberstrasse 1', 'peter.huber@petcard.at', 'Peter','Huber','0663456789012', 0);

INSERT INTO pet_owner (address, email, first_name, last_name, phone, version)
VALUES ('Musterkindstrasse 1','michael.musterkind@petcard.at', 'Michael','Musterkind', '0664567890123', 0);

INSERT INTO pet_owner (address, email, first_name, last_name, phone, version)
VALUES ('Mustermannstrasse 1', 'max.mustermann@petcard.at', 'Max','Mustermann', '0662345678901', 0);

INSERT INTO pet_owner (address, email, first_name, last_name, phone, version)
VALUES ('Musterfraustrasse 1','nina.musterfrau@petcard.at', 'Nina','Musterfrau', '0661234567890', 0);


-- Ärzte

INSERT INTO doctor (address, email, first_name, last_name, office_hours, phone, version)
VALUES ('Doolittlestreet 1', 'office@doolittle.at', 'John', 'Doolittle', 'Mo-Fr: 9-15h', '066111111111', 0);

INSERT INTO doctor (address, email, first_name, last_name, office_hours, phone, version)
VALUES ('Totschlagstrasse 1', 'office@totschlag.at', 'Johanna', 'Totschlag', 'Di-Fr: 8-12h', '0660987654321', 0);


-- Pets

INSERT INTO pet (birth_date, name, type, version, weight, doctor_id, pet_owner_id)
VALUES ('2016-01-01', 'Speedy', 'Zwergkaninchen', 0, 2, 1, 3);

INSERT INTO pet (birth_date, name, type, version, weight, doctor_id, pet_owner_id)
VALUES ('2008-05-03', 'Blitz', 'Norika', 0, 800, 1, 5);

INSERT INTO pet (birth_date, name, type, version, weight, doctor_id, pet_owner_id)
VALUES ('2009-12-12', 'Kyra', 'Labrador', 0, 16, 2, 4);

INSERT INTO pet (birth_date, name, type, version, weight, doctor_id, pet_owner_id)
VALUES ('2014-06-02', 'Kitty', 'California Spangled', 0, 4, 1, 5);


-- PetDisease

INSERT INTO pet_disease (disease_end, disease_start, version, disease_id, pet_id)
VALUES ('2016-12-02', '2016-11-01', 0, 1, 1);

INSERT INTO pet_disease (disease_end, disease_start, version, disease_id, pet_id)
VALUES (NULL, '2012-01-05', 0, 5, 2);

INSERT INTO pet_disease (disease_end, disease_start, version, disease_id, pet_id)
VALUES (NULL, '2015-08-25', 0, 4, 3);

INSERT INTO pet_disease (disease_end, disease_start, version, disease_id, pet_id)
VALUES ('2015-01-02', '2014-12-27', 0, 5, 4);


--  PetMedication

INSERT INTO pet_medication (dose, end_date, issue_date, version, medication_id, pet_id)
VALUES ('1x Früh, 1x Mittag, 1x Abends', '2016-12-02', '2016-11-01', 0, 4 , 1);

INSERT INTO pet_medication (dose, end_date, issue_date, version, medication_id, pet_id)
VALUES ('Spezialvlies alle 2 Tage wechseln', NULL, '2012-01-05', 0, 5, 2);

INSERT INTO pet_medication (dose, end_date, issue_date, version, medication_id, pet_id)
VALUES ('Bei jeder Gelegenheit einschmieren', NULL, '2015-08-25', 0, 1, 3);

INSERT INTO pet_medication (dose, end_date, issue_date, version, medication_id, pet_id)
VALUES ('1x Morgens 1 Tablette', '2015-02-01', '2014-12-27', 0, 6, 4);



SELECT *  FROM pet_medication;
SELECT * FROM pet;
