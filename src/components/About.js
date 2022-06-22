import React , {useState} from 'react'
import PropTypes from 'prop-types'

export default function About(props) {

    // const [myStyle , setMySytle] = useState(
    //     {
    //         color : 'black' ,
    //         backgroundColor : 'white'
    //     }
    // )
    // const [btnText, setBtnText] = useState('Enable Dark Mode')

    // const changeColor = ()=>{
    //     if(myStyle.color === 'white')
    //     {
    //         setMySytle({
    //             color : 'black',
    //             backgroundColor : 'white',
    //             border : '2px solid white'
    //         })
    //         setBtnText('Enable Dark Mode');
    //     }
    //     else
    //     {
    //         setMySytle({
    //             color : 'white',
    //             backgroundColor : 'black',
    //             border : '2px solid black'
    //         })
    //         setBtnText('Enable Light Mode');
    //     }
    // }

    let myStyle = {
        color : props.mode === 'dark' ? 'white':'black' ,
        backgroundColor : props.mode === 'dark' ? '#343a40':'white' 
    }

    return (
        <div className='container my-3' style={myStyle}>
            <h2>About Us</h2>
            <div className="accordion" id="accordionExample" >

                <div className="accordion-item" style={myStyle}>
                    <h2 className="accordion-header" id="headingOne" style={myStyle}>
                        <button className="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Accordion Item #1
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" style={myStyle} aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={myStyle}>
                    <h2 className="accordion-header" id="headingTwo" style={myStyle}>
                        <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Accordion Item #2
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" style={myStyle} aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={myStyle}>
                    <h2 className="accordion-header" id="headingThree" style={myStyle}>
                        <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Accordion Item #3
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" style={myStyle} aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body" >
                            <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className='container'>
                <button className="btn btn-primary my-3" onClick={changeColor}>{btnText}</button>
            </div> */}
        </div>
    )
}
