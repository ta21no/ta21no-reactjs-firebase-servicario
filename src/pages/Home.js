import React, { useState, useEffect } from 'react'
import './Home.css'
import Counter from "../components/Counter";

// const Home = () => {
//
//     const [message, setMessage] = useState('Super Message!!!')
//     const [count, setCount] = useState(0)
//
//     useEffect(() => {
//         setTimeout(() => {
//             setMessage('I am updated Message')
//         }, 1000)
//     }, [])
//
//     const increment = () => {
//         setCount(count + 1)
//     }
//
//     const decrement = () => {
//         setCount(count - 1)
//     }
//
//     return (
//         <div className="container">
//             <h1>I am Home Page</h1>
//             <p>{message}</p>
//             <button onClick={increment}>Increment</button>
//             <div className="counter">{count}</div>
//             <button onClick={decrement}>Decrement</button>
//         </div>
//     )
// }

class Home extends React.Component {

    state = {
        message: 'Super Message!!!'
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({message: 'I am updated Message'})
        }, 1000)
    }

    displayMessage = (type, count) => {
        if (type === 'increment') {
            console.log(`your number was increment ${count}`)
            return
        }
        console.log(`your number was decrement ${count}`)
    }

    render() {
        const { message } = this.state;
        return (
            <div className="container">
                <h1>I am Home Page</h1>
                <p>{message}</p>
                <Counter
                    onChange={this.displayMessage}
                    title={'this is counter component.'}/>
            </div>
        )
    }
}








export default Home