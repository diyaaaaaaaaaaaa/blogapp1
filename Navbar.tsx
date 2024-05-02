import Link from "next/link";
import { useRouter } from "next/router";

interface NavbarProps {}

export default function Navbar(_: NavbarProps) {
  const router = useRouter();

  return (
    <nav>
      <ul>
        <li>
          <Link href="/">
            <a className={router.pathname === "/" ? "active" : ""}>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a className={router.pathname === "/about" ? "active" : ""}>About</a>
          </Link>
        </li>
        <li>
          <Link href="/posts">
            <a className={router.pathname === "/posts" ? "active" : ""}>Posts</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}