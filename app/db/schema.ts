import { integer, pgTable, serial, text, timestamp, varchar } from 'drizzle-orm/pg-core';

export const usersTable = pgTable('users_table', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
  age: integer('age').notNull(),
  email: text('email').notNull().unique(),
});

export const postsTable = pgTable('posts_table', {
  id: serial('id').primaryKey(),
  title: text('title').notNull(),
  content: text('content').notNull(),
  userId: integer('user_id')
    .notNull()
    .references(() => usersTable.id, { onDelete: 'cascade' }),
  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at')
    .notNull()
    .$onUpdate(() => new Date()),
});

export type InsertUser = typeof usersTable.$inferInsert;
export type SelectUser = typeof usersTable.$inferSelect;

export type InsertPost = typeof postsTable.$inferInsert;
export type SelectPost = typeof postsTable.$inferSelect;

// src/db/schema/wordBook.ts

export const wordBook = pgTable("wordBook", {
  id: serial("id").primaryKey(),
  word: varchar("word", { length: 255 }).notNull(), // 单词本身
  pronunciationUs: varchar("pronunciation_us", { length: 255 }), // 美式发音链接
  pronunciationUk: varchar("pronunciation_uk", { length: 255 }), // 英式发音链接
  meaning: text("meaning"), // 单词含义
  partOfSpeech: varchar("part_of_speech", { length: 50 }), // 词性
  etymology: text("etymology"), // 词源信息
  language: varchar("language", { length: 50 }).default("en"), // 语言标识
  category: varchar("category", { length: 100 }), // 单词类别
  createdAt: timestamp("created_at").defaultNow(), // 创建时间
  updatedAt: timestamp("updated_at").defaultNow().onUpdateNow(), // 更新时间
});
