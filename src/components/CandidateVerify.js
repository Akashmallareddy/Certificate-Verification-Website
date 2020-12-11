import React,{Component} from 'react'
import axios from 'axios'
import CandidateDetails from './CandidateDetails';

class CandidateVerify extends Component{
    constructor(props){
        super(props)

        this.state={
            code: "",
            candidates: [],
            candidate: "",
            bro: "ji"
        }

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
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

    onChange(e){
        const {name,value} = e.target;
        this.setState({
            [name] : value
        })
    }

    onSubmit(e){
        e.preventDefault();

        const code = this.state.code;
        console.log(code);

        // axios.post('http://localhost:5000/',code)
        //     .then(res=> console.log(res.data));

        // axios.post('http://localhost:5000/',code)
        //     .then(response=>{
        //         this.setState({
        //             candidate: response.data
        //         })
        //     })
        //     .catch(err=> console.log(err))

        // axios.post('http://localhost:5000/',code)
        //     .then(res=> {console.log(res.data)});

         var currcandidates = this.state.candidates.filter(el => el.code == code);


        // console.log(this.state.candidate);

        // window.location = '/candidate';

        // var currcandidate = this.state.candidates.map((candidate)=>{
        //     return(candidate.code === code ? candidate : "hey")
        // })

        console.log(currcandidates[0]);

        this.setState({
            candidate : currcandidates,
            bro: "ji bhai"
        })

        console.log(this.state.candidate + this.state.bro)
    }

    render(){
        return(
            <div>
                <img src="https://givemycertificate.com/style/images/concept/concept1.png" width="300px" alt="" />
                <h3>Verify Your Certificate</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Unique Code : </label>
                        <input
                            type="text"
                            required
                            className="form-control"
                            value={this.state.code}
                            name="code"
                            onChange={this.onChange}
                        />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Verify Candidate" className="btn btn-primary" />
                    </div>
                </form>
                {/* <h1>{this.state.code}</h1> */}
                {/* <CandidateDetails code={this.state.code} candidates={this.state.candidates}  /> */}
                {/* <h1>{this.state.candidate[0].event}</h1> */}
                {this.state.candidate.length>0 ? <CandidateDetails candidates={this.state.candidate[0]} /> : ""}
                
            </div>
        )
    }
}

export default CandidateVerify