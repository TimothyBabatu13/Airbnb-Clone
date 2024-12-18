import { Divide, LocateIcon, Weight } from "lucide-react"

const TextWithIcon = ({
     children
} : {
    children: React.ReactNode
}) => {
    return(
        <div className="flex">
            {children}        
        </div>
    )
}
const H4 = ({text} : {text: string}) => {
    return(
        <h4 className="text-base font-medium">{text}</h4>
    )
}
const H6 = ({ text }: {
    text: string
}) => {
    return <h6 className="text-sm font-normal">{text}</h6>
}
const BiggerText = ({
    H4Text, H6Text
} : {
    H4Text: string,
    H6Text: string
}) => {
    return(
        <div className="ml-7">
            <H4 text={H4Text}/>
            <H6 text={H6Text}/>
        </div>
    )
}
const RoomFeatures = () => {
  return (
    <div id="roomfeatures" className="py-8 flex flex-col gap-6 border-b">
        <TextWithIcon>
            <Divide />
            <BiggerText 
                H4Text="Dive Right in" 
                H6Text="This is one of the few places in the area with a pool."
            />
        </TextWithIcon>
        <TextWithIcon>
            <Weight />
            <BiggerText
                H4Text="At-home gym"
                H6Text="The stationary bike, yoga mat, and free weights are ready for workouts."
            />
        </TextWithIcon>
        <TextWithIcon>
            <LocateIcon />
            <BiggerText 
                H4Text="Beautiful area"
                H6Text="This home is in a scenic location."
            />
        </TextWithIcon>
    </div>
  )
}

export default RoomFeatures