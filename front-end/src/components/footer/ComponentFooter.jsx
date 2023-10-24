import React from 'react';
import { Layout } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin, faGithub, faLeanpub } from '@fortawesome/free-brands-svg-icons';
import { faHome, faEnvelope, faAddressBook } from '@fortawesome/free-solid-svg-icons';
import '../../assets/styles/styleComponentFooter/footer.css';
import logo from '../../assets/image/icone.png';

const { Footer } = Layout;

const CustomFooter = () => {
    return (
        <Footer className="custom-footer">
            <section className="custom-footer-head d-flex justify-content-center justify-content-lg-between border-bottom">
                <div className="me-5 d-none d-lg-block">
                    <span>Entre em contato para mais informações</span>
                </div>

                <div className="custom-social-links">
                    <img src={logo} alt="SingularStats" style={{ marginRight: ' 25px' }}/>
                </div>
            </section>

            <section className="custom-footer-section">
                <div className="custom-footer-container text-center text-md-start mt-5">
                    <div className="row mt-3">
                        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold mb-4">
                                <FontAwesomeIcon icon={faLeanpub} style={{ marginRight: ' 15px' }} />Singular Stats
                            </h6>
                            <p className='text-info-p'>
                                Website que mostra dados estatísticos sobre times de e-sports da liga brasileira de League
                                of Legends, para auxiliar coaches, analistas, especialistas, e pessoas que tiverem interesse
                                pelos dados.
                            </p>
                        </div>

                        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                            <h6 className="text-uppercase fw-bold mb-4"><FontAwesomeIcon icon={faAddressBook} style={{ marginRight: ' 10px' }} />Contato</h6>
                            <p className='text-info-p'><FontAwesomeIcon icon={faHome} style={{ marginRight: ' 10px' }} />Florianópolis, SC, BR</p>
                            <p className='text-info-p'><FontAwesomeIcon icon={faEnvelope} style={{ marginRight: ' 10px' }} />pablo.msaraiva@hotmail.com</p>
                            <div className="custom-social-links">
                                <a href="https://www.instagram.com/pbo___/" className="me-4 link-secondary">
                                    <FontAwesomeIcon icon={faInstagram} />
                                </a>
                                <a href="https://www.linkedin.com/in/pablosm25/" className="me-4 link-secondary">
                                    <FontAwesomeIcon icon={faLinkedin} />
                                </a>
                                <a href="https://github.com/pbosm" className="me-4 link-secondary">
                                    <FontAwesomeIcon icon={faGithub} />
                                </a>
                            </div>
                        </div>

                        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                            <h6 className="text-uppercase fw-bold mb-4"><FontAwesomeIcon icon={faAddressBook} style={{ marginRight: ' 10px' }} />Contato</h6>
                            <p className='text-info-p'><FontAwesomeIcon icon={faHome} style={{ marginRight: '10px' }} />Florianópolis, SC, BR</p>
                            <p className='text-info-p'><FontAwesomeIcon icon={faEnvelope} style={{ marginRight: ' 10px' }} />pablo.msaraiva@hotmail.com</p>
                            <div className="custom-social-links">
                                <a href="https://www.instagram.com/pbo___/" className="me-4 link-secondary">
                                    <FontAwesomeIcon icon={faInstagram} />
                                </a>
                                <a href="https://www.linkedin.com/in/pablosm25/" className="me-4 link-secondary">
                                    <FontAwesomeIcon icon={faLinkedin} />
                                </a>
                                <a href="https://github.com/pbosm" className="me-4 link-secondary">
                                    <FontAwesomeIcon icon={faGithub} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="custom-footer-bottom mt-3">
                <div class="text-center p-4" style={{ backgroundColor: ' rgba(0, 0, 0, 0.125)' }}>
                    © 2021 Copyright:
                    <a class="text-reset fw-bold" href="https://singularstats.herokuapp.com"> singularstats.herokuapp.com</a>
                </div>
            </section>
        </Footer>
    );
};

export default CustomFooter;
