import React from 'react';

const SideNav = () => {
    return (
        <>
            <div className="l-navbar" id="nav-bar">
                <nav className="nav">
                    <div>
                        <div className="topNavLogo">
                            <a className="nav_logo">
                                <span className="nav_logo-name">DNAR</span>
                            </a>
                        </div>

                        <div className="nav_list">

                            <a href="/#marketLeaders" className="nav_link active">
                                <i className='bx bx-grid-alt nav_icon'/>
                                <span className="nav_name">Market</span>
                            </a>

                            <a href="/#dashboard" className="nav_link">
                                <i className='bx bx-bar-chart-alt-2 nav_icon'/>
                                <span className="nav_name">Dashboard</span>
                            </a>

                        </div>
                    </div>

                    <a href="#" className="nav_link">
                        <i className='bx bx-log-out nav_icon'/>
                        <span className="nav_name">SignOut</span>
                    </a>
                </nav>
            </div>
        </>
    )
}
export default SideNav;
