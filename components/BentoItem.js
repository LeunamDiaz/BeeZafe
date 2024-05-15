export default function Button({ children, onClick }) {
  return (
    <article
      class={`
  col-span-5
  relative rounded-xl
  backdrop-blur-md
  border border-black/10
  shadow-inner shadow-white/10
  overflow-hidden
  group
`}
    >
      <div
        class="absolute bottom-0 top-0 z-10 h-full w-full
    bg-gradient-to-b from-transparent from-40% via-[#151836]/50 to-[#151836]/80"
      ></div>

      <slot name="image" />

      <div class="relative z-20 flex h-full select-none flex-col justify-end gap-1 p-4 text-lg md:p-6">
        <h2 class="mb-4 text-balance text-3xl font-semibold uppercase text-white">
          title
        </h2>

        <h3 class="-mt-4 mb-4 text-3xl font-semibold text-sky-200/80">
          subtitle
        </h3>

        <slot name="content" />
      </div>
    </article>
  );
}
