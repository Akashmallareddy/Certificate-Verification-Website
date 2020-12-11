// import React,{Component} from 'react'
// import {Link} from 'react-router-dom'
// import axios from 'axios'

// class CandidateDetails extends Component{
//     constructor(props){
//         super(props)

//         this.state={
//             candidate:{}
//         }
//     }

//     componentDidMount(){
//         axios.get('http://localhost:5000/verify/')
//             .then(response=>{
//                 this.setState({
//                     candidate: response.data
//                 })
//             })
//             .catch(err=> console.log(err))
//     }

//     render(){
//         return(
//             <div>
//                 <h3>Candidate Details</h3>
//                     <table className="table">
//                         <thead className="thead-light">
//                             <tr>
//                                 <th>Code</th>
//                                 <th>Name</th>
//                                 <th>Event</th>
//                                 <th>Date</th>
//                                 <th>Month</th>
//                                 <th>Year</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                                 <tr>
//                                     <td>{this.state.candidate.code}</td>
//                                     <td>{this.state.candidate.name}</td>
//                                     <td>{this.state.candidate.event}</td>
//                                     <td>{this.state.candidate.date}</td>
//                                     <td>{this.state.candidate.month}</td>
//                                     <td>{this.state.candidate.year}</td>
//                                 </tr>
//                         </tbody>
//                     </table>
//             </div>
//         )
//     }
// }

// export default CandidateDetails


// function Product(props){
//     // const candidateComponents = props.candidates.map((prod) =>{
//     //     if(prod.code === props.code){
//     //     return{
//     //         ...prod
//     //     }
//     // }
//     // return prod
//     // })
//     // console.log(candidateComponents);
//     // // return(
//     // //     <div>
//     // //         {candidateComponents.event}
//     // //     </div>
//     // //)
//     return(
//         // <h1>{candidateComponents.event}</h1>
//         <h1>Hello</h1>
//     )
// }

// export default Product



    function CandidateDetails(props){
        return(
            <div>
                    {/* <table className="table">
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
                                <tr key={props._id}>
                                    <td>{props.event}</td>
                                    <td>{candidate.name}</td>
                                    <td>{candidate.event}</td>
                                    <td>{candidate.date}</td>
                                    <td>{candidate.month}</td>
                                    <td>{candidate.year}</td>
                                </tr>
                        </tbody>
                    </table> */}
                    {/* <h1>{props.candidates.event}</h1> */}
            <img src="https://www.givemycertificate.com/assets/img/logo.png" alt="Provider logo" />
            <img src="https://i.ya-webdesign.com/images/transparent-check-animated.gif" alt="Verified" />
                <h1>{props.candidates.name}</h1>
            <h3>Has participated in</h3>
                <h3 className="title">{props.candidates.event}</h3>
            <h3>Organized On</h3>
            <h3 className="title">{props.candidates.month}, {props.candidates.date} {props.candidates.year}</h3>
            </div>
        )
    }

export default CandidateDetails


