import React from "react";

function GCard(props) {

    const deleteNote = () => {
        props.deleteItem(props.id);
    }
    return (
        <div className="gcard">
            <i onClick={deleteNote} class="fas fa-trash"></i>
            <h2>{props.title}</h2>
            <p>{props.content}</p>
        </div>
    );
};

export default GCard;