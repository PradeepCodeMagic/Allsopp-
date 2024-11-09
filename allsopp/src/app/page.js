"use client"
import Image from "next/image";
import styles from "./page.module.css";
import Header from "./Comman-Components/Header";
import FindPlace from "./Home-Components/FindPlace";
import './Home-Components/home.css'
import './Home-Components/homeResponsive.css'
import ThreeBox from "./Home-Components/ThreeBox";
import Private from "./Home-Components/Private";
import Sliders from "./Home-Components/Sliders";
import Discover from "./Home-Components/Discover";
import Exceptional from "./Home-Components/Exceptional";
import Gifs from "./Home-Components/Gifs";
import DownTreeBox from "./Home-Components/DownTreeBox";
import Footer from "./Comman-Components/Footer";

export default function Home() {
  return (
    <>
    <Header/>
    <FindPlace/>
    <ThreeBox/>
    <Private/>
    <Sliders/>
    <Discover/>
    <Exceptional/>
    <Gifs/>
    <DownTreeBox/>
    <Footer/>
      </>
  );
}
