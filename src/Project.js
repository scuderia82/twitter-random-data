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
              <div>  
                  <p key={i.email}>{i.email}</p>
                  <img src={i.picture.large} alt="pic" />
              </div>
            )
        });
        
        return (
            <div>
                <h2>twitter data</h2>
                {result}
                
            </div>
        )
   }
}

export default Project
