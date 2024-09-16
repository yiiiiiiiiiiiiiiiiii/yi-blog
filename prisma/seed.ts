import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
async function main() {
  const yi = await prisma.user.upsert({
    where: { email: "y18i@blog.com" },
    update: {},
    create: {
      email: "y18i@blog.com",
      name: "Yi",
    },
  });

  const updateMany = await prisma.article.createMany({
    data: [
      {
        title: "First Article",
        describe: "First Article",
        content: "http://localhost:3000/markdown/NEXT.mdx",
        authorId: yi.id,
      },
      {
        title: "Second Article",
        describe: "Second Article",
        content: "http://localhost:3000/markdown/React19Update.mdx",
        authorId: yi.id,
      },
      {
        title: "Third Article",
        describe: "Third Article",
        content: "http://localhost:3000/markdown/ReactHooks.mdx",
        authorId: yi.id,
      },
      {
        title: "Fourth Article",
        describe: "Fourth Article",
        content: "http://localhost:3000/markdown/Scheduler.mdx",
        authorId: yi.id,
      },
    ],
    skipDuplicates: true,
  });

  console.log({ yi, updateMany });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
