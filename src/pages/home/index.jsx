import React from "react";
import "./home.scss";
import { BrowserRouter } from "react-router-dom";



const Home = () => {
    return (<>
        <div className="header">
            <header>

                <a href="https://mail.google.com/mail/&ogbl" >Gmail </a>
                <a href="https://www.google.co.in/imghp?hl=en&ogbl">Image</a>

                <svg className="svg-1" focusable="false" viewBox="0 0 24 24"><path d="M6,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM16,6c0,1.1 0.9,2 2,2s2,-0.9 2,-2 -0.9,-2 -2,-2 -2,0.9 -2,2zM12,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2z"></path></svg>

                <div className="sign">
                    <button>Sign In</button>
                </div>
            </header>
        </div>

        <div className="main">
            <div className="card">
                <img src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" alt="google" />
                <div className="inputs">
                    <svg className="search-icon" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path></svg>
                    <input type="search" />
                    <svg className="voice-icon" focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m12 15c1.66 0 3-1.31 3-2.97v-7.02c0-1.66-1.34-3.01-3-3.01s-3 1.34-3 3.01v7.02c0 1.66 1.34 2.97 3 2.97z" fill="#4285f4"></path><path d="m11 18.08h2v3.92h-2z" fill="#34a853"></path><path d="m7.05 16.87c-1.27-1.33-2.05-2.83-2.05-4.87h2c0 1.45 0.56 2.42 1.47 3.38v0.32l-1.15 1.18z" fill="#f4b400"></path><path d="m12 16.93a4.97 5.25 0 0 1 -3.54 -1.55l-1.41 1.49c1.26 1.34 3.02 2.13 4.95 2.13 3.87 0 6.99-2.92 6.99-7h-1.99c0 2.92-2.24 4.93-5 4.93z" fill="#ea4335"></path></svg>
                </div>

                <div className="btn">
                    <button>Google Search</button>
                    <button>I'm Feel Lucky</button>
                </div>


                <p>Google offered in:<a href="https://www.google.com/setprefs?sig=0_pMDwjXnw41TBqlEKEBrHLZQhLZA%3D&hl=ta&source=homepage&sa=X&ved=0ahUKEwiNo_OwyMbvAhVH8HMBHWUWBDwQ2ZgBCA4">தமிழ்</a>
                    <a href="https://www.google.com/setprefs?sig=0_pMDwjXnw41TBqlEKEBrHLZQhLZA%3D&hl=hi&source=homepage&sa=X&ved=0ahUKEwiNo_OwyMbvAhVH8HMBHWUWBDwQ2ZgBCA8"> हिन्दी</a>
                    <a href="https://www.google.com/setprefs?sig=0_pMDwjXnw41TBqlEKEBrHLZQhLZA%3D&hl=bn&source=homepage&sa=X&ved=0ahUKEwix9aqA9sbvAhUVzDgGHcYGBlYQ2ZgBCBA">বাংলা </a>
                    <a href="https://www.google.com/setprefs?sig=0_pMDwjXnw41TBqlEKEBrHLZQhLZA%3D&hl=te&source=homepage&sa=X&ved=0ahUKEwix9aqA9sbvAhUVzDgGHcYGBlYQ2ZgBCBE">తెలుగు</a>
                    <a href="https://www.google.com/setprefs?sig=0_pMDwjXnw41TBqlEKEBrHLZQhLZA%3D&hl=mr&source=homepage&sa=X&ved=0ahUKEwix9aqA9sbvAhUVzDgGHcYGBlYQ2ZgBCBI">मराठी</a>
                    <a href="https://www.google.com/setprefs?sig=0_pMDwjXnw41TBqlEKEBrHLZQhLZA%3D&hl=gu&source=homepage&sa=X&ved=0ahUKEwix9aqA9sbvAhUVzDgGHcYGBlYQ2ZgBCBM">ગુજરાતી</a>
                    <a href="https://www.google.com/setprefs?sig=0_pMDwjXnw41TBqlEKEBrHLZQhLZA%3D&hl=kn&source=homepage&sa=X&ved=0ahUKEwix9aqA9sbvAhUVzDgGHcYGBlYQ2ZgBCBQ">ಕನ್ನಡ</a>
                    <a href="https://www.google.com/setprefs?sig=0_pMDwjXnw41TBqlEKEBrHLZQhLZA%3D&hl=ml&source=homepage&sa=X&ved=0ahUKEwix9aqA9sbvAhUVzDgGHcYGBlYQ2ZgBCBU">മലയാളം</a>
                    <a href="https://www.google.com/setprefs?sig=0_pMDwjXnw41TBqlEKEBrHLZQhLZA%3D&hl=pa&source=homepage&sa=X&ved=0ahUKEwix9aqA9sbvAhUVzDgGHcYGBlYQ2ZgBCBY">ਪੰਜਾਬੀ</a>


                </p>
            </div>
        </div>

  
        <footer>
            <div className="footer">      
            
            
            <div className="india">
            India
           </div>
                <div className="footer-left">
                    <a href="">About</a>
                    <a href="">Advertisin</a>
                    <a href="">Business</a>
                    <a href="">How Search works</a>
                    <a href="">Privacy</a>
                </div>
                <div className="footer-right">
                    <a href="">Terms</a>
                    <a href="">Setting</a>
                </div>
            </div>
        </footer>

    </>

    )

}
export default Home;