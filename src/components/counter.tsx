import { useState, useEffect } from "react";

const Counter = () => {
    const [num1, setnum1] = useState<number>(0);
    const [num2, setnum2] = useState<number>(0);
    const [sum, setSum] = useState<number>(num1 + num2);

    const increamentnum1 = () => {
        setnum1(prev => prev + 1);
    }
    const decreamentnum1 = () => {
        setnum1(prev => prev - 1);
    }
    const increamentnum2 = () => {
        setnum2(prev => prev + 1);
    }
    const decreamentnum2 = () => {
        setnum2(prev => prev - 1);
    }

    useEffect(() => {
        setSum(num1 + num2);
    }, [num1, num2]);
    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <hr />

            <div style={{ display: 'flex', flexDirection: 'row', width: 400, justifyContent: 'space-around', height: 150, alignItems: 'center' }}>
                <div style={{ display: 'flex', flexDirection: 'column', width: '25%', height: '50%', justifyContent: 'space-around', alignItems: 'center' }}>
                    <div>{num1}</div>
                    <div style={{ display: 'flex', justifyContent: 'space-around', width: '100%' }}>
                        <button onClick={() => decreamentnum1()}>-</button>
                        <button onClick={() => increamentnum1()}>+</button>
                    </div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', width: '25%', height: '50%', justifyContent: 'space-around', alignItems: 'center' }}>+</div>
                <div style={{ display: 'flex', flexDirection: 'column', width: '25%', height: '50%', justifyContent: 'space-around', alignItems: 'center' }}>
                    <div>{num2}</div>
                    <div style={{ display: 'flex', justifyContent: 'space-around', width: '100%' }}>
                        <button onClick={decreamentnum2}>-</button>
                        <button onClick={increamentnum2}>+</button>
                    </div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', width: '25%', height: '50%', justifyContent: 'space-around', alignItems: 'center' }}>=</div>
                <div style={{ display: 'flex', flexDirection: 'column', width: '25%', height: '50%', justifyContent: 'space-around', alignItems: 'center' }}>{sum}</div>
            </div>
        </div>
    )
}

export default Counter;