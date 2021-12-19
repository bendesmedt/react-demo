function Button({
                    text = "Button",
                    color = "black",
                    onClick = () => console.log("Button clicked")
                }) {
    return (
        <button
            onClick={onClick}
            style={{backgroundColor: color}}
            className="btn">
            {text}
        </button>
    );
}

export default Button;