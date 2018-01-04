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
            <p>options...</p>
            </div>
        );
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


const jsx =(
    <div>
        <h1>Title</h1>
    <Header/>
    <Action/>
    <Options/>
    <AddOption/>
    
     </div>
);

ReactDOM.render(jsx,document.getElementById("app"));
