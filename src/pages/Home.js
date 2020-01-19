import React, { useState, useEffect } from 'react'
import './Home.css'

const Home = () => {

    const [message, setMessage] = useState('Super Message!!!')

    useEffect(() => {
        setTimeout(() => {
            setMessage('I am updated Message')
        }, 1000)
    }, [])

    return (
        <div className="container">
            <h1>I am Home Page</h1>
            <p>{message}</p>
        </div>
    )
}

// class Home extends React.Component {
//
//     constructor(props) {
//         super(props);
//
//         this.state = {
//             message: 'Super Message!!!'
//         }
//
//     }
//
//     // state = {
//     //     message: 'Super Message!!!!!'
//     // }
//
//     componentDidMount() {
//         setTimeout(() => {
//             this.setState({message: 'I am updated Message'})
//         }, 1000)
//     }
//
//
//
//
//     render() {
//         const { message } = this.state;
//         return (
//             <div className="container">
//                 <h1>I am Home Page</h1>
//                 <p>{message}</p>
//             </div>
//         )
//     }
// }








export default Home