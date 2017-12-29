const visibility= false;

const HideDetails = () =>{
    const stateButton =""
    if(visibility){
        visibility=false;
        stateButton="Hide"
    }else{
        visibility=true;

    }
        
};

const template =(
<div>
    <h1>Toggle :)</h1>
    <p disabled={visibility}>details !!!</p>
    <button onClick={HideDetails}>{stateButton}</button>
</div>

);