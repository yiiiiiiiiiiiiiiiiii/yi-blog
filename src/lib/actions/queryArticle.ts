"use server";

import prisma from "../db";

export default async function queryArticle(keyword: string) {
  const result = await prisma.article.findMany({
    where: {
      describe: {
        search: keyword,
      },
    },
  });

  return result;
}
