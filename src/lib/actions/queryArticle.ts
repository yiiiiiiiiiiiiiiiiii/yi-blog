"use server";

import prisma from "../db";
import { fullTextSearch } from "@prisma/client/sql";

export default async function queryArticle(keyword: string) {
  const result = await prisma.$queryRawTyped(fullTextSearch(keyword));

  return result;
}
