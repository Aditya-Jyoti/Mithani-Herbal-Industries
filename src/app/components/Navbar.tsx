export default function Navbar() {
  return (
    <nav className="bg-foreground text-background flex justify-between items-center py-4 px-4">
      <span className="text-xl">Mithani Herbal Industries</span>

      <div className="flex gap-4 items-center justify-center">
        <a href="#" className="">
          Home
        </a>
        <a href="#" className="">
          Products
        </a>
        <a href="#" className="">
          Contact
        </a>
        <a href="#" className="underline decoration-secondary underline-offset-4">
          Purchase
        </a>
      </div>
    </nav>
  );
}
