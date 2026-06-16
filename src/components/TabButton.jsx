import './TabButton.css'


function TabButton({children, clickFunction}){
    
    return <button onClick={clickFunction} className="tab-button">{children}</button>;
}

export default TabButton;