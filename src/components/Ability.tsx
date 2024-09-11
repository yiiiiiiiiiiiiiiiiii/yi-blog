const abilityInfoList = [
  {
    name: "React",
    link: "https://reactjs.org/",
  },
  {
    name: "NEXT.js",
    link: "https://nextjs.org/",
  },
  {
    name: "tailwind",
    link: "https://tailwindcss.com/",
  },
  {
    name: "npm",
    link: "https://www.npmjs.com/",
  },
  {
    name: "webpack",
    link: "https://webpack.js.org/",
  },
  {
    name: "Nodejs",
    link: "https://nodejs.org/en/",
  },
  {
    name: "Express",
    link: "https://expressjs.com/",
  },
  {
    name: "PostgreSQL",
    link: "https://www.postgresql.org/",
  },
  {
    name: "Prisma",
    link: "https://www.prisma.io/",
  },
  {
    name: "Docker",
    link: "https://www.docker.com/",
  },
];
export default function Ability() {
  return (
    <div className="flex flex-col items-center justify-start w-full mb-24">
      <div className="w-full mx-auto mb-10 text-center font-bold">
        Technical ability | 技术能力
      </div>
      <div className="w-full justify-center grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-x-10 gap-y-5">
        {abilityInfoList.map((ability, index) => (
          <a
            key={index}
            href={ability.link}
            target="_blank"
            rel="noreferrer"
            className=" hover:text-blue-500 font-medium"
          >
            <div className="flex items-center justify-center" key={index}>
              {ability.name}
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
