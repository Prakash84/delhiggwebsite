import HomeClient from "./HomeClient";

export const metadata = {
  title: "Delhi Girl – Premium Escort Service in Delhi | Trusted Companions",
  description: "Delhi Girl offers premium escort service in Delhi with verified companions across hotels, homes, Gurgaon, Noida, and Aerocity. Book discreetly.",
  openGraph: {
    title: "Delhi Girl – Premium Escort Service in Delhi | Trusted Companions",
    description: "Delhi Girl offers premium escort service in Delhi with verified companions across hotels, homes, Gurgaon, Noida, and Aerocity. Book discreetly.",
    images: ["/images/luxuryspaicon.png"], 
    type: "website",
  },
  
};
export default function page() {
  return <HomeClient />;
}
