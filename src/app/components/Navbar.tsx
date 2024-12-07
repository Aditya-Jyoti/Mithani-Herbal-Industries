export default function Navbar() {
  return (
    <nav className="bg-foreground text-background flex justify-between items-center p-2 px-4">
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
        <a href="#" className="bg-secondary px-4 py-1 rounded-lg text-foreground hover:bg-orange-400 transition-all duration-300">
          Purchase
        </a>
      </div>
    </nav>
  );
}
