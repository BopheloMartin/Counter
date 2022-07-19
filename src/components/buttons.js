function Button(props){

    const incrementChange= ()=>{
        props.increment();
    }

    const decrementChange= ()=>{
        props.decrement();
    }

    return(
        <div>
            <div className="box">
                <button onClick={incrementChange}>+</button>
                <button onClick={decrementChange}>-</button>
            </div>
        </div>
    )
}

export default Button;