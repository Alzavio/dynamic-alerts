import React, {useState} from 'react';
import AlertButton from "./AlertButton";

function Toolbar(props) {
    const buttons = [
        { message: 'Downloading!', children: 'Download File' },
        { message: 'Sharing!', children: 'Share Document' },
    ];
    return (
        <>
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                {
                    buttons.map((button, index) => (
                        <AlertButton message={button.message} children={button.children} />
                    ))
                }
            </div>
        </>
    );
}

export default Toolbar;