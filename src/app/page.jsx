import Image from "next/image";

export default function Home() {
  return (
    <div className="pt-30 w-full h-screen flex items-center justify-center bg-gradient-to-r from-black to-purple-900"> {/* gradient left to right */}
      <div className="flex w-full h-full justify-center items-center">
        <div className="text-white w-1/2 h-full flex flex-col justify-center items-start p-10">
          <h1>Byte Me</h1>
          <p>Welcome to my portfolio, where I showcase my projects and skills.</p>
        </div>
        <div className="text-white w-1/2 h-full">Welcome to my portfolio!</div>
      </div>
    </div>
  );
}
