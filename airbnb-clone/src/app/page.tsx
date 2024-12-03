import Header from "./components/Header";
import NavIcon from "./components/NavIcon";
import LodgeCard from "./components/LodgeCard";
import PastExoeriences from "./components/PastExoeriences";
import LodgeCardWrapper from "./components/LodgeCardWrapper";

export default function Home() {
  return (
    <div className="">
     <Header />
     <NavIcon />
     <LodgeCardWrapper>
      <LodgeCard id="1" background={["/first_1.jpeg", "/first_2.jpeg", "/first_3.jpeg", "/first_4.jpeg"]}/>
      <LodgeCard id="6" background={["/first_1.jpeg", "/first_2.jpeg", "/first_3.jpeg", "/first_4.jpeg"]}/>
     </LodgeCardWrapper>
     <PastExoeriences />
    </div>
  );
}
