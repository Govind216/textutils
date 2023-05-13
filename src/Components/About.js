import React, { useState } from 'react'

export default function About(props) {
    // const [changeStyle, setStyle] = useState({
    //     color: 'black',
    //     backgroundColor: 'white',

    // })
    let changeStyle={color:props.mode==='dark'?'white':'#042743',
    backgroundColor:props.mode==='dark'?'#042743':'white',
    border: props.mode==='dark'?'1px solid white': '1px solid #042743'
    
}

    // const [btnText, setBtnText] = useState("Enable Dark Mode")

    // const toggleStyle = () => {
    //     if (changeStyle.color === 'white') {
    //         setStyle({
    //             color: 'black',
    //             backgroundColor: 'white'
    //         })
    //         setBtnText("Enable Dark Mode")
    //     }
    //     else {
    //         setStyle({
    //             color: 'white',
    //             backgroundColor: 'black',
    //             border: '2px solid white'
    //         })
    //         setBtnText("Enable Light Mode")

    //     }
    // }
    return (
        <div className='container'>
            <div className="accordion" id="accordionExample" style={changeStyle}>
                <div className="accordion-item" style={changeStyle} >
                    <h2 className="accordion-header" id="headingOne">
                        <button style={changeStyle} className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Analyze Text
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={changeStyle}>
                            <strong>
                                A text analyzer is a software tool or program that helps users understand and analyze text-based data. It typically processes textual information to identify patterns, trends, and key insights that can be used to draw meaningful conclusions. Text analyzers use various algorithms and techniques to perform tasks such as sentiment analysis, topic modeling, keyword extraction, and summarization. These tools are often used in various industries such as marketing, customer service, journalism, and academia, where analyzing large volumes of text data is essential for decision-making. With the growing amount of unstructured data available, text analyzers have become increasingly important in helping organizations extract valuable insights from text-based sources.</strong>                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={changeStyle}>
                    <h2 className="accordion-header" id="headingTwo">
                        <button style={changeStyle} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Free To Use
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong> Our text analyzer is a free-to-use software tool that helps users analyze and understand textual data. Unlike many other text analyzer tools that require users to pay for a subscription or a license, our tool is completely free and accessible to anyone with an internet connection. This makes it an ideal option for individuals or organizations who want to gain insights from their text-based data but have limited resources to invest in expensive software. Our text analyzer offers a range of features including sentiment analysis, topic modeling, keyword extraction, and summarization, all at no cost to the user. We believe in democratizing access to technology and empowering individuals and businesses to make data-driven decisions, which is why we have made our text analyzer available to everyone for free.</strong>                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={changeStyle}>
                    <h2 className="accordion-header" id="headingThree">
                        <button style={changeStyle} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Browser Compatibility
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>
                                Our text analyzer is a browser-compatible software tool that can be accessed through any web browser, making it highly convenient and easy to use. Users can simply open their preferred web browser and navigate to our tool's website to start analyzing their text-based data. This eliminates the need to download and install any additional software, which can be time-consuming and require technical expertise. Moreover, our text analyzer is optimized for various web browsers, ensuring that users can access the tool seamlessly across different devices and platforms. Being browser-compatible also means that users can access our tool from anywhere with an internet connection, making it ideal for remote work and collaborations. With our text analyzer, users can quickly and easily analyze their text data without any additional hassle or technical expertise, thanks to its browser compatibility.</strong>                        </div>
                    </div>
                </div>
            </div>
            <div className='container my-3'>

                    {/* <button onClick={toggleStyle} className='btn btn-primary'>{btnText}</button> */}
            </div>
        </div>
    )
}
