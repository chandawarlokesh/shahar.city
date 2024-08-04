import { ReactComponent as SettingSvg } from "./setting.svg";
import { ReactComponent as GarbageSvg } from "./garbage.svg";
import { ReactComponent as PotholesSvg } from "./potholes.svg";
import { ReactComponent as BrokenFootpathsSvg } from "./broken-footpaths.svg";
import { ReactComponent as IllegalFlexesSvg } from "./Illegal-flexes.svg";
import { ReactComponent as WaterLoggingSvg } from "./water-logging.svg";

const ButtonIcon = ({ icon: Icon }) => {
  return (
    <div>
      <button className="flex justify-between items-center">
        <Icon alt="setting" className="h-9" src={GarbageSvg} />
      </button>
    </div>
  );
};

const AppFooter = () => {
  return (
    <div className="flex w-full justify-between items-center absolute bottom-0 z-500 mb-6">
      <button className="ml-12 w-16 h-16 bg-primary rounded-xl flex justify-center items-center">
        <SettingSvg />
      </button>
      <div className="ml-6 mr-12 flex h-16 justify-between items-center px-6 bg-white flex-1 rounded-xl">
        <ButtonIcon icon={GarbageSvg} />
        <ButtonIcon icon={PotholesSvg} />
        <ButtonIcon icon={BrokenFootpathsSvg} />
        <ButtonIcon icon={IllegalFlexesSvg} />
        <ButtonIcon icon={WaterLoggingSvg} />
      </div>
    </div>
  );
};

export default AppFooter;
