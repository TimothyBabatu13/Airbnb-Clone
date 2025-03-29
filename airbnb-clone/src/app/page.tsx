
import Header from "./components/Header";
import NavIcon from "./components/NavIcon";
import PastExoeriences from "./components/PastExoeriences";
import LodgeCardWrapper from "./components/LodgeCardWrapper";
import Footer from "./components/Footer";
import { HeaderCard } from "@/components/HomeHeader";

export default function Home() {

  return (
    <div className="">
     <Header />
     <NavIcon />
     <LodgeCardWrapper>
        <HeaderCard />
     </LodgeCardWrapper>
      <PastExoeriences />
     <Footer />
    </div>
  );
}
