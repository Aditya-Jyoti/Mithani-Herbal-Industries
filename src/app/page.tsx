import Bushes from "@/app/components/Bushes";
import ManSVG from "@/app/SVGs/ManSVG";
import DividerSVG from "@/app/SVGs/DividerSVG";
import TreeSVG from "@/app/SVGs/TreeSVG";

export default function Home() {
  return (
    <main className="w-full h-full">
      {/* splash section  */}
      <section className="bg-primary relative flex flex-col items-center justify-center h-[70vh]">
        <div className="flex justify-between w-[60%] mx-auto items-center">
          <div className="flex flex-col gap-4 ml-24 -mt-[23%]">
            <div className="text-7xl text-background font-bold tracking-wide flex flex-col ">
              <span>Mithani Herbal</span> <span>Industries</span>
            </div>
            <div className="text-xl text-secondary tracking-wider">
              <span>Discover a Healthier Alternative to Paan Masala</span>
            </div>
            <div>
              <button className="bg-secondary z-20 w-96 absolute h-8 text-foreground rounded-lg text-2xl hover:translate-x-[3px] transition-all ease-in-out duration-300 hover:translate-y-[3px] border-[1px] border-foreground">
                Learn More
              </button>
              <div className="bg-tertiary z-10 h-8 rounded-lg absolute w-96 translate-x-[6px] translate-y-[6px] border-[1px] border-foreground"></div>
            </div>
          </div>
        </div>

        <div className="w-[120%] flex justify-between absolute  h-full" >
          <TreeSVG className="-translate-y-12" />
          <TreeSVG className="translate-x-12"/>
        </div>

        <div className="absolute bottom-0 w-[100vw]">
          <div className="absolute bottom-0 z-[20] w-full h-60">
            <Bushes />
          </div>
          <DividerSVG
            className="absolute bottom-0"
            fillColor="var(--primary)"
          />
          <ManSVG className="absolute bottom-0 right-[15%] w-[30%]" />
          <DividerSVG
            className="absolute -bottom-1 rotate-180 z-[30]"
            fillColor="var(--background)"
          />
        </div>
      </section>
    </main>
  );
}
