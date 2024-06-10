import { Routes, Route } from "react-router-dom";

import { lazy, Suspense } from "react";
const Navbar = lazy(() => import("./../../Resources/Views/Components/Navbar/Navbar.jsx"));
const Header = lazy(() => import("./../../Resources/Views/Components/Header/Header.jsx"));
const LandingPages = lazy(() => import("./../../Resources/Views/ContentPages/LandingPages/LandingPages.jsx"));
const Footer = lazy(() => import("./../../Resources/Views/Components/Navbar/Navbar.jsx"));

import "./../MainStyle/Main.css";

function MainRouter() {
  return (
    <main id="MainRouterSection">
      <section className="MainRouterSection">
        <Suspense fallback={<div>Loading...</div>}></Suspense>
        <Routes>
          <Route path="/" Component={Navbar} />
          <Route path="/skylinesanctuary" Component={Navbar} />
          <Route path="skylinesanctuary/" Component={Navbar} />
        </Routes>
        <Routes>
          <Route path="/" Component={Header} />
          <Route path="/skylinesanctuary" Component={Header} />
          <Route path="skylinesanctuary/" Component={Header} />
        </Routes>
        <Routes>
          <Route path="/" Component={LandingPages} />
          <Route path="/skylinesanctuary" Component={LandingPages} />
          <Route path="skylinesanctuary/" Component={LandingPages} />
        </Routes>
        <Routes>
          <Route path="/" Component={Footer} />
          <Route path="/skylinesanctuary" Component={Footer} />
          <Route path="skylinesanctuary/" Component={Footer} />
        </Routes>
      </section>
    </main>
  );
}

export default MainRouter;
