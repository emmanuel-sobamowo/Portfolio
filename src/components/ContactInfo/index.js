import React from 'react';
import './app.css';
const ContactInfo = () => {
    return (
        <>
        <main className="container">
            <h1>My Contact Information</h1>
            <h4>Below are a few ways you can contact me!</h4>

            <div className="email">
                    <h3>
                        <a id="email-link" href="mailto:sobamowo.laolu@hotmail.com">
                        <img id="email-logo" src="https://i.pinimg.com/originals/bb/18/bd/bb18bdbbef437b2d50518db5a8292c94.png" alt="Email Me"/>
                        <br></br>  Send me an email...</a>
                    </h3>
                    
                
            </div>

            <div className="linkedin">
                    <h3>
                        <a id="linkedin-link"href="https://www.linkedin.com/in/emmanuel-sobamowo-7683b1156/">
                        <img id="linkedin-logo" src="https://image.flaticon.com/icons/png/512/174/174857.png" alt="LinkedIn Page"/>
                          <br></br>  My LinkedIn Profile</a>
                    </h3>
                
            </div>

            <div className="github">
                    <h3>
                        <a id="github-link"href="https://github.com/emmanuel-sobamowo">
                        <img id="github-logo" src="https://pngimg.com/uploads/github/github_PNG58.png" alt="GitHub Page"/>
                         <br></br>   My GitHub Profile: @emmanuel-sobamowo</a>
                    </h3>
                
            </div>
        </main>
</>


)
}
      

export default ContactInfo;
{/* <main className="contactInfo">
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
}  */}