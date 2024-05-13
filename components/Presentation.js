import React, { useState } from 'react';

export default function Presentation() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Function to toggle the menu
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
<section class="text-xl text-left px-20 max-w-[70ch] p-16 text-pretty mx-auto my-24 rounded bg-[#fff]">
  <img src="/logonegro.png" alt="Logo de Bee Zafe" class="w-28 mb-10 mx-auto" />
  <logo class="w-16 text-white m-auto mb-10"></logo>
  <h1
    class="text-4xl font-semibold text-center text-wrap mx-auto mb-10 tracking-wide text-black"
  >
    Bienvenidos/as<br /> a Bee Zafe
  </h1>
  <p className="text-justify text-black">Bee Zafe revoluciona la apicultura con colmenas inteligentes <strong>equipadas con IoT</strong>, garantizando un cuidado eficiente de las abejas.</p>
<br></br>

<p className="text-justify text-black">
  El proyecto integra tecnología y apicultura para un emocionante <strong>monitoreo en tiempo real</strong> del entorno y la salud de las abejas con sensores de temperatura, humedad, peso y sonido.
</p>
  <br></br>

  <p className="text-justify text-black">
  La renta de colmenas inteligentes ofrece tecnología de vanguardia <strong>sin inversión inicial significativa</strong> para los apicultores.
  </p>
</section>

        );
    }
    