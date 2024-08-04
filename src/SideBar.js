import { useCallback, useState } from "react";
import { ReactComponent as ViewAllSvg } from "./view-all.svg";

const dataNearYou = [
  {
    type: "Garbage",
    date: "10 Aug 23",
    address: "Datta Mandir, Viman Nagar",
    ward: "Wadgao Sheri",
    image: "https://picsum.photos/200?random=1",
  },
  {
    type: "Pothole",
    date: "10 Aug 23",
    address: "Datta Mandir, Viman Nagar",
    ward: "Wadgao Sheri",
    image: "https://picsum.photos/200?random=2",
  },
  {
    type: "Water-Logging",
    date: "10 Aug 23",
    address: "Datta Mandir, Viman Nagar",
    ward: "Wadgao Sheri",
    image: "https://picsum.photos/200?random=3",
  },
  {
    type: "Illegal Banner",
    date: "10 Aug 23",
    address: "Datta Mandir, Viman Nagar",
    ward: "Wadgao Sheri",
    image: "https://picsum.photos/200?random=4",
  },
  {
    type: "Water-Logging",
    date: "10 Aug 23",
    address: "Datta Mandir, Viman Nagar",
    ward: "Wadgao Sheri",
    image: "https://picsum.photos/200?random=5",
  },
  {
    type: "Garbage",
    date: "10 Aug 23",
    address: "Datta Mandir, Viman Nagar",
    ward: "Wadgao Sheri",
    image: "https://picsum.photos/200?random=6",
  },
  {
    type: "Garbage",
    date: "10 Aug 23",
    address: "Datta Mandir, Viman Nagar",
    ward: "Wadgao Sheri",
    image: "https://picsum.photos/200?random=7",
  },
  {
    type: "Garbage",
    date: "10 Aug 23",
    address: "Datta Mandir, Viman Nagar",
    ward: "Wadgao Sheri",
    image: "https://picsum.photos/200?random=8",
  },
  {
    type: "Garbage",
    date: "10 Aug 23",
    address: "Datta Mandir, Viman Nagar",
    ward: "Wadgao Sheri",
    image: "https://picsum.photos/200?random=9",
  },
];

const rankingData = [
  {
    name: "1. Bawdhan",
    color: "#DEF3FF",
  },
  {
    name: "2. Erandwane",
    color: "#E5F7D8",
  },
  {
    name: "3. Aundh-Balewadi",
    color: "#FFF4D0",
  },
  {
    name: "4. Mahatma Phule Mandai",
    color: "#E9E9FF",
  },
  {
    name: "5. Rasta Peth",
    color: "#FFDEFC",
  },
];

const ScrollableDiv = ({ children }) => {
  const [height, setHeight] = useState(null);
  const div = useCallback((node) => {
    if (node !== null) {
      setHeight(node.getBoundingClientRect().height);
    }
  }, []);

  return (
    <div ref={div} className="flex-auto flex w-full h-full py-2">
      {height && (
        <div
          className="flex w-full overflow-y-scroll min-h-min"
          style={{ height }}
        >
          {children}
        </div>
      )}
    </div>
  );
};

const CardView = ({ title, renderSection }) => {
  return (
    <div className="h-full p-4 border border-shahar rounded-xl">
      <div className="flex flex-col h-full">
        <p className="font-semibold">{title}</p>
        <ScrollableDiv>{renderSection}</ScrollableDiv>
        <button className="bg-primary rounded-md p-3 mb-4 flex justify-center items-center">
          <ViewAllSvg />
        </button>
      </div>
    </div>
  );
};

const SideBar = () => {
  return (
    <div className="p-4 w-full h-full">
      <div className="h-3/5 w-full pb-2">
        <CardView
          title="Data Near You"
          renderSection={
            <div className="w-full flex flex-col">
              {dataNearYou.map((rd) => (
                <div className="flex mb-2">
                  <img
                    alt="img"
                    className="w-20 h-20 mr-2 rounded-xl"
                    src={rd.image}
                  />
                  <div className="flex-1 color-shahar">
                    <p className="text-sm font-semibold">{`Category: ${rd.type}`}</p>
                    <p className="text-xs">{`Date: ${rd.date}`}</p>
                    <p className="text-xs">{`Address: ${rd.address}`}</p>
                    <p className="text-xs">{`Ward: ${rd.ward}`}</p>
                  </div>
                </div>
              ))}
            </div>
          }
        />
      </div>
      <div className="h-2/5 w-full pt-2">
        <CardView
          title="Ranking"
          renderSection={
            <div className="w-full flex flex-col">
              {rankingData.map((rd) => (
                <div
                  className="mb-2 p-2 rounded-md"
                  style={{ backgroundColor: rd.color }}
                >
                  {rd.name}
                </div>
              ))}
            </div>
          }
        />
      </div>
    </div>
  );
};

export default SideBar;
