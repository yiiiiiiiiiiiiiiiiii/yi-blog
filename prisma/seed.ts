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
        title: "React 19 RC （GPT 生成测试内容）",
        describe: `React 19 RC 现已在 npm 上发布！在我们的 React 19 RC 升级指南中，我们分享了逐步的说明，帮助您将应用程序升级到 React 19。在这篇文章中，我们将概述 React 19 中的新特性，以及您如何采纳这些新特性。React 19 中的新内容 React 19 的改进 如何升级 有关重大变化的列表，请参阅升级指南。`,
        content: "https://www.y18i.xyz/markdown/React19Update.mdx",
        authorId: yi.id,
        top: true,
      },
      {
        title: "React Hooks （GPT 生成测试内容）",
        describe:
          "React Hooks 是 React 16.8 版本引入的新特性，旨在使函数组件具备状态管理和副作用处理的能力。要深入了解 React Hooks 的原理，我们需要从框架源码的角度来分析它的实现机制。",
        content: "https://www.y18i.xyz/markdown/ReactHooks.mdx",
        authorId: yi.id,
        top: true,
      },
      {
        title: "React 调度器原理 （GPT 生成测试内容）",
        describe:
          "React 是一个功能强大的前端库，其核心在于高效地更新用户界面。为了实现高效的更新，React 引入了调度器（Scheduler）机制，让我们深入挖掘这一机制的底层原理。",
        content: "https://www.y18i.xyz/markdown/ReactScheduler.mdx",
        authorId: yi.id,
      },
      {
        title: "Webpack 原理 （GPT 生成测试内容）",
        describe:
          "Webpack 是一个现代 JavaScript 应用程序的静态模块打包工具。它的主要功能是将项目中的各种资源（如 JavaScript、CSS、图片等）整合成一个或多个打包文件，以便在浏览器中高效加载。",
        content: "https://www.y18i.xyz/markdown/Webpack.mdx",
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
