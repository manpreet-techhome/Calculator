import React, { useState } from 'react'
import * as image from "../../utilities/images"
import { useDispatch, useSelector } from 'react-redux';
import { addHistory, removeHistory } from '../../redux/actions/calculateAction';


const Calculator = () => {
    const [historyView, setHistoryView] = useState(false) 
    const [value, setValue] = useState("");
    const dispatch = useDispatch();
    const calHistory = useSelector(state => state.Calculator.CalculateHistory);
    console.log(calHistory, "history");

    const handleClick = (e) => {
        setValue(value + e.target.value)
    }

    const handleDeleteOne = () => {
        if ((value === "Error") || (value == "Infinity") || (value == "NaN")) {
            setValue("")
        }
        else {
            setValue(value.slice(0, -1))
        }

    }

    const handleCalulate = () => {
        try {
            const result = eval(value).toString()
            setValue(result)
            // Check if the input contains any operator
            const operators = /[+\-*/%]/;
            if (operators.test(value)) {
                dispatch(addHistory({ expression: value, result }));
            }

        } catch (error) {
            setValue("Error")
        }
    }

    const handleDeleteAll = () => {
        setValue("");
        dispatch(removeHistory())
    }

    return (
        <>
            <div className='calculateSection position-relative'>
                <img src={image.watchImg}
                    alt='watchImage'
                    className='img-fluid watchimg'
                    onClick={() => { setHistoryView(!historyView) }}
                />
                <div className='calculateDisplay mb-4'>
                    <input type="text"
                        className='form-control editInput'
                        value={value}
                    />
                </div>
                <div className='calculateBtns'>
                    <input type='button'
                        className='clearBtn'
                        value="AC"
                        onClick={handleDeleteAll}
                    />
                    <input type='button'
                        className='clearBtn'
                        value="C"
                        onClick={handleDeleteOne}
                    />
                    <input type='button'
                        className='calBtn'
                        value="%"
                        onClick={handleClick}
                    />
                    <input type='button'
                        className='calBtn'
                        value="*"
                        onClick={handleClick}
                    />
                </div>
                <div className='calculateBtns mt-3'>
                    <input type='button'
                        className='NumBtn'
                        value="7"
                        onClick={handleClick}
                    />
                    <input type='button'
                        className='NumBtn'
                        value="8"
                        onClick={handleClick}
                    />
                    <input type='button'
                        className='NumBtn'
                        value="9"
                        onClick={handleClick}
                    />
                    <input type='button'
                        className='calBtn'
                        value="/"
                        onClick={handleClick}
                    />
                </div>
                <div className='calculateBtns mt-3'>
                    <input type='button'
                        className='NumBtn'
                        value="4"
                        onClick={handleClick}
                    />
                    <input type='button'
                        className='NumBtn'
                        value="5"
                        onClick={handleClick}
                    />
                    <input type='button'
                        className='NumBtn'
                        value="6"
                        onClick={handleClick}
                    />
                    <input type='button'
                        className='calBtn'
                        value="-"
                        onClick={handleClick}
                    />
                </div>
                <div className='d-flex align-items-start justify-content-between'>
                    <div className='lowerBtn'>
                        <div className='calculateBtns mt-3'>
                            <input type='button'
                                className='NumBtn'
                                value="1"
                                onClick={handleClick}
                            />
                            <input type='button'
                                className='NumBtn'
                                value="2"
                                onClick={handleClick}
                            />
                            <input type='button'
                                className='NumBtn'
                                value="3"
                                onClick={handleClick}
                            />
                        </div>
                        <div className='calculateBtns mt-3'>
                            <input type='button'
                                className='NumBtn'
                                value="0"
                                onClick={handleClick}
                            />
                            <input type='button'
                                className='NumBtn'
                                value="."
                                onClick={handleClick}
                            />
                            <input type='button'
                                className='NumBtn'
                                value="="
                                onClick={handleCalulate}
                            />
                        </div>
                    </div>
                    <input type='button'
                        className='NumPlusBtn mt-3'
                        value="+"
                        onClick={handleClick}
                    />
                </div>
            </div>
            <div className={`historyViewSec ${historyView ? "show" : "hide"}`}>
                {
                    calHistory && calHistory.length > 0 ?
                        (
                            calHistory?.map((value, idx) => (
                                <div className='cartList' key={idx}>
                                    <h4 className='cartTitle mb-1'>{`${value?.expression} => ${value?.result}`}</h4>
                                </div>
                            ))
                        ) :
                        (
                            <div className='d-flex align-items-center justify-content-center h-100'>
                                <h4 className='historyText'> No History Available</h4>
                            </div>
                        )

                }

            </div>
        </>
    )
}

export default Calculator