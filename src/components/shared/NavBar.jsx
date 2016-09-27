import React from 'react';

class NavBar extends React.Component {
    render() {
        return (
            <nav className="navbar mynavbar">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a className="navbar-brand" href="/"><span className="glyphicon glyphicon-home"></span></a>
                    </div>
                    <div className="collapse navbar-collapse" id="myNavbar">
                        <ul className="nav navbar-nav">
                            <li className="active"><a href="#">Home</a></li>
                            <li><a href="#">Browse Studies</a></li>
                            <li><a href="#">Browse Clinical Trials</a></li>
                        </ul>
                        <ul className="nav navbar-nav navbar-right">
                            <li><a href="#"><span className="glyphicon glyphicon-log-in"></span> Login / <span className="glyphicon glyphicon-user"></span> Sign Up</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

export default NavBar;
