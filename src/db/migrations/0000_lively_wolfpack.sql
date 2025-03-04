CREATE TABLE `experience` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`role` text(255) NOT NULL,
	`company` text(255) NOT NULL,
	`location` text(255) NOT NULL,
	`industry` text(255) NOT NULL,
	`start_date` integer NOT NULL,
	`end_date` integer NOT NULL,
	`created_at` text DEFAULT (CURRENT_TIMESTAMP) NOT NULL
);
--> statement-breakpoint
CREATE TABLE `project` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`title` text(255) NOT NULL,
	`description` text(1023) NOT NULL,
	`image_url` text(1023) NOT NULL,
	`created_at` text DEFAULT (CURRENT_TIMESTAMP) NOT NULL
);
