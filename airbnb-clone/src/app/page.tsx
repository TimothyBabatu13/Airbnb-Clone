import Image from "next/image";
import Header from "./components/Header";
import NavIcon from "./components/NavIcon";
import LodgeCard from "./components/LodgeCard";

export default function Home() {
  return (
    <div className="">
     <Header />
     <NavIcon />
     <div className="grid grid-cols-4 gap-10">
      <LodgeCard id="1" background={["/first_1.jpeg", "/first_2.jpeg", "/first_3.jpeg", "/first_4.jpeg"]}/>
      <LodgeCard id="6" background={["/first_1.jpeg", "/first_2.jpeg", "/first_3.jpeg", "/first_4.jpeg"]}/>
     </div>
    </div>
  );
}
