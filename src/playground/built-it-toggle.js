class ToggleVisibility extends React.Component{
    constructor(props){
        super(props);
        
        this.state = {
            Visibility: false
        };

        this.ChangeVisibility = this.ChangeVisibility.bind(this);
    }

    render(){
        return (
            <div>
                <h1>Visibility Toggle</h1>
                { (this.state.Visibility && (<p>Hey this text was Hidden</p>) ) }
        
                <button onClick={this.ChangeVisibility}>
                { this.state.Visibility ? "Hidde" : "Show" }</button>
            
            </div>
            );
    }
    
    ChangeVisibility(){
      this.setState( (prevState) => {
        return {
            Visibility : !prevState.Visibility
        };
      });
    }

}


ReactDOM.render(<ToggleVisibility/>, document.getElementById("app"));



