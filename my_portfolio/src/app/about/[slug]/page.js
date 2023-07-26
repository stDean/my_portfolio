import { redirect } from "next/navigation";

export default function page({ params: { slug } }) {

  switch(slug) {
    case "personal":
      return <h1>Personal</h1>
    case "skills":
      return <h1>Skills</h1>
    case "formal":
      return <h1>Formal</h1>
    case "non-formal":
      return <h1>Non Formal</h1>
    case "hobbies":
      return <h1>Hobbies</h1>
    default:
      return <h1>Personal</h1>
  }
}
