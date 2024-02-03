import React, {useState} from "react";

const Clock = () => {
    const time = new Date().toLocaleTimeString();
    const [curDate, setCureDate] = useState(time);

    const updateTime = () => {
        const time = new Date().toLocaleTimeString();
        setCureDate(time);
    }
    setInterval(updateTime, 1000);

    return (
        <>
            <div className="clock-inner">
                <h3>{curDate}</h3>
            </div>
        </>
    );


}

export default Clock;