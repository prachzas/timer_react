import React, { Component } from 'react'
import logoScb from './scb-logo.png'
export default class Timer extends Component {
    constructor(props){
        super(props)
        this.state = {
            minutes: 0,
            seconds: "",
            input: Number,
            isRunning: undefined
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }
    
    handleSubmit(){
        this.setState({
            minutes: this.state.input,
            seconds: 0,
            isRunning: true
        })
        this.countdown()
    }
    handleChange(event){
        this.setState({
            input: event.target.value
        })
        
    }
    countdown(){
        this.myInterval = setInterval(() => {
            const { seconds, minutes } = this.state

            if(minutes === 0 && seconds === 0){
                clearTimeout(this.myInterval)
                console.log("clearInterval แล้วนะ")
                this.setState({
                    isRunning: false
                })
                console.log(this.state.isRunning)
            }
            if (seconds > 0) {
                console.log("second > 0")
                this.setState(({ seconds }) => ({
                    seconds: seconds - 1
                }))
            }
            if (seconds === 0) {
                console.log("second == 0")
                if (minutes === 0) {
                    console.log("minutes == 0")
                    clearInterval(this.myInterval)
                } else {
                    console.log("minutes != 0")
                    this.setState(({ minutes }) => ({
                        minutes: minutes - 1,
                        seconds: 59
                    }))
                }
            } 
        }, 1000)
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
                                    <div class="corner-ribbon top-right sticky blue">Digital Academy</div>
                                    <img className="logo" src= {logoScb} alt = "scb logo"  />
                                        {/* <h1 className="display-4">Timer App</h1> */}
                                        <br></br>
                                        <br></br>
                                        <br></br>
                                        <div className="info-form">
                                            <div className="form-group">
                                                <label className="sr-only">Name</label>
                                                <input className="form-control text-center" placeholder="Minute..." type="number" onChange={this.handleChange} />
                                            </div>
                                            <button className="btn btn-success" disabled={!this.state.input || this.state.isRunning===true} 
                                                style={{fontSize: "13px"}} type="submit" 
                                                onClick={this.handleSubmit}>
                                                START
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <hr />
                                    <div className="text-white">
                                    { minutes === 0 && seconds === 0
                                        ? <h1>Time Out !</h1>
                                        : <h1>Minute : {minutes} Second : {seconds < 10 ? `0${seconds}` : seconds}</h1>
                                    }
                                    </div>
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