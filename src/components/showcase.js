import React from "react";

const Showcase = () => {

    return (
        <>
            <h2>Some Creations</h2>
            <div className="container showcase" id="showcase">
                <img src={require("../images/floraShopallpage.png")} alt="flora Site" className="showcase-img" />
                <img src="https://www.w3schools.com/tags/img_girl.jpg" alt="rainbow" className="showcase-img" />
                <img src="https://www.w3schools.com/tags/img_girl.jpg" alt="rainbow" className="showcase-img" />
            </div>

        </>

    )
}

export default Showcase;