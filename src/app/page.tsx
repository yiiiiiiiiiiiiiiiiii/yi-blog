import Photos from "@/components/Photos";
import Introduction from "@/components/Introduction";
import BlogList from "@/components/BlogList";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-start items-center">
      <div className="self-start mb-20">
        <Introduction />
      </div>
      {/* <Photos /> */}
      <div className="mb-16">
        <BlogList />
      </div>
    </div>
  );
}
