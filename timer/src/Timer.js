import React, { Component } from 'react'
export default class Timer extends Component {
    constructor(props){
        super(props)
        this.state = {
            minutes: Number,
            seconds: Number,
            input: undefined
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    
    }
    handleSubmit(){
        this.setState({
            minutes: this.state.input,
            seconds: 0
        })
    }
    handleChange(event){
        this.setState({
            input: event.target.value
        })
        
    }
    componentDidMount() {
        this.myInterval = setInterval(() => {
            const { seconds, minutes } = this.state

            if (seconds > 0) {
                this.setState(({ seconds }) => ({
                    seconds: seconds - 1
                }))
            }
            if (seconds === 0) {
                if (minutes === 0) {
                    clearInterval(this.myInterval)
                } else {
                    this.setState(({ minutes }) => ({
                        minutes: minutes - 1,
                        seconds: 59
                    }))
                }
            } 
        }, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.myInterval)
    }
    
    render() {
        const { minutes, seconds } = this.state
        return (
           <React.Fragment>
            <div>
                <div className="vertical-center"> 
                    <div className="container">
                        <section id="cover">
                            <div id="cover-caption">
                                <div className="row text-white">
                                    <div className="col-sm-6 offset-sm-3 text-center">
                                        <h1 className="display-4">Timer App</h1>
                                        <div className="info-form">
                                            <div className="form-group">
                                                <label className="sr-only">Name</label>
                                                <input className="form-control text-center" placeholder="Minute..." type="number" onChange={this.handleChange} />
                                            </div>
                                            <button className="btn btn-success" disabled={!this.state.input} 
                                                style={{fontSize: "13px"}} type="submit" 
                                                onClick={this.handleSubmit}>
                                                START
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <hr />
                                    <h1 className="text-white">
                                    { minutes === 0 && seconds === 0
                                        ? <h1>Time Out !</h1>
                                        : <h1>Minute : {minutes} Second : {seconds < 10 ? `0${seconds}` : seconds}</h1>
                                    }
                                    </h1>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
           </React.Fragment>
        )
    }
}