
import React from 'react'
import heart from "../images/heart.png"
import share from "../images/share.png"
import "./card.css"

function Card(props) {
    const { item } = props;
    return <div className='card-container'>
                <header className='card-header'>
                    <div className='card-header-left'>
                        <span className='name'>{item.name}</span><br />
                        <span>{item.location}</span>
                    </div>
                    <div className='card-header-right'>
                        <p>&#9679;&#9679;&#9679;</p>
                    </div>
                </header>

                <section className='image-container'>
                    <img src={`${process.env.REACT_APP_BASE_URL}/images/`+ item.postImage} alt="leveling" />
                </section>


                <footer className='card-footer'>
                    <div className='Likes'>
                        <div className='image-container-one'>
                            <img src={heart} alt="like" />
                            <img src={share} alt="share" />                           
                        </div>
                        <div className='desc'>
                        <span className='name'>{item.name}</span> : {item.description}
                        </div>
                    </div>
                </footer>
    </div>
}

export default Card