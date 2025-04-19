"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";


const NavBar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            setIsScrolled(window.scrollY > 50);

            console.log(window.scrollY, isScrolled);
        })

        return () => {

        }
    },)



    return (
        <nav
            className="text-white fixed top-0 w-full transition-all duration-300 ease-in-out bg-white/50"
        >
            <div className="mx-auto p-1 sm:p-2 lg:p-1 rounded-full">
                <div className="flex justify-around items-center ">
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
                    <Button variant="outline" className="bg-blue-500 text-white hover:bg-blue-600 transition-all ease-in-out duration-300">
                        <Link href="/login">Contact Me</Link>
                    </Button>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
