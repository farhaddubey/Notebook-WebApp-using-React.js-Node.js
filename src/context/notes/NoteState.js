import react from "react"
import NoteContext from "./NoteContext"
const NoteState =(props)=>{
    const state={
        "name":"Harry",
        "class":"5b"
    }
    return(
        <NoteState.provider value={state}>
            {props.children}
        </NoteState.provider>
        )
}
export default NoteState;