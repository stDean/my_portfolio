"use client";

import { useParams, useSearchParams } from "next/navigation";
import { RxDotFilled } from "react-icons/rx";

// import "@/styles/globals.css";
import "./about.styles.scss";
import { AboutIcons, Code, NavTop, SideNav, SubNav } from "@/components";
import { NavData } from "./NavData.data";

// export const metadata = {
//   title: 'dean | about',
//   description: 'My portfolio home page.',
// }

export default function RootLayout({ children }) {
  const params = useParams();

  const slug = params.slug ? params.slug : "personal";

  return (
    <main className="main_about">
      <AboutIcons />

      <SideNav>
        <NavTop path="personal-info" mobilePath="_about.me" />

        <div className="drop_down-link">
          {NavData.map(({ id, ...item }) => (
            <SubNav key={id} item={item} />
          ))}
        </div>
      </SideNav>

      <div className="content">
        <div className="top">
          <div className="top_content">
            {slug}
            <RxDotFilled />
          </div>
        </div>

        <div className="bottom">
          <div className="left_content">{children}</div>

          <div className="right_content">
            <Code />
          </div>
        </div>
      </div>
    </main>
  );
}
