import BentoItem from "@/components/BentoItem";

export default function Button({ children, onClick }) {
  return (
    <div>
      <div className="relative flex flex-col-reverse py-16 lg:pt-0 lg:flex-col lg:pb-0 bg-black">
        <div className="inset-y-0 top-0 right-0 z-0 w-full max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0">
          <svg
            className="absolute left-0 hidden h-full text-white transform -translate-x-1/2 lg:block z-10"
            viewBox="0 0 100 100"
            fill="currentColor"
            preserveAspectRatio="none slice"
          >
            <path d="M50 0H100L50 100H0L50 0Z" fill="#171717" />
          </svg>
          <div className="absolute inset-0 bg-black/40"></div>
          <img
            className="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full"
            src="/miel.jpg"
            alt=""
          />
        </div>
        <div className="relative flex flex-col items-start w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl">
          <div className="mb-16 lg:my-[100px] lg:max-w-lg lg:pr-5">
            <p className="inline-block px-3 py-px mb-4 text-xs font-bold tracking-wider text-amber-500 uppercase rounded-full bg-teal-accent-400">
              Bee Zafe
            </p>
            <h2 className="mb-5 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
              Poliniza el futuro
            </h2>
            <p className="pr-5 text-base text-white md:text-lg">
              Revolucionemos la apicultura con colmenas inteligentes equipadas
              con IoT. Monitoreo en tiempo real del bienestar de las abejas.
            </p>
          </div>
        </div>
      </div>
      <section className="md:p-8 dark:bg-black text-white">
        <div className="container mx-auto  text-center">
          <h2 className="text-5xl font-bold">Built to empower every team</h2>
          <p className="dark:text-amber-500 mt-2">Libero minima optio qui</p>
        </div>
        <div className="container mx-auto grid justify-center gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col items-center p-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="orange"
              className="w-8 h-8 dark:text-violet-600"
            >
              <path
                fillRule="evenodd"
                d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                clipRule="evenodd"
              ></path>
            </svg>
            <h3 className="my-3 text-3xl font-semibold">Product</h3>
            <div className="space-y-1 leading-tight">
              <p>Similique quas ea veniam</p>
              <p>Tempore quasi porro</p>
              <p>Blanditiis aut mollitia ex</p>
            </div>
          </div>
          <div className="flex flex-col items-center p-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="orange"
              className="w-8 h-8 dark:text-violet-600"
            >
              <path
                fillRule="evenodd"
                d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                clipRule="evenodd"
              ></path>
            </svg>
            <h3 className="my-3 text-3xl font-semibold">Product</h3>
            <div className="space-y-1 leading-tight">
              <p>Similique quas ea veniam</p>
              <p>Tempore quasi porro</p>
              <p>Blanditiis aut mollitia ex</p>
            </div>
          </div>
          <div className="flex flex-col items-center p-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="orange"
              className="w-8 h-8 dark:text-violet-600"
            >
              <path
                fillRule="evenodd"
                d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                clipRule="evenodd"
              ></path>
            </svg>
            <h3 className="my-3 text-3xl font-semibold">Product</h3>
            <div className="space-y-1 leading-tight">
              <p>Similique quas ea veniam</p>
              <p>Tempore quasi porro</p>
              <p>Blanditiis aut mollitia ex</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
