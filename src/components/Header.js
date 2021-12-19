import Button from "./Button";

function Header({title = "Task Tracker", onAdd, showAdd}) {
    return (
        <header className="header">
            <h1>{title}</h1>
            <Button text={showAdd ? "Close" : "Add"} color={showAdd ? "red" : "green"} onClick={onAdd}/>
        </header>
    );
};

export default Header;
