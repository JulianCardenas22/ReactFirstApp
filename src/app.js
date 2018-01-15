const obj = {
    name:"Ju",
    GetName(){
        this.name;
    }
};

class IndecisionApp extends React.Component{
     
    render(){
        let options = ["op1","op2","op3","op4s"];
  
        return <div>
        <Header/>
        <Action/>
        <Options options={options} optionsLength={options.length} />
        <AddOption/>
        </div>
    }
}


class Header extends React.Component {

    //Must define
    render(){
        
       return   (
        <div>
          <h1>Indecision</h1>
          <h2>Nixw</h2>
        </div>   
         );
     
    }
}

class Options extends React.Component{
   
    constructor(props){
        super(props);
        this.DeleteAllOptions = this.DeleteAllOptions.bind(this);
    }

   
    DeleteAllOptions(){
      console.log(this.props.options)
    }
    render(){
       return (
         <div>
         <button onClick={this.DeleteAllOptions}>Delete All!!</button>    
         <p>Options Component</p>
            {
              this.props.options.map((option) => <Option key={option} optionText={option}/>)
            }      
        </div>
      );
   }
}

class Option extends React.Component{
  
    render(){
      return <div>
 
      Option: {this.props.optionText}
    
      </div>
    }
}

class AddOption extends React.Component{
    constructor(props){
        super(props);

        this.HandleAddOption = this.HandleAddOption.bind(this);

    }
    
    HandleAddOption(e){
        e.preventDefault();
        const option = e.target.elements.option.value.trim();

        if(option){
            
        }
    }
    
    render(){
        return (
            <div>
                <form onSubmit={this.HandleAddOption}>
                <input type="text" name="option"/>
                <button>Add Option</button>
                </form>
            </div>
        );
    }
}

class Action extends React.Component{
  
    HandlePick(){
       alert("Action Component");
   }
   
    render(){
        return (
            <div>
            <button onClick={this.HandlePick}>What should i do?</button>
            </div>
        );
    }
}



ReactDOM.render(<IndecisionApp/>,document.getElementById("app"));
