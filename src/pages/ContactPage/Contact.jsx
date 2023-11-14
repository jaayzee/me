import '../../styles/contact.css';

function Contact() {
    return (
            <div className='gap'>
                <div className='block'>
                    <div className='titleContact'> Contact Me </div>
                    <div className='contactText'>
                        Get in touch ! Shoot me an email ! Invite me to eat !
                    </div>
                    <br></br>
                    <div className='topContent'>
                        <a href="tel:626-510-3335">
                            <svg viewBox="0 0 512 512" className='logos'>
                            <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 
                            0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 
                            334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/>
                            </svg> 
                        </a>
                        <a href="tel:626-510-3335">(626) 510-3335</a>
                        <a href="mailto:jozo20020410@gmail.com" target="_blank">
                            <svg viewBox="0 0 512 512" className='logos'>
                            <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 
                            150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 
                            64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/>
                            </svg>
                        </a>
                        <a href="mailto:jozo20020410@gmail.com" target="_blank">jozo20020410@gmail.com</a>
                    </div>
                    <br></br>
                    <div className='bottomContent'>
                        <a href="https://www.linkedin.com/in/jjzee/" target="_blank">
                            <svg viewBox="0 0 448 512" className='logos'>
                            <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 
                            32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 
                            96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 
                            27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/>
                            </svg>
                        </a>
                        <a href="https://github.com/jaayzee" target="_blank">
                            <svg viewBox="0 0 448 512" className='logos'>
                            <path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM277.3 
                            415.7c-8.4 1.5-11.5-3.7-11.5-8 0-5.4.2-33 .2-55.3 0-15.6-5.2-25.5-11.3-30.7 37-4.1 76-9.2 76-73.1 0-18.2-6.5-27.3-17.1-39 
                            1.7-4.3 7.4-22-1.7-45-13.9-4.3-45.7 17.9-45.7 17.9-13.2-3.7-27.5-5.6-41.6-5.6-14.1 0-28.4 1.9-41.6 5.6 0 0-31.8-22.2-45.7-17.9-9.1 
                            22.9-3.5 40.6-1.7 45-10.6 11.7-15.6 20.8-15.6 39 0 63.6 37.3 69 74.3 73.1-4.8 4.3-9.1 11.7-10.6 22.3-9.5 4.3-33.8 
                            11.7-48.3-13.9-9.1-15.8-25.5-17.1-25.5-17.1-16.2-.2-1.1 10.2-1.1 10.2 10.8 5 18.4 24.2 18.4 24.2 9.7 29.7 56.1 19.7 56.1 19.7 0 13.9.2 
                            36.5.2 40.6 0 4.3-3 9.5-11.5 8-66-22.1-112.2-84.9-112.2-158.3 0-91.8 70.2-161.5 162-161.5S388 165.6 388 257.4c.1 73.4-44.7 136.3-110.7 
                            158.3zm-98.1-61.1c-1.9.4-3.7-.4-3.9-1.7-.2-1.5 1.1-2.8 3-3.2 1.9-.2 3.7.6 3.9 1.9.3 1.3-1 2.6-3 3zm-9.5-.9c0 1.3-1.5 2.4-3.5 2.4-2.2.2-3.7-.9-3.7-2.4 0-1.3 
                            1.5-2.4 3.5-2.4 1.9-.2 3.7.9 3.7 2.4zm-13.7-1.1c-.4 1.3-2.4 1.9-4.1 1.3-1.9-.4-3.2-1.9-2.8-3.2.4-1.3 2.4-1.9 4.1-1.5 2 .6 3.3 2.1 2.8 
                            3.4zm-12.3-5.4c-.9 1.1-2.8.9-4.3-.6-1.5-1.3-1.9-3.2-.9-4.1.9-1.1 2.8-.9 4.3.6 1.3 1.3 1.8 3.3.9 4.1zm-9.1-9.1c-.9.6-2.6 0-3.7-1.5s-1.1-3.2 0-3.9c1.1-.9 
                            2.8-.2 3.7 1.3 1.1 1.5 1.1 3.3 0 4.1zm-6.5-9.7c-.9.9-2.4.4-3.5-.6-1.1-1.3-1.3-2.8-.4-3.5.9-.9 2.4-.4 3.5.6 1.1 1.3 1.3 2.8.4 3.5zm-6.7-7.4c-.4.9-1.7 
                            1.1-2.8.4-1.3-.6-1.9-1.7-1.5-2.6.4-.6 1.5-.9 2.8-.4 1.3.7 1.9 1.8 1.5 2.6z"/>
                            </svg>
                        </a>
                        <a href="https://www.instagram.com/jozhoooo" target="_blank">
                            <svg viewBox="0 0 448 512" className='logos'>
                            <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 
                            189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 
                            26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 
                            0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 
                            36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 
                            388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 
                            9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/>
                            </svg>
                        </a>
                        <a href="https://steamcommunity.com/id/beloooga/" target="_blank">
                            <svg viewBox="0 0 448 512" className='logos'>
                            <path d="M185.2 356.5c7.7-18.5-1-39.7-19.6-47.4l-29.5-12.2c11.4-4.3 24.3-4.5 36.4.5 12.2 5.1 21.6 14.6 26.7 26.7 5 
                            12.2 5 25.6-.1 37.7-10.5 25.1-39.4 37-64.6 26.5-11.6-4.8-20.4-13.6-25.4-24.2l28.5 11.8c18.6 7.8 39.9-.9 47.6-19.4zM400 
                            32H48C21.5 32 0 53.5 0 80v160.7l116.6 48.1c12-8.2 26.2-12.1 40.7-11.3l55.4-80.2v-1.1c0-48.2 39.3-87.5 87.6-87.5s87.6 39.3 
                            87.6 87.5c0 49.2-40.9 88.7-89.6 87.5l-79 56.3c1.6 38.5-29.1 68.8-65.7 68.8-31.8 0-58.5-22.7-64.5-52.7L0 319.2V432c0 26.5 21.5 
                            48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-99.7 222.5c-32.2 0-58.4-26.1-58.4-58.3s26.2-58.3 58.4-58.3 58.4 
                            26.2 58.4 58.3-26.2 58.3-58.4 58.3zm.1-14.6c24.2 0 43.9-19.6 43.9-43.8 0-24.2-19.6-43.8-43.9-43.8-24.2 0-43.9 19.6-43.9 43.8 
                            0 24.2 19.7 43.8 43.9 43.8z"/>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
    ) 
}

export default Contact