import React from 'react'

interface IInputControl {
    type: "text" | "number";
    value: string;
    onChange: (e: any) => void;
}
function InputControl({
    type,
    value,
    onChange
}: IInputControl & Record<string, any>) {
    return (
        <div>
            <input
                type="text"
                value={value}
                onChange={onChange} />
        </div>
    )
}

export default InputControl