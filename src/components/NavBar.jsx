"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";


const NavBar = () => {



    return (
        <nav
            className="text-white fixed top-0 w-full transition-all duration-300 ease-in-out"
        >
            <div className="m-5 p-1 sm:p-2 lg:p-1 bg-white/50 backdrop-blur-md shadow-lg rounded-full text-lg">
                <div className="flex justify-between items-center px-5 py-3">
                    <Link
                        href="/"
                        className="transition-all ease-in-out duration-300 hover:scale-110  px-2 py-1 rounded-sm"
                    >
                        Byte Me
                    </Link>
                    <div className=" flex gap-20">
                        <Link
                            href="/"
                            className="transition-all ease-in-out duration-300 hover:scale-110  px-2 py-1 rounded-sm"
                        >
                            Home
                        </Link>
                        <Link
                            href="/products"
                            className="transition-all ease-in-out duration-300 hover:scale-110  px-2 py-1 rounded-sm"
                        >
                            Products
                        </Link>
                        <Link
                            href="/about"
                            className="transition-all ease-in-out duration-300 hover:scale-110  px-2 py-1 rounded-sm"
                        >
                            About
                        </Link>
                        <Link
                            href="/contact"
                            className="transition-all ease-in-out duration-300 hover:scale-110  px-2 py-1 rounded-sm"
                        >
                            Contact
                        </Link>
                    </div>
                    <Button variant="outline" className="bg-white/80 rounded-full text-xl text-black transition-all ease-in-out duration-300">
                        <Link href="/contact">Contact Me</Link>
                    </Button>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
