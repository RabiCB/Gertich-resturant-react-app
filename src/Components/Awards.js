import React from 'react'
import "./Awards.css"
const Awards = () => {
  return (
    <div id="awards" className='app-awards'>
        <div className="awards-left-section">
            <div className='awards-title'>
                <p>Awards & Recognition</p>
                <h1>Our Laurels</h1>~
            </div>
            <div className="about-awards">
                <div className='awards-list'>
                    <img src="https://github.com/adrianhajdin/project_modern_ui_ux_restaurant/blob/main/src/assets/award01.png?raw=true"/>
                    <div className='awards-titles'>
                        <p>Bib Gourmond</p>
                        <p>Lorem ipsum Dolor site</p>
                    </div>
                </div>
                <div className='awards-list'>
                    <img src="https://github.com/adrianhajdin/project_modern_ui_ux_restaurant/blob/main/src/assets/award01.png?raw=true"/>
                    <div className='awards-titles'>
                        <p>Rising Star</p>
                        <p>Lorem ipsum Dolor site</p>
                    </div>
                </div>
                <div className='awards-list'>
                    <img src="https://github.com/adrianhajdin/project_modern_ui_ux_restaurant/blob/main/src/assets/award01.png?raw=true"/>
                    <div className='awards-titles'>
                        <p>AA Hospitality</p>
                        <p>Lorem ipsum Dolor site</p>
                    </div>
                </div>
                <div className='awards-list'>
                    <img src="https://github.com/adrianhajdin/project_modern_ui_ux_restaurant/blob/main/src/assets/award01.png?raw=true"/>
                    <div className='awards-titles'>
                        <p>Outstanding Chef</p>
                        <p>Lorem ipsum Dolor site</p>
                    </div>
                </div>
            </div>

        </div>
        <div className="app-image-food">
            <img src="https://github.com/adrianhajdin/project_modern_ui_ux_restaurant/blob/main/src/assets/laurels.png?raw=true" alt="food"/>

        </div>

    </div>
  )
}

export default Awards