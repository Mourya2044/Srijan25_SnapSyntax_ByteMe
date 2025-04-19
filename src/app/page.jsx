import { Download, Github, Instagram, Linkedin } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="pt-30 w-full h-screen flex items-center justify-center bg-gradient-to-r from-black to-purple-900"> {/* gradient left to right */}
      <div className="flex w-full h-full justify-center items-center">
        <div className="text-white w-1/2 h-full flex flex-col justify-center items-start p-10 gap-10">
          <h1 className="text-9xl">Byte Me</h1>
          <p className="text-lg">Welcome to my portfolio, where I showcase my projects and skills.</p>
        </div>
        <div className="text-white w-1/2 h-full flex items-center justify-center p-10">
          <div className="h-full w-full">
            <div className="rounded-full aspect-square w-20 bg-white flex justify-center items-center"><Download className="text-purple-500 w-10 h-10" /></div>
            <div className="rounded-full aspect-square w-1/2 bg-gradient-to-r to-white from-purple-900"></div>
          </div>
          <div className="flex flex-col gap-5">
            <Instagram className="text-white w-10 h-10" />
            <Linkedin className="text-white w-10 h-10" />
            <Github className="text-white w-10 h-10" />
          </div>
        </div>
      </div>
    </div>
  );
}
