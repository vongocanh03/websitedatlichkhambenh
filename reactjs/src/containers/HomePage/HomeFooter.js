import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';



class HomeFooter extends Component {
    render() {
        return (
            <footer className="footer-container">
                <div className="footer-top">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-3 col-sm-6 footer-section">
                                <div className="footer-logo">
                                    <h2>VNA Health</h2>
                                    <p>Providing quality healthcare services with compassion and excellence.</p>
                                </div>
                                <div className="footer-social">
                                    <a href="#" className="social-icon"><i className="fab fa-facebook-f"></i></a>
                                    <a href="#" className="social-icon"><i className="fab fa-instagram"></i></a>
                                    <a href="#" className="social-icon"><i className="fab fa-twitter"></i></a>
                                </div>
                            </div>
                            
                            <div className="col-md-3 col-sm-6 footer-section">
                                <h3>Quick Links</h3>
                                <ul className="footer-links">
                                    <li><Link href="/">Home</Link></li>
                                    <li><Link href="/about">About Us</Link></li>
                                    <li><Link href="/doctors">Our Doctors</Link></li>
                                    <li><Link href="/services">Services</Link></li>
                                    <li><Link href="/appointment">Book Appointment</Link></li>
                                </ul>
                            </div>
                            
                            <div className="col-md-3 col-sm-6 footer-section">
                                <h3>Our Services</h3>
                                <ul className="footer-links">
                                    <li><Link href="/services/general-checkup">General Checkup</Link></li>
                                    <li><Link href="/services/cardiology">Cardiology</Link></li>
                                    <li><Link href="/services/neurology">Neurology</Link></li>
                                    <li><Link href="/services/pediatrics">Pediatrics</Link></li>
                                    <li><Link href="/services/orthopedics">Orthopedics</Link></li>
                                </ul>
                            </div>
                            
                            <div className="col-md-3 col-sm-6 footer-section">
                                <h3>Contact Us</h3>
                                <ul className="footer-contact">
                                    <li>
                                        <span className="contact-icon"><i className="fas fa-phone"></i></span>
                                        <span>+84 123 456 789</span>
                                    </li>
                                    <li>
                                        <span className="contact-icon"><i className="fas fa-envelope"></i></span>
                                        <span>contact@vnahealth.com</span>
                                    </li>
                                    <li>
                                        <span className="contact-icon"><i className="fas fa-map-marker-alt"></i></span>
                                        <span>123 Health Street, Hanoi, Vietnam</span>
                                    </li>
                                    <li>
                                        <span className="contact-icon"><i className="fas fa-clock"></i></span>
                                        <span>Mon-Fri: 8:00 AM - 8:00 PM</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="footer-middle">
                    <div className="container">
                        <div className="newsletter">
                            <h3>Subscribe to Our Newsletter</h3>
                            <p>Stay updated with our latest health tips and services</p>
                            <div className="newsletter-form">
                                <input type="email" placeholder="Your Email Address" />
                                <button type="submit">Subscribe</button>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="footer-bottom">
                    <div className="container">
                        <div className="copyright">
                            <p>&copy; {new Date().getFullYear()} VNA Health. All Rights Reserved.</p>
                        </div>
                        <div className="footer-bottom-links">
                            <Link href="/privacy-policy">Privacy Policy</Link>
                            <Link href="/terms-conditions">Terms & Conditions</Link>
                            <Link href="/faq">FAQ</Link>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        language: state.app.language
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeFooter);
