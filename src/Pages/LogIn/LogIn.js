import React, { useContext } from 'react';
import facebookLogo from '../../images/facebook.png';
import googleLogo from '../../images/google.png';
import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { UserContext } from '../../App';
import { Link, useHistory, useLocation } from 'react-router-dom';



if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
} else {
    firebase.app();
}


const LogIn = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext)

    let history = useHistory();
    let location = useLocation();

    let { from } = location.state || { from: { pathname: "/" } };

    const handleGoogleLogin = () => {
        const googleProvider = new firebase.auth.GoogleAuthProvider();

        firebase.auth()
            .signInWithPopup(googleProvider)
            .then((result) => {
                var credential = result.credential;
                var token = credential.accessToken;
                var user = result.user;
                setLoggedInUser(user)
                history.replace(from);
            }).catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                var email = error.email;
                var credential = error.credential;
                console.log(errorCode, errorMessage, email, credential);
            });
    }

    return (
        <main>
            <section className="absolute w-full h-full">
                <div>
                    <Link to="/" className="glassmorphism backToHomeBtn z-50 absolute right-0 bottom-0.5 m-20 p-5 text-lg text-gray-700 font-bold flex">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mx-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                        </svg>
                        Back to Home</Link>
                </div>
                <div
                    className="absolute top-0 w-full h-full bg-gray-900"
                    style={{
                        backgroundImage:
                            "url(" + require("../../images/logIn-bg.jpg").default + ")",
                        backgroundSize: "100%",
                        backgroundRepeat: "no-repeat"
                    }}
                ></div>
                <div className="container mx-auto px-4 h-full">
                    <div className="flex content-center items-center justify-center h-full">

                        <div className="w-full lg:w-4/12 px-4">
                            <div className="relative flex flex-col min-w-0 break-words w-full shadow-lg rounded-lg border-0 glassmorphism">
                                <div className="rounded-t mb-0 px-6 py-6">
                                    <div className="text-center mb-3">
                                        <h6 className="text-gray-600 text-sm font-bold">
                                            Sign in with
                                        </h6>
                                    </div>
                                    <div className="btn-wrapper text-center">
                                        <button
                                            className="bg-white active:bg-gray-100 text-gray-800 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-2 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs"
                                            type="button"
                                            style={{ transition: "all .15s ease" }}
                                        >
                                            <img
                                                alt="..."
                                                className="w-5 mr-1"
                                                src={facebookLogo}
                                            />
                                            Facebook
                                        </button>
                                        <button onClick={() => handleGoogleLogin()}
                                            className="bg-white active:bg-gray-100 text-gray-800 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs"
                                            type="button"
                                            style={{ transition: "all .15s ease" }}
                                        >
                                            <img
                                                alt="..."
                                                className="w-5 mr-1"
                                                src={googleLogo}
                                            />
                                            Google
                                        </button>
                                    </div>
                                    <hr className="mt-6 border-b-1 border-gray-400" />
                                </div>
                                <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                                    <div className="text-gray-500 text-center mb-3 font-bold">
                                        <small>Or sign in with credentials</small>
                                    </div>
                                    <form>
                                        <div className="relative w-full mb-3">
                                            <label
                                                className="block uppercase text-gray-700 text-xs font-bold mb-2"
                                                htmlFor="grid-password"
                                            >
                                                Email
                                            </label>
                                            <input
                                                type="email"
                                                className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                                                placeholder="Email"
                                                style={{ transition: "all .15s ease" }}
                                            />
                                        </div>

                                        <div className="relative w-full mb-3">
                                            <label
                                                className="block uppercase text-gray-700 text-xs font-bold mb-2"
                                                htmlFor="grid-password"
                                            >
                                                Password
                                            </label>
                                            <input
                                                type="password"
                                                className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                                                placeholder="Password"
                                                style={{ transition: "all .15s ease" }}
                                            />
                                        </div>
                                        <div>
                                            <label className="inline-flex items-center cursor-pointer">
                                                <input
                                                    id="customCheckLogin"
                                                    type="checkbox"
                                                    className="form-checkbox border-0 rounded text-gray-800 ml-1 w-5 h-5"
                                                    style={{ transition: "all .15s ease" }}
                                                />
                                                <span className="ml-2 text-sm font-semibold text-gray-700">
                                                    Remember me
                                                </span>
                                            </label>
                                        </div>

                                        <div className="text-center mt-6">
                                            <button
                                                className="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full"
                                                type="button"
                                                style={{ transition: "all .15s ease" }}
                                            >
                                                Sign In
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="flex flex-wrap mt-6">
                                <div className="w-1/2">
                                    <a
                                        href="#pablo"
                                        onClick={e => e.preventDefault()}
                                        className="text-gray-300"
                                    >
                                        <small>Forgot password?</small>
                                    </a>
                                </div>
                                <div className="w-1/2 text-right">
                                    <a
                                        href="#pablo"
                                        onClick={e => e.preventDefault()}
                                        className="text-gray-300"
                                    >
                                        <small>Create new account</small>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main >

    );
};

export default LogIn;