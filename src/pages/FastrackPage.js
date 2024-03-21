import React from 'react'
import IMAGES from '../assets/images'
import '../css/Fastrack.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faIndianRupee } from '@fortawesome/free-solid-svg-icons'
function FastrackPage() {
    return (
        <>
            <div className='Fastrack'>
                <div className='fastrack-top-banner'>
                    <img src={IMAGES.ft_banner_top} alt='' />
                </div>
                <div className='fastrack-qoute'>
                    <img src={IMAGES.ft_qoute} alt='' />
                </div>
                <div className='fastrack-sunglasses'>
                    <div className='fastrack-sunglasses-img'>
                        <img src={IMAGES.ft_sunglasses} alt='' />
                    </div>


                    <div className='fastrack-sunglasses-content'>

                        <div className='ft-sunglasses-card'>
                            <div className='ft-sunglasses-card-img'>
                                <img src={IMAGES.zerf_bordeaux} alt='' />
                            </div>
                            <div className='ft-sunglasses-card-title'>
                                <label>Bordeaux <br /><FontAwesomeIcon icon={faIndianRupee} />37000</label>
                            </div>
                        </div>

                        <div className='ft-sunglasses-card'>
                            <div className='ft-sunglasses-card-img'>
                                <img src={IMAGES.zerf_orleans} alt='' />
                            </div>
                            <div className='ft-sunglasses-card-title'>
                                <label>Orleans <br /><FontAwesomeIcon icon={faIndianRupee} />37000</label>
                            </div>
                        </div>

                        <div className='ft-sunglasses-card'>
                            <div className='ft-sunglasses-card-img'>
                                <img src={IMAGES.zerf_rennes} alt='' />
                            </div>
                            <div className='ft-sunglasses-card-title'>
                                <label>Rennes <br /><FontAwesomeIcon icon={faIndianRupee} />37000</label>
                            </div>
                        </div>

                        <div className='ft-sunglasses-card'>
                            <div className='ft-sunglasses-card-img'>
                                <img src={IMAGES.zerf_cannes} alt='' />
                            </div>
                            <div className='ft-sunglasses-card-title'>
                                <label>Cannes <br /><FontAwesomeIcon icon={faIndianRupee} />37000</label>
                            </div>
                        </div>


                    </div>
                </div>
                <div className='fastrack-eyeglasses'>
                    <div className='fastrack-eyeglasses-content'>


                        <div className='ft-eyeglasses-card'>
                            <div className='ft-eyeglasses-card-img'>
                                <img src={IMAGES.zerf_bordeaux} alt='' />
                            </div>
                            <div className='ft-eyeglasses-card-title'>
                                <label>Bordeaux <br /><FontAwesomeIcon icon={faIndianRupee} />37000</label>
                            </div>
                        </div>

                        <div className='ft-eyeglasses-card'>
                            <div className='ft-eyeglasses-card-img'>
                                <img src={IMAGES.zerf_orleans} alt='' />
                            </div>
                            <div className='ft-eyeglasses-card-title'>
                                <label>Orleans <br /><FontAwesomeIcon icon={faIndianRupee} />37000</label>
                            </div>
                        </div>

                        <div className='ft-eyeglasses-card'>
                            <div className='ft-eyeglasses-card-img'>
                                <img src={IMAGES.zerf_rennes} alt='' />
                            </div>
                            <div className='ft-eyeglasses-card-title'>
                                <label>Rennes <br /><FontAwesomeIcon icon={faIndianRupee} />37000</label>
                            </div>
                        </div>

                        <div className='ft-eyeglasses-card'>
                            <div className='ft-eyeglasses-card-img'>
                                <img src={IMAGES.zerf_cannes} alt='' />
                            </div>
                            <div className='ft-eyeglasses-card-title'>
                                <label>Cannes <br /><FontAwesomeIcon icon={faIndianRupee} />37000</label>
                            </div>
                        </div>

                    </div>
                    <div className='fastrack-eyeglasses-img'>
                        <img src={IMAGES.ft_eyeglasses} alt='' />
                    </div>
                </div>

                <div className='fastrack-naturwear-collection'>
                    <div className='fastrack-naturwear-collection-img'>
                        <img src={IMAGES.ft_natural} alt='' />
                    </div>
                    <div className='fastrack-neturwear-collection-content'>

                    <div className='ft-natural-card'>
                            <div className='ft-natural-card-img'>
                                <img src={IMAGES.zerf_bordeaux} alt='' />
                            </div>
                            <div className='ft-natural-card-title'>
                                <label>Bordeaux <br /><FontAwesomeIcon icon={faIndianRupee} />37000</label>
                            </div>
                        </div>

                        <div className='ft-natural-card'>
                            <div className='ft-natural-card-img'>
                                <img src={IMAGES.zerf_orleans} alt='' />
                            </div>
                            <div className='ft-natural-card-title'>
                                <label>Orleans <br /><FontAwesomeIcon icon={faIndianRupee} />37000</label>
                            </div>
                        </div>

                        <div className='ft-natural-card'>
                            <div className='ft-natural-card-img'>
                                <img src={IMAGES.zerf_rennes} alt='' />
                            </div>
                            <div className='ft-natural-card-title'>
                                <label>Rennes <br /><FontAwesomeIcon icon={faIndianRupee} />37000</label>
                            </div>
                        </div>

                        <div className='ft-natural-card'>
                            <div className='ft-natural-card-img'>
                                <img src={IMAGES.zerf_cannes} alt='' />
                            </div>
                            <div className='ft-natural-card-title'>
                                <label>Cannes <br /><FontAwesomeIcon icon={faIndianRupee} />37000</label>
                            </div>
                        </div>


                    </div>
                </div>

                <div className='fastrack-retro-collection'>
                    <div className='fastrack-retro-collection-content'>
                        
                    <div className='ft-retro-card'>
                            <div className='ft-retro-card-img'>
                                <img src={IMAGES.zerf_bordeaux} alt='' />
                            </div>
                            <div className='ft-retro-card-title'>
                                <label>Bordeaux <br /><FontAwesomeIcon icon={faIndianRupee} />37000</label>
                            </div>
                        </div>

                        <div className='ft-retro-card'>
                            <div className='ft-retro-card-img'>
                                <img src={IMAGES.zerf_orleans} alt='' />
                            </div>
                            <div className='ft-retro-card-title'>
                                <label>Orleans <br /><FontAwesomeIcon icon={faIndianRupee} />37000</label>
                            </div>
                        </div>

                        <div className='ft-retro-card'>
                            <div className='ft-retro-card-img'>
                                <img src={IMAGES.zerf_rennes} alt='' />
                            </div>
                            <div className='ft-retro-card-title'>
                                <label>Rennes <br /><FontAwesomeIcon icon={faIndianRupee} />37000</label>
                            </div>
                        </div>

                        <div className='ft-retro-card'>
                            <div className='ft-retro-card-img'>
                                <img src={IMAGES.zerf_cannes} alt='' />
                            </div>
                            <div className='ft-retro-card-title'>
                                <label>Cannes <br /><FontAwesomeIcon icon={faIndianRupee} />37000</label>
                            </div>
                        </div>


                    </div>
                    <div className='fastrack-retro-collection-img'>
                        <img src={IMAGES.ft_retro} alt='' />
                    </div>
                </div>
                <div className='fastrack-bottom-banner'>
                    <img src={IMAGES.ft_banner_bottom} alt='' />
                </div>
            </div>

        </>
    )
}

export default FastrackPage