import { FaPlay } from "react-icons/fa";
import { IoInformationCircle } from "react-icons/io5";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className=" w-screen aspect-video pt-[20%] px-20 absolute text-white bg-gradient-to-r from-black">
      <h1 className=" text-6xl font-bold">{title}</h1>
      <p className="  hidden  md:inline-block py-6 text-lg w-1/4">{overview}</p>
      <div className=" flex items-center gap-x-2">
        <button className="  bg-white text-black p-7 px-12 py-1 text-lg rounded-lg hover:bg-opacity-80 flex">
        <FaPlay className=" h-6 w-6 md:h-6 md:w-6"/> Play
        </button>
        <button className=" mx-2 bg-gray-500 text-white  p-10 px-12 py-1 text-lg bg-opacity-50 rounded-lg hover:bg-opacity-80 flex">
        <IoInformationCircle className=" h-6 w-6 md:h-6 md:w-6" /> More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
