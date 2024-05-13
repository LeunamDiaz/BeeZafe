import toast, { Toaster } from "react-hot-toast";
import Button from "@/components/Button";
import Video from "@/components/Video";
import Navbar from "@/components/Navbar";
import Presentation from "@/components/Presentation";


export default function Demo() {
  const notify = () => toast.success("Hello, world!");
  const notifyerror = () => toast.error("Hello, world!");
  const notifyloading = () => toast.loading("Hello, world!");

  return (
    <>
      <Navbar />
      <Video />
      <Presentation />


      <Toaster />
      <p>Aca va todo el html</p>
      <Button onClick={notify}>Notify</Button>
      <br />
      <Button onClick={notifyerror}>Notify</Button>
    </>
  );
}
