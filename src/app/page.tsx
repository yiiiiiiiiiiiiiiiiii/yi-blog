// import Photos from "@/components/Photos";
import Record from "@/components/Record";
import Introduction from "@/components/Introduction";
import Ability from "@/components/Ability";
import QA from "@/components/QA";
import Contact from "@/components/Contact";
import HomeOverView from "@/components/Blog/HomeOverView";
import Feature from "@/components/Feature";

export default function Page() {
  return (
    <>
      <main className="container mx-auto">
        <Introduction />
        <Ability />
        <Feature />
        <HomeOverView />
        <Contact />
        <QA />
      </main>
      <Record />
    </>
  );
}
