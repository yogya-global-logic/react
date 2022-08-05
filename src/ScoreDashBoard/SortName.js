import React from "react";
import response from "./response";
// import "./LeaderBoard.css"
import Header from "./Header";
class SortName extends React.Component{
    constructor(props){
        super(props)
        this.state={
            data:[]
        }
    }
    componentDidMount(){
        console.log("did mount")
       const sorteddata=[...response.list].sort((a,b)=>a.name.localeCompare(b.name))
       this.setState({data:sorteddata})
    }
    render(){
        return(
            <div>
                <Header value={1}></Header>
                <h2>Sorted based on Names</h2>
                <div>
                    <table>
                        <thead>
                            <tr>
                                <th>Rank</th>
                                <th>Name</th>
                                <th>Age</th>
                                <th>Score</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.data.map((item)=>(
                                    <tr>
                                        <td>{item.rank}</td>
                                        <td>{item.name}</td>
                                        <td>{item.age}</td>
                                        <td>{item.points}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )

    }
}
export default SortName