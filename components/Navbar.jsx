import Link from "next/link";

function Navbar() {
  return (
    <nav className="nav">
      <div className="logo">LG</div>
      <div className="nav-left">
        <Link href="/">Home</Link>
        <Link href="/">Events</Link>
        <Link href="/about">About</Link>
      </div>
      <div className="nav-right">
        <button id="login">&#8205; Login</button>
        <button id="signup">Sign Up&#8205;</button>
      </div>
    </nav>
  );
}

export default Navbar;