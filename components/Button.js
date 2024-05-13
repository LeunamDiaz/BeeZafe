export default function Button({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="bg-white text-black border-2S border-gray-500 m-2"
    >
      Success (children)
    </button>
  );
}
