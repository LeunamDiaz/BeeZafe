import React, { useState } from "react";
import Image from "next/image";

export default function Presentation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Función para alternar el menú
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <section className="p-4 lg:p-8 dark:bg-[#171717] dark:text-gray-800">
      <div className="container mx-auto">
        <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
          <div className="w-full lg:w-1/2 relative">
            <img
              src="/miel.jpg"
              alt=""
              className="w-full sm:h-96 object-cover sm:object-top"
            />
          </div>
          <div className="flex flex-col justify-center flex-1 p-6 dark:bg-black">
            <span className="text-xs uppercase text-white">
              Join, it's free
            </span>
            <h3 className="text-3xl font-bold text-white">
              We're not reinventing the wheel
            </h3>
            <p className="my-6 text-white">
            Recibe información sobre la producción de miel que se ha generado.
            </p>
            <button type="button" className="self-start">
              Action
            </button>
          </div>
        </div>
        <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row-reverse">
          <div className="w-full lg:w-1/2 relative">
            <img
              src="https://source.unsplash.com/640x480/?1"
              alt=""
              className="w-full sm:h-96 object-cover sm:object-top"
            />
          </div>
          <div className="flex flex-col justify-center flex-1 p-6 dark:bg-black">
            <span className="text-xs uppercase text-white">
              Join, it's free
            </span>
            <h3 className="text-3xl font-bold text-white">
              We're not reinventing the wheel
            </h3>
            <p className="my-6 text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
              aliquam possimus quas, error esse quos.
            </p>
            <button type="button" className="self-start">
              Action
            </button>
          </div>
        </div>
        <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
          <div className="w-full lg:w-1/2 relative">
            <img
              src="https://source.unsplash.com/640x480/?1"
              alt=""
              className="w-full sm:h-96 object-cover sm:object-top"
            />
          </div>
          <div className="flex flex-col justify-center flex-1 p-6 dark:bg-black">
            <span className="text-xs uppercase text-white">
              Join, it's free
            </span>
            <h3 className="text-3xl font-bold text-white">
              We're not reinventing the wheel
            </h3>
            <p className="my-6 dark:text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
              aliquam possimus quas, error esse quos.
            </p>
            <button type="button" className="self-start">
              Action
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
