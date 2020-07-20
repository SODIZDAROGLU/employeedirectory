
import React from "react";

const style = {
    icon: {
        padding: "10px 3px 3px 3px"
    },

    footer: {
      
        backgroundColor: "#228ff1",
        color: "white",
        padding: "15px",
    },

    text: {
     
        fontWeight: "100",
        fontSize: 12,
        textTransform: "uppercase",
        letterSpacing: .5
    }
};

class Footer extends React.Component {
    render() {
        return (
            <footer className="uk-text-center uk-text-middle footer" style={style.footer}>
                <span style={style.text}> © SOD</span> <br />
  
            </footer>
        )
    }
};

export default Footer;