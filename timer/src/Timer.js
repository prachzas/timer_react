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
               <body style={{backgroundColor: "#3F2272" , margin: "0" , height: "670px" , color: "white" ,
            textAlign: "center" , fontSize: "30px"}}>
             <h1 style={{marginTop: "0px"}}>Timer App</h1>
             <span ><input placeholder="Minute..." type="number"  onChange={this.handleChange}></input> <button disabled={!this.state.input} style={{fontSize: "13px"}} type="submit" onClick={this.handleSubmit}>START</button></span>
            <div style={{textAlign: "center" , marginTop : "190px" , fontSize : "40px" , color: "white"}  }>
            { minutes === 0 && seconds === 0
                    ? <h1>Time Out !</h1>
                    : <h1>Minute : {minutes} Second : {seconds < 10 ? `0${seconds}` : seconds}</h1>
                }
            </div>
            </body>  
           </React.Fragment>
        )
    }
}