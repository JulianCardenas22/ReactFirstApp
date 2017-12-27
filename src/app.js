const app = {
    Title: "Indecision App",
    Subtitle: "put your life in the hands of a computer",
    options : ["one","two"]
};

const user ={
    Name: 'Julian Cardenas',
    Age:21,
    Location:'Monterrey',
    Places:["Mexico","USA","Chile"],
    PrintPlacesLived(){
     console.log(this.Name);
     console.log(this.Age);
     console.log(this.Location)
     this.Places.forEach((city) => {
        console.log(this.Name + " has lived in " + city);
     });
    }
};

user.PrintPlacesLived();

const getFirstName =(user) => user.Name.split(" ")[0]; 

const gfn  = (user) => {
    return user.Name.split(" ")[0];
 }

let gfnlet = (user) => user.Name.split(" ")[0];
function getLocation(location){
    if(location)
    return <p>Location: {location}</p>;
};



console.log("\n");
console.log(gfnlet(user));
console.log(gfn(user));
console.log(getFirstName(user));


const appRoot = document.getElementById("app");
// templates
const template =(  
    <div>   
      <h1>{app.Title}</h1>
     {app.Subtitle && <p>{app.Subtitle}</p>}
     <p>{app.options.length >0 ? "Here are your options" : "No options"}</p>
      <ol>
          <li>li</li>
          <li>li</li>
      </ol>
    </div>
  );
  

const templateTwo =(
    <div>
    <h1>{ user.Name ? user.Name : "Anonymous" }</h1>
   { (user.Age && user.Age >= 18) && <p>Age: {user.Age + " !"}</p> }
   { getLocation(user.Location) }
    </div>
);

ReactDOM.render(template,appRoot);