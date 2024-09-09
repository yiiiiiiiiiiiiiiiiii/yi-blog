export default function MdxLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="col-span-10 col-start-2 lg:col-span-8 lg:col-start-3">
      <div className="prose dark:prose-invert max-w-none">{children}</div>
    </div>
  );
}
