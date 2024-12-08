import BushSVG from "@/app/SVGs/BushSVG";
const layerConfigurations = [
  {
    color: "var(--primary-light1)",
    bushes: [
      { height: 300, marginLeft: -10, marginTop: 2 },
      { height: 200, marginLeft: 2, marginTop: 2 },
      { height: 220, marginLeft: 0, marginTop: 0 },
      { height: 210, marginLeft: 10, marginTop: 2 },
      { height: 230, marginLeft: 22, marginTop: 1 },
      { height: 220, marginLeft: 35, marginTop: 3 },
      { height: 200, marginLeft: 46, marginTop: 0 },
      { height: 210, marginLeft: 52, marginTop: 2 },
      { height: 200, marginLeft: 64, marginTop: 2 },
      { height: 220, marginLeft: 74, marginTop: 0 },
      { height: 230, marginLeft: 86, marginTop: 3 },
      { height: 220, marginLeft: 95, marginTop: 1 },
      { height: 200, marginLeft: 105, marginTop: 0 },
      { height: 300, marginLeft: 100, marginTop: 2 },
    ],
  },
  {
    color: "var(--primary-light2)",
    bushes: [
      { height: 210, marginLeft: -16, marginTop: 2 },
      { height: 220, marginLeft: 0, marginTop: 0 },
      { height: 215, marginLeft: 10, marginTop: 2 },
      { height: 225, marginLeft: 22, marginTop: 1 },
      { height: 230, marginLeft: 35, marginTop: 3 },
      { height: 215, marginLeft: 46, marginTop: 0 },
      { height: 210, marginLeft: 52, marginTop: 2 },
      { height: 220, marginLeft: 64, marginTop: 2 },
      { height: 230, marginLeft: 74, marginTop: 0 },
      { height: 210, marginLeft: 86, marginTop: 3 },
      { height: 220, marginLeft: 95, marginTop: 1 },
      { height: 215, marginLeft: 105, marginTop: 0 },
    ],
  },
  {
    color: "var(--primary-light3)",
    bushes: [
      { height: 220, marginLeft: -12, marginTop: 2 },
      { height: 230, marginLeft: 0, marginTop: 4 },
      { height: 225, marginLeft: 10, marginTop: 2 },
      { height: 220, marginLeft: 22, marginTop: 1 },
      { height: 235, marginLeft: 35, marginTop: 3 },
      { height: 220, marginLeft: 45, marginTop: 4 },
      { height: 210, marginLeft: 52, marginTop: 1 },
      { height: 215, marginLeft: 64, marginTop: 2 },
      { height: 230, marginLeft: 74, marginTop: 4 },
      { height: 225, marginLeft: 86, marginTop: 3 },
      { height: 220, marginLeft: 95, marginTop: 1 },
      { height: 215, marginLeft: 105, marginTop: 5 },
    ],
  },
];

export default function Bushes() {
  return (
    <div
      className="relative overflow-hidden w-full h-full flex"
      style={{
        backgroundColor: "var(--primary-background)",
      }}
    >
      {layerConfigurations.map((layer, layerIndex) =>
        layer.bushes.map((bush, bushIndex) => (
          <BushSVG
            key={`${layerIndex}-${bushIndex}`}
            className="absolute"
            style={{
              height: `${bush.height}px`,
              left: `${bush.marginLeft + layerIndex * 5}rem`,
              bottom: `-${bush.marginTop * 2}rem`,
            }}
            fillColor={layer.color}
          />
        ))
      )}
    </div>
  );
}
