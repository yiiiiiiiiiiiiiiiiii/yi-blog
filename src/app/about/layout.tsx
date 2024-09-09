export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="container mx-auto grid grid-cols-12 mt-8 mb-36">
      <div className="col-span-10 col-start-2 lg:col-span-8 lg:col-start-3">
        {children}
      </div>
    </div>
  );
}
