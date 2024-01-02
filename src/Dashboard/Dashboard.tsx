import { useEffect, useState } from "react";
import "./Dashboard.css";

export const Dashboard = () => {
  const [openSidebar, setOpenSidebar] = useState(true);

  const handleOpenSidebar = () => {
    setOpenSidebar(!openSidebar);
  };

  const themeToggle = (checked: boolean) => {
    if (checked) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  };

  const [innerWidth, setInnerWidth] = useState(window.innerWidth);

  window.addEventListener("resize", () => {
    setInnerWidth(window.innerWidth);
  });

  useEffect(() => {
    if (innerWidth < 576) {
      setOpenSidebar(false);
    }
  }, []);

  return (
    <div className="app dark">
      {/* Sidebar */}
      <div className={`sidebar ${openSidebar ? "" : "close"}`}>
        <a href="#" className="sidebar__logo">
          <i className="bx bx-code-alt"></i>
          <div className="sidebar__logo-name">Dashboard</div>
        </a>
        <ul className="sidebar__menu">
          <li className="sidebar__menu__item">
            <a href="#">
              <i className="bx bxs-dashboard"></i>Dashboard
            </a>
          </li>
          <li className="sidebar__menu__item">
            <a href="#">
              <i className="bx bx-user"></i>Users
            </a>
          </li>
          <li className="sidebar__menu__item active">
            <a href="#">
              <i className="bx bxl-product-hunt"></i>Products
            </a>
          </li>
          <li className="sidebar__menu__item">
            <a href="#">
              <i className="bx bx-exit"></i>Logout
            </a>
          </li>
        </ul>
      </div>
      {/* End of Sidebar */}

      {/* Content */}
      <div className="content">
        {/* Navbar */}
        <nav className="navbar">
          <i
            className="bx bx-menu navbar__icon"
            onClick={handleOpenSidebar}
          ></i>

          {/* <form className={`navbar__form`}>
            <div className="navbar__form_content">
              <input type="search" placeholder="Search..." />
              <button type="submit">
                <i
                  className={`bx ${innerWidth < 576 ? "bx-x" : "bx-search"}`}
                ></i>
              </button>
            </div>
          </form> */}

          <input
            type="checkbox"
            id="theme-toggle"
            onChange={(e) => themeToggle(e.target.checked)}
          />
          <label
            htmlFor="theme-toggle"
            className="navbar__theme-toggle"
          ></label>

          <a href="#" className="navbar__link navbar__link__notif">
            <i className="bx bx-bell"></i>
            <span className="badge">12</span>
          </a>

          <a href="#" className="navbar__link">
            <i className="bx bx-user"></i>
          </a>
        </nav>
        {/* End of Navbar */}

        {/* Main */}
        <main>
          <h1>Dashboard</h1>
          <header>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              /
              <li>
                <a href="#">Active</a>
              </li>
            </ul>
            <a href="#">
              <i className="bx bx-cloud-download"></i>
              <span>Download CSV</span>
            </a>
          </header>

          <section>
            <article className="card">
              <i className="bx bx-line-chart"></i>
              <div>
                <h3>Title</h3>
                <p>Lorem ipsum dolor sit amet consectetur</p>
              </div>
            </article>
          </section>
        </main>
      </div>
      {/* End of content */}
    </div>
  );
};
