function Button(props) {
    console.log(props);
    return (
        <button className={`${props.buttonType === 'primary' ? 'uppercase px-14 py-4 rounded-full text-white mt-10 text-base ' : 'px-10 py-3 border-2 rounded-full font-bold tracking-wider'}`} style={props.style} >{props.children}</button>
    )
}

export default Button
