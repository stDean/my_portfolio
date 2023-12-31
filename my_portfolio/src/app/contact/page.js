import "./contact.styles.scss";
import { ContactContainer } from "@/container";
import { ContactMenu, NavTop, SideNav } from "@/components";

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
