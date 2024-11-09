import React from "react";

const Item = (props) => {
    return (
        <li>
            {props.completed ? <></> : <input type="checkbox" />}
            <p>{props.text}</p>
        </li>
    );
};

export default Item;