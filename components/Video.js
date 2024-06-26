export default function Button({ children, onClick }) {
  return (
    <section
      className="bg-black landing-section h-screen max-w-screen text-center relative overflow-hidden"
      data-header-color="black"
    >
      <div className="z-30 relative h-full flex flex-col">
        <header>
          <h2 className="text-white pt-40 text-[40px] font-sm">
            Disfrute de Bee Zafe
          </h2>
          <p className="text-white text-base">
            Conéctate con tus abejas como nunca antes
          </p>
        </header>
        <footer className="flex flex-col flex-grow flex-nowrap justify-end pb-20">
          <div>
            <a
              href="#"
              className="text-white border-[3px] border-white rounded font-sm px-12 py-2 bg-white/5 backdrop-blur-sm inline-block hover:bg-white hover:text-black transition-colors"
            >
              Programar una instalación
            </a>
          </div>
        </footer>
      </div>

      <div className="absolute top-0 bottom-0 h-full w-full z-10">
        {/* Superposición semitransparente */}
        <div className="absolute inset-0 bg-black/30"></div>
        {/* Vídeo */}
        <video
          className="object-center object-cover h-full w-full"
          autoPlay
          muted
          loop
          src="video.webm"
        ></video>
      </div>
    </section>
  );
}
