CREATE TABLE `blogs` (
	`id` int AUTO_INCREMENT NOT NULL,
	`title` text,
	`content` text,
	`author` text,
	CONSTRAINT `blogs_id` PRIMARY KEY(`id`)
);
