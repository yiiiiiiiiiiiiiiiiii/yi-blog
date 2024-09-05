import Welcome from "@/markdown/welcome.mdx";

export default function Page({ params }: { params: { id: string } }) {
  return (
    <div className="">
      <Welcome />
    </div>
  );
}
