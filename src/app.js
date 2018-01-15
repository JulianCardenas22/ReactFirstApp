class IndecisionApp extends React.Component{
     
    render(){
        let options = ["op1","op2","op3"];
  
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
    render(){
        return (
            <div>
            <p>Options {this.props.optionsLength}</p>
            {
                this.props.options.map( (option ) => {
                    <Option key={option} optionText={option}/> 
                } 
            )
        }
            
        <Option/>
            </div>
        );
    }
}

class Option extends React.Component{
    render(){
      return <div>
    
      Option:{  this.props.optionText}
    
      </div>
    }
}

class AddOption extends React.Component{
    render(){
        return (
            <div>
            <p>sssssssssssssssssssss</p>
            </div>
        );
    }
}

class Action extends React.Component{
    render(){
        return (
            <div>
            <button>What should i do?</button>
            </div>
        );
    }
}



ReactDOM.render(<IndecisionApp/>,document.getElementById("app"));
