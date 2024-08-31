import clsx from "clsx";

const iamgesURL = [
  "/images/photos/image-1.jpg",
  "/images/photos/image-2.jpg",
  "/images/photos/image-3.jpg",
  "/images/photos/image-4.jpg",
  "/images/photos/image-5.jpg",
];

export default function Photos() {
  let rotations = [
    "rotate-2",
    "-rotate-2",
    "rotate-2",
    "rotate-2",
    "-rotate-2",
  ];

  return (
    <div className="mt-16 sm:mt-20">
      <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
        {iamgesURL.map((src, imageIndex) => (
          <div
            key={src}
            className={clsx(
              "relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl",
              rotations[imageIndex % rotations.length]
            )}
          >
            <img
              src={src}
              alt=""
              sizes="(min-width: 640px) 18rem, 11rem"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
