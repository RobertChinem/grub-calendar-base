import FreeTime from "entities/freeTime"
import AddFreeTime from "./AddFreeTime"
import Visualization from "./Visualization"

interface PagesProps {
    route: string
    freeTimes: FreeTime[],
    setFreeTimes: (freeTimes: FreeTime[]) => void
}

function Pages({ route, freeTimes, setFreeTimes }: PagesProps) {
    switch (route) {
        case 'visualization':
            return <Visualization freeTimes={freeTimes} setFreeTimes={setFreeTimes} />
        case 'add':
            return <AddFreeTime freeTimes={freeTimes} setFreeTimes={setFreeTimes} />
        default:
            return null
    }
}

export default Pages