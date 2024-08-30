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
];

export default function BlogList() {
  return (
    <div>
      {blogDataList.map((blogData, ndx) => {
        return <BlogItem key={ndx} {...blogData} />;
      })}
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
    <div className="flex justify-start h-48">
      <img src={image.src} className="h-full" alt="" />
      <div className="flex flex-col">
        <div className="text-base font-sans font-medium">{title}</div>
        <div className="text-sm font-mono font-light">{date}</div>
        <div>{detail}</div>
      </div>
    </div>
  );
}
