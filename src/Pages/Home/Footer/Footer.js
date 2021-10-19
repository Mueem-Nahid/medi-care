import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faTwitterSquare } from '@fortawesome/free-brands-svg-icons';
import { faInstagramSquare } from '@fortawesome/free-brands-svg-icons';
import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-dark text-center text-white mt-5">
        <div className="container p-4">
            <section className="mb-4">     
            <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                ><FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon></a>
            <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                ><FontAwesomeIcon icon={faTwitterSquare}></FontAwesomeIcon></a>
            <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                ><FontAwesomeIcon icon={faInstagramSquare}></FontAwesomeIcon></a>
            </section> 
            <section className="">
            <form action="">  
                <div className="row d-flex justify-content-center">        
                <div className="col-auto">
                    <p className="pt-2">
                    <strong>Sign up for our newsletter</strong>
                    </p>
                </div> 
                <div className="col-md-5 col-12">
                
                    <div className="form-outline form-white mb-4">
                    <input type="email" id="form5Example2" className="form-control" />
                    </div>
                </div>
                <div className="col-auto">           
                    <button type="submit" className="btn btn-outline-light mb-4">
                    Subscribe
                    </button>
                </div>       
                </div>
            </form>
            <p>mueem51@gmail.com</p>
            </section>
        </div>
        </footer>
    );
};

export default Footer;