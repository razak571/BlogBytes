import React from "react";
import { Container, Logo, LogoutBtn } from "../index";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";

function Header() {
  const authStatus = useSelector((state) => state.auth.status); // douth
  const navigate = useNavigate();
  const location = useLocation();
  const navItems = [
    {
      name: "Home",
      slug: "/", // it can be slug or any name like url
      active: true,
    },
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
    },
    {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
    },
    {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
    },
    {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
    },
  ];

  return (
    <header className="py-3 shadow bg-black">
      <Container>
        <nav className="flex">
          <div className="mr-4 mt-1">
            <Link to="/">
              <Logo width="70px" color="gray" />
            </Link>
          </div>
          <ul className="flex ml-auto">
            {navItems.map((item) =>
              item.active ? (
                <li key={item.name}>
                  <button
                    onClick={() => navigate(item.slug)}
                    className={` ${
                      location.pathname === item.slug
                        ? "text-white  hover:text-indigo-700  "
                        : "text-gray-400 hover:text-indigo-700"
                    }  inline-block px-6 py-2 duration-200  `}
                  >
                    {item.name}
                  </button>
                </li>
              ) : null
            )}
            {authStatus && (
              <li>
                <LogoutBtn />
              </li>
            )}
            <li>
              <button
                className={` text-gray-400 inline-block px-6 py-2 duration-200 hover:animate-colorChange`}
              >
                Switch Mode
              </button>
            </li>
          </ul>
        </nav>
      </Container>
    </header>
  );
}

export default Header;
