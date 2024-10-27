import React, {useState} from 'react';

function AlertButton(props) {
    const [show, setShow] = useState(false);
    return (
        <div onClick={() => setShow(true)}>{show ? "Alert: "+props.message : props.children}</div>
    );
}

export default AlertButton;