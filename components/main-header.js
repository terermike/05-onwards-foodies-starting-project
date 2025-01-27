import Link from "next/link";
import logoImg from "@/assets/logo.png";
export default function MainHeader() {
  return (
    <>
      <p>
        <Link href="/">
          <img src={logoImg.src} alt="A plate of food" />
          Next Level Food
        </Link>
      </p>
      <nav>
        <ul>
          <li>
            <Link href={"/meals"}>Browse Meals</Link>
            <Link href={"/community"}>Foodies Comminity</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
