import Link from "next/link";
import Image from "next/image";
import logoImg from "@/assets/logo.png";
import classes from "./main-header.module.css";
import MainHeaderBackground from "./main-header-background";
export default function MainHeader() {
  return (
    <>
      <MainHeaderBackground />
      <header className={classes.header}>
        <p>
          <Link href="/" className={classes.logo}>
            <Image src={logoImg} alt="A plate of food" priority />
            Next Level Food
          </Link>
        </p>
        <nav className={classes.nav}>
          <ul>
            <li>
              <Link href={"/meals"}>Browse Meals</Link>
              <Link href={"/community"}>Foodies Comminity</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
