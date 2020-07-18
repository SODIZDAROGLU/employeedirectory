import React from "react";
import "./style.css";

function OffCanvas() {
    return (
        <div id="offcanvas-slide" uk-offcanvas="mode: slide; overlay: true">
            <div className="uk-offcanvas-bar">

               
               
                <p className="about-section">
                    This application allows the user to view their employee directory, and have easy access to employee information. It was built with React and pulls 200 randomly generated employees from the Random User API. In order to filter employees by name, type a name into the search bar. In order to sort the employee list by name, email, phone number, or DOB, click on that category. Click on the category again to switch the sorting order.
                </p>
              
            </div>
        </div>

    )
};

export default OffCanvas;