import { IoDice } from "react-icons/io5";

import react from "react"
import { userstate } from "react"

function Dado() {
    const [dado, setDado] = userstate()
    function jogardado(){
        let n = math.floor(math.randon()*6)
        setDado(dados[n])
    }

    return (
        <div>
            {dado}
            <button onClick={jogardado}>sortear</button>
            <IoDice />
        </div>
    )
}

export default Dado