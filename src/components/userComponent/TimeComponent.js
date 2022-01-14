import React, { useEffect } from 'react'

function TimeComponent() {

    const [time, setTime] = React.useState(null);

    useEffect(() => {
        var today = new Date();
        setTime(today.getHours() + ":" + today.getMinutes() + ':' + today.getSeconds());
    }, []);

    return (
        <h1>{time}</h1>
    )
}

export default TimeComponent
