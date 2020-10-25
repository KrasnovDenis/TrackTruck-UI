import React, {Fragment} from 'react';
import {Notes} from "../components/Notes";

export function Home() {
    const notes = new Array(3)
        .fill('')
        .map((_, i) => ({id: i, title: `Note ${i + 1}`}));


    return (<Fragment>
        <h1>Home page</h1>
        <hr/>
        <Notes notes={notes}/>
    </Fragment>);
}