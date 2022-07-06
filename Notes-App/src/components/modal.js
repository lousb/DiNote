import React from "react";

export function Modal({onClearNote}){
    return(
        <div className="modal-container" id="modal_container">
                    <div className="modal">
                        <h1>Are You Sure?</h1>
                        <p id="p">Clearing all is final, there is no way to get your notes back after this.</p>
                        <button id="close">Close</button>
                        <button onClick={()=>onClearNote()}>Clear</button>
                    </div>
                </div>
    )
}