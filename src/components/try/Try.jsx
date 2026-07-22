import React, { useState } from 'react'


export const Try = () => {
    const [count, setCount] = useState(0)
    // console.log(useState(0));

    const decrement = () => {
        setCount(count - 1)

    }

    const increment = () => {
        setCount(count + 1)

    }
    return (
        <>
            {console.log("vcomponent re -render")
            }
            <div>Try</div>
            <div style={{ textAlign: "center" }}>
                {count}
                <br />
                <input type="submit" value="Decrement" onClick={decrement} />
                &nbsp;
                <input type="submit" value="Incremnet" onClick={increment} />
            </div>
            <br />

        </>
    )
}
