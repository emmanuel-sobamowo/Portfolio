import React from 'react';

const Contact = () => {
    return (
        <>
        <main className="contactInfo">
        <div id="contact">
        <h4> You can contact me below...</h4>
        
            <a href="https://github.com/emmanuel-sobamowo">
                <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="GitHub Page" style="width:42px;height:42px;"></img>
            </a>
            <a href="https://www.linkedin.com/in/emmanuel-sobamowo-7683b1156/">
                <img src="https://img.flaticon.com/icons/png/512/174/174857.png?size=1200x630f&pad=10,10,10,10&ext=png&bg=FFFFFFFF" alt="LinkedIn Page" style="width:42px;height:42px;"></img>
            </a>
            <a href="mailto:sobamowo.laolu@hotmail.com">
                <img src="https://i.pinimg.com/originals/bb/18/bd/bb18bdbbef437b2d50518db5a8292c94.png" alt="Email Me" style="width:42px;height:42px;"></img>
            </a>
        </div>
        </main>
        </>
    )
}

export default Contact;