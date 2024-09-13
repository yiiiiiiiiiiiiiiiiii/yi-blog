import IconReact from "@/components/SvgIcon/React";
import IconNext from "@/components/SvgIcon/NEXT";
import IconTailWind from "@/components/SvgIcon/Tailwind";
import IconNpm from "@/components/SvgIcon/Npm";
import IconWebpack from "@/components/SvgIcon/Webpack";
import IconNodejs from "@/components/SvgIcon/Nodejs";
import IconExpress from "@/components/SvgIcon/Express";
import IconPostgres from "@/components/SvgIcon/Postgres";
import IconPrisma from "@/components/SvgIcon/Prisma";
import IconDocker from "@/components/SvgIcon/Docker";

const abilityInfoList = [
  {
    name: "React",
    link: "https://reactjs.org/",
    component: <IconReact className="w-8 h-8 mr-2" />,
  },
  {
    name: "NEXT.js",
    link: "https://nextjs.org/",
    component: <IconNext className="w-8 h-8 mr-2" />,
  },
  {
    name: "tailwind",
    link: "https://tailwindcss.com/",
    component: <IconTailWind className="w-8 h-8 mr-2" />,
  },
  {
    name: "npm",
    link: "https://www.npmjs.com/",
    component: <IconNpm className="w-8 h-8 mr-2" />,
  },
  {
    name: "webpack",
    link: "https://webpack.js.org/",
    component: <IconWebpack className="w-8 h-8 mr-2" />,
  },
  {
    name: "Nodejs",
    link: "https://nodejs.org/en/",
    component: <IconNodejs className="w-8 h-8 mr-2" />,
  },
  {
    name: "Express",
    link: "https://expressjs.com/",
    component: <IconExpress className="w-8 h-8 mr-2" />,
  },
  {
    name: "PostgreSQL",
    link: "https://www.postgresql.org/",
    component: <IconPostgres className="w-8 h-8 mr-2" />,
  },
  {
    name: "Prisma",
    link: "https://www.prisma.io/",
    component: <IconPrisma className="w-8 h-8 mr-2" />,
  },
  {
    name: "Docker",
    link: "https://www.docker.com/",
    component: <IconDocker className="w-8 h-8 mr-2" />,
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
              {ability.component} {ability.name}
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
