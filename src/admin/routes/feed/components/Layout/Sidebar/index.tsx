import { useNavigate } from 'react-router-dom';
import SideBarItems from './SideBarItems';

const SideBar = () => {
  const navigate = useNavigate();
  return (
    <div className="basis-1/6 flex flex-col py-3.5 px-base border-r-2">
      {SideBarItems.map((item) => (
        <button
          key={Number(Math.random())}
          onClick={() => navigate(item.link)}
          type="button"
          title={item.title}
          className="p-2 flex items-center gap-3 text-gray-500 hover:bg-[#f3f4f6] group hover:rounded-lg hover:text-black"
        >
          {item.icon}
          {item.title}
        </button>
      ))}
    </div>
  );
};

export default SideBar;
