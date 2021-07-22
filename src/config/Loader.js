import React from "react";
import '../styles/loader.css'


const MyLoader = (props) => {
    return(
        <>
            {/*<div className="card loaderCard">*/}
            {/*    <div className="lds-roller">*/}
            {/*        <div></div>*/}
            {/*        <div></div>*/}
            {/*        <div></div>*/}
            {/*        <div></div>*/}
            {/*        <div></div>*/}
            {/*        <div></div>*/}
            {/*        <div></div>*/}
            {/*        <div></div>*/}
            {/*    </div>*/}
            {/*</div>*/}
            <div className="spinner">
                <div className="double-bounce1"></div>
                <div className="double-bounce2"></div>
            </div>
        </>
    )
}

export default MyLoader
