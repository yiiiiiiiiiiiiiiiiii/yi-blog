import clsx from "clsx";

export default function Loading(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      height="1em"
      width="1em"
      className={clsx("animate-spin", props.className)}
      {...props}
    >
      <path d="M12 4V2A10 10 0 002 12h2a8 8 0 018-8z" />
    </svg>
  );
}
