import React, { useEffect, useState } from 'react'

const Niyam = () => {
    const [num, setnum] = useState(0)
    const [num1, setnum1] = useState(100)

    useEffect(() => {
        console.log("effect running");
        // console.log(num1,num);
        

    },[num1])
    // console.log(num);
    // console.log(num1);

    return (
        <div>
<input type="text" />
            <button onClick={() => {

                setnum(num + 1)
            }}> click me num</button>
            <button onClick={() => {

                setnum1(num1 + 10)
            }}> click me num1</button>

        </div>
    )
}

export default Niyam
