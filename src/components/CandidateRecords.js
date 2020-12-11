import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

class CandidateRecords extends Component{
    constructor(props){
        super(props)

        this.state={
            candidates:[]
        }
    }

    componentDidMount(){
        axios.get('http://localhost:5000/admin/')
            .then(response=>{
                this.setState({
                    candidates: response.data
                })
            })
            .catch(err=> console.log(err))
    }

    render(){
        return(
            <div>
                <h3>All Candidates</h3>
                    <table className="table">
                        <thead className="thead-light">
                            <tr>
                                <th>Code</th>
                                <th>Name</th>
                                <th>Event</th>
                                <th>Date</th>
                                <th>Month</th>
                                <th>Year</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.candidates.map((candidate)=> {return(
                                <tr key={candidate._id}>
                                    <td>{candidate.code}</td>
                                    <td>{candidate.name}</td>
                                    <td>{candidate.event}</td>
                                    <td>{candidate.date}</td>
                                    <td>{candidate.month}</td>
                                    <td>{candidate.year}</td>
                                </tr>
                            )})}
                        </tbody>
                    </table>
            </div>
        )
    }
}

export default CandidateRecords

