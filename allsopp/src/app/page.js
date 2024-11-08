"use client"
import Image from "next/image";
import styles from "./page.module.css";
import Header from "./Comman-Components/Header";
import FindPlace from "./Home-Components/FindPlace";
import './Home-Components/home.css'
import './Home-Components/homeResponsive.css'
import ThreeBox from "./Home-Components/ThreeBox";

export default function Home() {
  return (
    <>
    <Header/>
    <FindPlace/>
    <ThreeBox/>
    </>
  );
}
