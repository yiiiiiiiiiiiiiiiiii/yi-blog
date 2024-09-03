import Welcome from "@/markdown/welcome.mdx";

export default function Page({ params }: { params: { id: string } }) {
  return (
    <div className="w-6/12 md:w-8/12 sm:w-10/12 mx-auto mt-8">
      <Welcome />
    </div>
  );
}
