import ChartBar from "icons/ChartBar"
import Pencil from "icons/Pencil"
import Plus from "icons/Plus"

function Navbar() {
    return (
        <div className="grid h-full grid-flow-col gap-4 bg-gray-100">
            <div>
                <button className="flex h-full w-full items-center justify-center">
                    <Plus />
                </button>
            </div>
            <div>
                <button className="flex h-full w-full items-center justify-center">
                    <ChartBar />
                </button>
            </div>
            <div>
                <button className="flex h-full w-full items-center justify-center">
                    <Pencil />
                </button>
            </div>
        </div>
    )
}

export default Navbar