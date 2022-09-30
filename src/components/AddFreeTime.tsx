import FreeTime from "entities/freeTime"
import { useState } from "react"

function AddFreeTime() {
    const [freeTimes, setFreeTimes] = useState<FreeTime[]>([])

    function handleAddFreeTime() {
        alert('Voce clicou no botao')
    }


    return (
        <div className="h-full px-4 pt-8">
            <h1 className="text-4xl font-semibold">Adicionar</h1>
            <div className="mt-8 flex flex-col gap-4">
                <div>
                    <label
                        htmlFor="name"
                        className="mb-2 block text-sm font-medium text-gray-900"
                    >
                        Nome
                    </label>
                    <input
                        type="text"
                        id="name"
                        className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                        placeholder="Nome"
                    />
                </div>

                <div>
                    <label
                        htmlFor="date-start"
                        className="mb-2 block text-sm font-medium text-gray-900"
                    >
                        Data de Início
                    </label>

                    <input
                        id="date-start"
                        type="datetime-local"
                        className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                    />
                </div>

                <div>
                    <label
                        htmlFor="date-end"
                        className="mb-2 block text-sm font-medium text-gray-900"
                    >
                        Data de Fim
                    </label>
                    <input
                        id="date-end"
                        type="datetime-local"
                        className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                    />
                </div>
            </div>
            <button
                onClick={handleAddFreeTime}
                className="mt-16 mr-2 mb-2 w-full rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300"
            >
                Adicionar
            </button>
        </div>
    )
}

export default AddFreeTime