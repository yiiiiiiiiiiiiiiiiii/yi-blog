"use server";

import prisma from "../db";

export default async function queryArticle(keyword: string) {
  const result = await prisma.$queryRawUnsafe(
    `SELECT * FROM "Article" WHERE to_tsvector('chinese_zh', "Article"."describe") @@ to_tsquery('chinese_zh', '${keyword}');`
  );

  return result;
}
