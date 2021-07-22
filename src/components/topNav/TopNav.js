import React from 'react';

const TopNav = () => {
    return (
        <>
            <section>
            <header className="header" id="header">
                <div className="header_toggle"><i className='bx bx-menu' id="header-toggle"/></div>
                <div className="searchbarMain">
                    <div className="input-group">
                        <span>
                            <i className="fa fa-search"/>
                        </span>
                        <input type="text" placeholder="Search" className="form-control searchbar" style={{outline: 'none'}}/>
                    </div>
                </div>
                <div className="header_img"><img src={process.env.PUBLIC_URL + 'images/profile.svg'} alt=""/></div>
            </header>
            </section>
        </>
    )
}
export default TopNav;
