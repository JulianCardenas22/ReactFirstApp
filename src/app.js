const app = {
    Title: "Indecision App",
    Subtitle: "My indecision App",
    Options:["one","two"]
};

const AddOption = (e) => {
    
    e.preventDefault();
    const option = e.target.elements.option.value;
    
    if(option){
        app.Options.push(option);
        e.target.elements.option.value = "";
        RenderApp(); 
    }

    console.log("form submited ");

};

const DeleteAll = () =>{
    app.Options = [];
    RenderApp();
};

 const RenderApp = () => {

    const template =(
       
        <div>
            <h1>{app.Title}</h1>
            {app.Subtitle && <p>{app.Subtitle}</p>}
            <p>{app.Options > 0 ? "your options" : "no options"}  </p>
            <p>{app.Options.length}</p>
            <button onClick= {DeleteAll}>DELETE ALL!</button>
            <ol>
                <li>Item</li>
                <li>Item</li>
                
                </ol>

                <form  onSubmit={AddOption}>
                <input type="text" name="option"/>
                <button>Add option</button>
                </form>
        </div>
    );

    const appRoot = document.getElementById("app");
    ReactDOM.render(template,appRoot);

 };
    

 RenderApp();

