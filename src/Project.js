import React,{Component} from "react";
class Project extends Component{
    constructor(){
        super()
        this.state ={
            info:[]
        }

    }


    componentDidMount() {
        fetch("https://randomuser.me/api/")
            .then(response => response.json())
            .then(data => {
                 this.setState({
                    info: data.results
                }) 
            })
      
         

    }
     render() {
         let result = this.state.info.map(i => {
            return (
            <div style={{fontSize:40,color:"blue",textAlign: "center"}}>  
                  <p key={i.email}>{i.email}</p>
                  <img src={i.picture.large} alt="this is me" />
              </div>
            )
        });
        
        return (
            <div>
                <h2 style={{color:"blue",fontSize: 50,border:"2px solid blue",backgroundColor:"yellow"}}>twitter data</h2>
                
                {result}
                
                
            </div>
        )
   }
}

export default Project
