import Link from "next/link";
import './Navigation.css'

const Navigation = () => {
  const links = [
    {
      path: "/",
      pathName: "Home",
    },
    {
      path: "/about",
      pathName: "About",
    },
    {
      path: "/contact",
      pathName: "Contact",
    },
    {
      path: "/blog",
      pathName: "Blog",
    },
  ];
  return (
    <div className="navbar">
      {links.map(({ path, pathName }) => (
        <Link href={path} key={pathName}>
          {pathName}
        </Link>
      ))}
    </div>
  );
};

export default Navigation;
