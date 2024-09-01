const blogDataList = [
  {
    image: {
      src: "/images/photos/image-1.jpg",
    },
    title: "Staff Engineer, Algolia",
    date: "30 April 2024",
    detail: `Tailwind CSS is the only framework that I've seen scale on large
          teams. It’s easy to customize, adapts to any design, and the build
          size is tiny.`,
  },
  {
    image: {
      src: "/images/photos/image-1.jpg",
    },
    title: "Staff Engineer, Algolia",
    date: "30 April 2024",
    detail: `Tailwind CSS is the only framework that I've seen scale on large
          teams. It’s easy to customize, adapts to any design, and the build
          size is tiny.`,
  },
  {
    image: {
      src: "/images/photos/image-1.jpg",
    },
    title: "Staff Engineer, Algolia",
    date: "30 April 2024",
    detail: `Tailwind CSS is the only framework that I've seen scale on large
          teams. It’s easy to customize, adapts to any design, and the build
          size is tiny.`,
  },
];

export default function BlogList() {
  return (
    <div className="flex flex-col justify-start items-center">
      <div className="columns-3 gap-20">
        {blogDataList.map((blogData, ndx) => {
          return <BlogItem key={ndx} {...blogData} />;
        })}
      </div>
      <div className=""></div>
    </div>
  );
}

interface IBlogItemProps {
  image: {
    src: string;
    alt?: string;
  };
  title: string;
  date: string;
  detail: string;
}

function BlogItem({ image, title, date, detail }: IBlogItemProps) {
  return (
    <div className="flex flex-col justify-start">
      <img src={image.src} className="w-full aspect-[4/3] mb-4" alt="" />
      <div className="flex flex-col justify-start">
        <div className="text-xl font-medium mb-4">{title}</div>
        <div className="text-sm italic mb-4">{date}</div>
        <div className="text-xs">{detail}</div>
      </div>
    </div>
  );
}
