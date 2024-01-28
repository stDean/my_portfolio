import "./contact.styles.scss";
import { ContactContainer } from "@/container";
import { ContactMenu, NavTop } from "@/components";
import SideNav from "../../components/sidenav";

export default function page() {
  return (
    <div className="contact">
      <SideNav>
        <NavTop path="contact" mobilePath="_contact.me" />
        <ContactMenu />
      </SideNav>

      <ContactContainer />
    </div>
  );
}
