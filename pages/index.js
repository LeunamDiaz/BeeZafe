import toast, { Toaster } from "react-hot-toast";
import Button from "@/components/Button";
import Video from "@/components/Video";
import Navbar from "@/components/Navbar";
import Presentation from "@/components/Presentation";
import Bento from "@/components/Bento";
import Product from "@/components/Product";
import Image from "next/image";
import { Inter } from "next/font/google";
import LoginButton from "@/components/LoginButton";

export default function Demo() {
  const notify = () => toast.success("Hello, world!");
  const notifyerror = () => toast.error("Hello, world!");
  const notifyloading = () => toast.loading("Hello, world!");


  return (
    <>
      <Navbar />
      <Video />
      <Product />

      <Presentation />
      <Bento />

      <Toaster />
      <p>Aca va todo el html</p>
      <Button onClick={notify}>Notify</Button>
      <br />
      <Button onClick={notifyerror}>Notify</Button>
      <h1>Next.js + NextAuth.js</h1>
      <LoginButton />
    </>
  );
}
