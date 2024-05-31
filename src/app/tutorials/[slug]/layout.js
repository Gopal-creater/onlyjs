export default async function Layout({ children }) {
  return (
    <div className="flex gap-2">
      <div className="w-64 hidden lg:block">Side navigation</div>

      <div className="flex-1">{children}</div>
    </div>
  );
}
