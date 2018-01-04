const app = {
    Title: "Indecision App",
    Subtitle: "My indecision App",
    Options:[]
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

const MakeDecision = () => {
    if(app.Options.length >0){
    const randomNum = Math.floor(Math.random()* app.Options.length) ;
    const option = app.Options[randomNum];    
        alert(option);
    }

    
};

const DeleteAll = () =>{
    app.Options = [];
    RenderApp();
};


let Status=true;

 const RenderApp = () => {

    const template =(
       
        <div>
            <h1>{app.Title}</h1>
            {app.Subtitle && <p>{app.Subtitle}</p>}
            <p>{app.Options.length > 0 ? "your options" : "no options"}  </p>
          
            <button onClick= {DeleteAll}>DELETE ALL!</button>
            <ol>
            {
                app.Options.map( (option) => {
                    return <li key ={option}> {option} </li>
                })
            }
                
                
                </ol>

                <form  onSubmit={AddOption}>
                <input type="text" name="option"/>
                <button>Add option</button>
                </form>

                <button disabled={app.Options.length === 0  } onClick={MakeDecision}>What should i do?</button>

        </div>
    );

    const appRoot = document.getElementById("app");
    ReactDOM.render(template,appRoot);

 };
    



 RenderApp();

