DROP DATABASE IF EXISTS AGRIsibo;
CREATE DATABASE AGRIsibo;
USE AGRIsibo;

DROP TABLE IF EXISTS user_accounts;
CREATE TABLE user_accounts(
	user_id 			int NOT NULL AUTO_INCREMENT,
	first_name			varchar(256) NOT NULL,
	middle_name			varchar(256) NOT NULL,
	last_name			varchar(256) NOT NULL,
	email               varchar(256) NOT NULL,
    username            varchar(100) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
    password            varchar(256) NOT NULL,
    member_since        date NOT NULL,
    UNIQUE              (username),
    PRIMARY KEY         (user_id)	
);

DROP TABLE IF EXISTS posts;
CREATE TABLE posts(
	post_id 			int NOT NULL AUTO_INCREMENT,
	post_content		text NOT NULL,
	post_date			date NOT NULL,
	user_id				int NOT NULL,
	PRIMARY KEY			(post_id),
	FOREIGN KEY 		(user_id)
		REFERENCES 		user_accounts (user_id)
		ON DELETE CASCADE
);

DROP TABLE IF EXISTS comments;
CREATE TABLE comments(
	comment_id 			int NOT NULL AUTO_INCREMENT,
	comment_content		text NOT NULL,
	comment_date		date NOT NULL,
	user_id				int NOT NULL,
	post_id				int NOT NULL,
	PRIMARY KEY			(comment_id),
	FOREIGN KEY 		(user_id)
		REFERENCES 		user_accounts (user_id)
		ON DELETE CASCADE,
	FOREIGN KEY 		(post_id)
		REFERENCES 		posts (post_id)
		ON DELETE CASCADE
);

DROP TABLE IF EXISTS answers;
CREATE TABLE answers(
	answer_id 			int NOT NULL AUTO_INCREMENT,
	answer_content		text NOT NULL,
	answer_date			date NOT NULL,
	user_id				int NOT NULL,
	post_id				int NOT NULL,
	PRIMARY KEY			(answer_id),
	FOREIGN KEY 		(user_id)
		REFERENCES 		user_accounts (user_id)
		ON DELETE CASCADE,
	FOREIGN KEY 		(post_id)
		REFERENCES 		posts (post_id)
		ON DELETE CASCADE
);

INSERT INTO user_accounts(first_name, middle_name, last_name, email, username, password, member_since)
	VALUES('Juan', 'Santos', 'dela Cruz', 'juandelacruz@gmail.com', 'juandlc', '1234', CURDATE());
INSERT INTO user_accounts(first_name, middle_name, last_name, email, username, password, member_since)
	VALUES('Jose', 'Protacio', 'Rizal', 'joserizal@gmail.com', 'jrizal', '1234', CURDATE());

INSERT INTO posts(post_content, post_date, user_id)
	VALUES('This is a sample post', CURDATE(), 1);

INSERT INTO comments(comment_content, comment_date, user_id, post_id)
	VALUES('This is a sample comment', CURDATE(), 1, 1);

INSERT INTO answers(answer_content, answer_date, user_id, post_id)
	VALUES('This is a sample answer', CURDATE(), 1, 1);