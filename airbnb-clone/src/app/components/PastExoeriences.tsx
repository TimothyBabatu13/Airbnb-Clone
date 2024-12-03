import LodgeCard from "./LodgeCard"
import LodgeCardWrapper from "./LodgeCardWrapper"

const PastExoeriences = () => {
  return (
    <div>
        <h2 className="mt-[52px] mb-6 text-[32px]">Past experiences</h2>
        <LodgeCardWrapper>
            <LodgeCard id="1" background={["/first_1.jpeg", "/first_2.jpeg", "/first_3.jpeg", "/first_4.jpeg"]}/>
            <LodgeCard id="6" background={["/first_1.jpeg", "/first_2.jpeg", "/first_3.jpeg", "/first_4.jpeg"]}/>
            <LodgeCard id="1" background={["/first_1.jpeg", "/first_2.jpeg", "/first_3.jpeg", "/first_4.jpeg"]}/>
            <LodgeCard id="6" background={["/first_1.jpeg", "/first_2.jpeg", "/first_3.jpeg", "/first_4.jpeg"]}/>
            <LodgeCard id="1" background={["/first_1.jpeg", "/first_2.jpeg", "/first_3.jpeg", "/first_4.jpeg"]}/>
            <LodgeCard id="6" background={["/first_1.jpeg", "/first_2.jpeg", "/first_3.jpeg", "/first_4.jpeg"]}/>
            <LodgeCard id="1" background={["/first_1.jpeg", "/first_2.jpeg", "/first_3.jpeg", "/first_4.jpeg"]}/>
            <LodgeCard id="6" background={["/first_1.jpeg", "/first_2.jpeg", "/first_3.jpeg", "/first_4.jpeg"]}/>
        </LodgeCardWrapper>
    </div>
  )
}

export default PastExoeriences