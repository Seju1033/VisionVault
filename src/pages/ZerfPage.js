import React from 'react'
import IMAGES from '../assets/images'
import '../css/Zerf.css'
import { faIndianRupee, faRupee } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
function ZerfPage() {
    return (
        <>
            <div className='ZerfPage'>

                <div className='zerf-top-banner'>
                    <img src={IMAGES.zerf_banner_top} alt='' />
                </div>

                <div className='zerf-eyeglasses'>
                    <div className='zerf-title'>
                        <h2>Zefr Eyeglasses</h2>
                    </div>
                    <div className='zerf-eyeglasses-content'>
                        <div className='zerf-eyeglasses-card'>
                            <div className='zerf-eyeglasses-card-img'>
                                <img src={IMAGES.zerf_bordeaux} alt='' />
                            </div>
                            <div className='zerf-eyeglass-card-title'>
                                <label>Bordeaux <br /><FontAwesomeIcon icon={faIndianRupee} />37000</label>
                            </div>
                        </div>

                        <div className='zerf-eyeglasses-card'>
                            <div className='zerf-eyeglasses-card-img'>
                                <img src={IMAGES.zerf_orleans} alt='' />
                            </div>
                            <div className='zerf-eyeglass-card-title'>
                                <label>Orleans <br /><FontAwesomeIcon icon={faIndianRupee} />37000</label>
                            </div>
                        </div>

                        <div className='zerf-eyeglasses-card'>
                            <div className='zerf-eyeglasses-card-img'>
                                <img src={IMAGES.zerf_rennes} alt='' />
                            </div>
                            <div className='zerf-eyeglass-card-title'>
                                <label>Rennes <br /><FontAwesomeIcon icon={faIndianRupee} />37000</label>
                            </div>
                        </div>

                        <div className='zerf-eyeglasses-card'>
                            <div className='zerf-eyeglasses-card-img'>
                                <img src={IMAGES.zerf_cannes} alt='' />
                            </div>
                            <div className='zerf-eyeglass-card-title'>
                                <label>Cannes <br /><FontAwesomeIcon icon={faIndianRupee} />37000</label>
                            </div>
                        </div>
                    </div>
                    <div className='zerf-eyewear-qoute'>
                        <img src={IMAGES.zerf_qoute} alt='' />
                    </div>
                </div>

                <div className='zerf-half-rim'>
                    <div className='zerf-half-rim-img'>
                        <img src={IMAGES.zerf_half_rim} alt='' />
                    </div>
                    <div className='zerf-half-rim-content'>
                        <div className='zerf-eyeglasses-card'>
                            <div className='zerf-eyeglasses-card-img'>
                                <img src={IMAGES.zerf_orleans} alt='' />
                            </div>
                            <div className='zerf-eyeglass-card-title'>
                                <label>Orleans <br /><FontAwesomeIcon icon={faIndianRupee} />37000</label>
                            </div>
                        </div>


                        <div className='zerf-eyeglasses-card'>
                            <div className='zerf-eyeglasses-card-img'>
                                <img src={IMAGES.zerf_rennes} alt='' />
                            </div>
                            <div className='zerf-eyeglass-card-title'>
                                <label>Rennes <br /><FontAwesomeIcon icon={faIndianRupee} />37000</label>
                            </div>
                        </div>


                        <div className='zerf-eyeglasses-card'>
                            <div className='zerf-eyeglasses-card-img'>
                                <img src={IMAGES.zerf_strasbourg} alt='' />
                            </div>
                            <div className='zerf-eyeglass-card-title'>
                                <label>Strasbourg <br /><FontAwesomeIcon icon={faIndianRupee} />37000</label>
                            </div>
                        </div>


                        <div className='zerf-eyeglasses-card'>
                            <div className='zerf-eyeglasses-card-img'>
                                <img src={IMAGES.zerf_metz} alt='' />
                            </div>
                            <div className='zerf-eyeglass-card-title'>
                                <label>Mets <br /><FontAwesomeIcon icon={faIndianRupee} />37000</label>
                            </div>
                        </div>

                    </div>
                </div>
                <div className='zerf-rimless'>
                    <div className='zerf-rimless-content'>
                        

                            <div className='zerf-eyeglasses-card'>
                                <div className='zerf-eyeglasses-card-img'>
                                    <img src={IMAGES.zerf_bordeaux} alt='' />
                                </div>
                                <div className='zerf-eyeglass-card-title'>
                                    <label>Bordeaux <br /><FontAwesomeIcon icon={faIndianRupee} />37000</label>
                                </div>
                            </div>

                        <div className='zerf-eyeglasses-card'>
                            <div className='zerf-eyeglasses-card-img'>
                                <img src={IMAGES.zerf_nantes} alt='' />
                            </div>
                            <div className='zerf-eyeglass-card-title'>
                                <label>Nantes <br /><FontAwesomeIcon icon={faIndianRupee} />34000</label>
                            </div>
                        </div>



                        <div className='zerf-eyeglasses-card'>
                            <div className='zerf-eyeglasses-card-img'>
                                <img src={IMAGES.zerf_versaillies} alt='' />
                            </div>
                            <div className='zerf-eyeglass-card-title'>
                                <label> Varsaillies <br /><FontAwesomeIcon icon={faIndianRupee} />39000</label>
                            </div>
                        </div>

                        <div className='zerf-eyeglasses-card'>
                            <div className='zerf-eyeglasses-card-img'>
                                <img src={IMAGES.zerf_annecy} alt='' />
                            </div>
                            <div className='zerf-eyeglass-card-title'>
                                <label>Annecy <br /><FontAwesomeIcon icon={faIndianRupee} />34000</label>
                            </div>
                        </div>


                    </div>


                    <div className='zerf-rimless-img'>
                        <img src={IMAGES.zerf_rimless} alt='' />
                    </div>
                </div>
                <div className='zerf-full-rim'>
                    <div className='zerf-full-rim-img'>
                        <img src={IMAGES.zerf_full_rim} alt='' />
                    </div>
                    <div className='zerf-full-rim-content'>
                    <div className='zerf-eyeglasses-card'>
                                <div className='zerf-eyeglasses-card-img'>
                                    <img src={IMAGES.zerf_lille} alt='' />
                                </div>
                                <div className='zerf-eyeglass-card-title'>
                                    <label>Lille <br /><FontAwesomeIcon icon={faIndianRupee} />39000</label>
                                </div>
                            </div>

                        <div className='zerf-eyeglasses-card'>
                            <div className='zerf-eyeglasses-card-img'>
                                <img src={IMAGES.zerf_dijoun} alt='' />
                            </div>
                            <div className='zerf-eyeglass-card-title'>
                                <label>Dijion <br /><FontAwesomeIcon icon={faIndianRupee} />39000</label>
                            </div>
                        </div>



                        <div className='zerf-eyeglasses-card'>
                            <div className='zerf-eyeglasses-card-img'>
                                <img src={IMAGES.zerf_marseillies} alt='' />
                            </div>
                            <div className='zerf-eyeglass-card-title'>
                                <label> Marseilles <br /><FontAwesomeIcon icon={faIndianRupee} />39000</label>
                            </div>
                        </div>

                        <div className='zerf-eyeglasses-card'>
                            <div className='zerf-eyeglasses-card-img'>
                                <img src={IMAGES.zerf_normandy} alt='' />
                            </div>
                            <div className='zerf-eyeglass-card-title'>
                                <label>Normandy <br /><FontAwesomeIcon icon={faIndianRupee} />39000</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='zerf-bottom-banner'>
                    <img src={IMAGES.zerf_banner_bottom} alt='' />
                </div>


            </div>
        </>
    )
}

export default ZerfPage