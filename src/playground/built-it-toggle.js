let Visibility = false;

const ToggleVisibility = () =>{

Visibility =  !Visibility;
render();
}

const render = () =>{
    const jsx = (
    <div>
        <h1>Visibility Toggle</h1>
        {
            (Visibility && (<p>Hey this text was Hidden</p>) ) 
            
        }

        <button onClick={ToggleVisibility}>
        {
            Visibility ? "Hidde" : "Show"
        }</button>
    </div>
    );

    ReactDOM.render(jsx,document.getElementById("app"));
};

render();