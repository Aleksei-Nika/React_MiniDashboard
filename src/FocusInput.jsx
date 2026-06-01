import React, {useRef} from "react";

function FocusInput(){
    // 1 создаем реф
    const inputRef = useRef(null);
    const handelButtonClik = () => {
        // через .current получаем доступ к HTML элементу
        inputRef.current.focus();
    }

    return (
        <div>
            {/* привязываем ref к элементу */}
            <input ref={inputRef} type="text"/>
            <button onClick={handelButtonClik}>
                FOCUS
            </button>
        </div>
    );
};
export default FocusInput;