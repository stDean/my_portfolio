import { Formal, Hobbies, InFormal, Personal, Skills } from "@/container";

export default function page({ params: { slug } }) {
  switch (slug) {
    case "personal":
      return <Personal />;
    case "skills":
      return <Skills />;
    case "formal":
      return <Formal />;
    case "non-formal":
      return <InFormal />;
    case "hobbies":
      return <Hobbies />;
  }
}
