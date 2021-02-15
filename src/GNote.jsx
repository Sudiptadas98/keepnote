import React, { useState } from "react";
import GCard from "./GCard";

function GNote() {
    const [show, setShow] = useState(false);
    const Expand = () => {
        setShow(true);
    }
    const [note, setNote] = useState({
        title: "",
        content: ""
    });
    const [Items, setItems] = useState([]);

    const InputEvent = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        setNote((prevData) => {
            return {
                ...prevData,
                [name]: value
            };
        });
    };

    const addEvent = (event) => {
        event.preventDefault();
        // alert("clicked");
        if (!note.title && !note.content) {
            alert("Write something first..");
            return;
        } else if (!note.content) {
            alert("Write note");
            return;
        } else if (!note.title) {
            alert("Add a title");
            return;
        } else {
            setItems((oldItems) => {
                return [...oldItems, note];
            });

            setNote({
                title: "",
                content: ""
            });

            setShow(false);
        };
    };
    const onDelete = (id) => {
        var answer = window.confirm("Want to delete this note?");
        if (answer) {
            setItems((oldItems) => {
                return oldItems.filter((currdata, index) => {
                    return index !== id;
                });
            });
        } else {
            return;
        }
    };

    return (
        <>
            <div className="gnote">
                <nav className="gnav">
                    <h1>Keep Note</h1>
                </nav>
                <div className="notebox">
                    <form onSubmit={addEvent} className="gtakenote">
                        <div className="ginputs">

                            <input type="text"
                                name="title"
                                value={note.title}
                                onChange={InputEvent}
                                placeholder="Title"
                                autoComplete="off"
                                onClick={Expand} />
                            <br />
                            <br />

                            <textarea rows=""
                                column=""
                                name="content"
                                value={note.content}
                                onChange={InputEvent} type="text"
                                placeholder="Notes.."
                                style={{ display: show ? "block" : "none" }} />
                        </div>
                        <button style={{ display: show ? "block" : "none" }}>+</button>
                    </form>
                </div>
                <div className="gbody">
                    {Items.map((val, index) => {
                        return <GCard
                            key={index}
                            id={index}
                            title={val.title}
                            content={val.content}
                            deleteItem={onDelete} />
                    })}
                </div>
            </div>
            <footer id="footer"><p>Made with <i class="fas fa-heart"></i> by Sudipta Das.</p></footer>
        </>
    );
};

export default GNote;