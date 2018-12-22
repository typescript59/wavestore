import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Header extends Component {

    state = {
        page:[
            {
                name: 'Home',
                linkTo: '/',
                public: true
            },
            {
                name: 'Guitars',
                linkTo: '/shop',
                public: true
            }
        ],
        user: [
            {
                name: 'My Cart',
                linkTo: '/user/cart',
                public: false
            },
            {
                name: 'My Account',
                linkTo: '/user/dashboard',
                public: false
            },
            {
                name: 'Log in',
                linkTo: '/register_login',
                public: true
            },
            {
                name: 'Log out',
                linkTo: '/user/logout',
                public: false
            }
        ]
    }

    showLinks = (type) => {
        let list = [];

        if(this.props.user.userData) {
            type.forEach((item) => {
                if(!this.props.user.userData.isAuth) {
                    if(item.public){
                        list.push(item)
                    }
                } else {
                    if(item.name !== 'Log in'){
                        list.push(item);
                    }
                }
            });
        }
        return list.map((item, i) => {
            // we return function because each link cound be a simple function and not
            // a route like logout functionality
            return this.defaultLink(item,i);
        });
    }

    defaultLink = (item,i) => (
        <Link to={item.linkTo} key={i}>
            {item.name}
        </Link>
    )


    render() {
        return (
            <header className="bck_b_light">
                <div className="container">
                    <div className="left">
                        <div className="logo">
                            WAVES
                        </div>
                    </div>
                    <div className="right">
                        <div className="top">
                            {this.showLinks(this.state.user)}
                        </div>
                        <div className="bottom">
                            {this.showLinks(this.state.page)}
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}

function mapStateToProps(state){
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(Header);