export default function Search(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      viewBox="0 0 24 24"
      height="1em"
      width="1em"
      {...props}
    >
      <path stroke="none" d="M0 0h24v24H0z" />
      <path d="M19 11V8a2 2 0 00-2-2H5a2 2 0 00-2 2v5a2 2 0 002 2h5" />
      <path d="M18 15.5 A2.5 2.5 0 0 1 15.5 18 A2.5 2.5 0 0 1 13 15.5 A2.5 2.5 0 0 1 18 15.5 z" />
      <path d="M17.5 17.5L20 20" />
    </svg>
  );
}
