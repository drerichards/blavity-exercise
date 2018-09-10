import React from 'react';
import PropTypes from 'prop-types';
import {Navbar, SideNav, SideNavItem, Button, Icon} from 'react-materialize'
import Collapse from './Collapse'
import './TopNav.scss'

const TopNav = props => {
    return (
        <Navbar right className='card'>
            <SideNav
                    trigger={<Button waves='light'>{props.articleTotal} Saved Articles<Icon left>menu</Icon></Button>}
                    options={{ closeOnClick: true }}>
                <SideNavItem href='#!icon' icon='cloud'>{props.articleTotal} Saved Articles</SideNavItem>
                <SideNavItem divider />
                <SideNavItem divider />
                <Collapse savedArticles={props.savedArticles} />
            </SideNav>
        </Navbar>
    );
};

TopNav.propTypes = {
    savedArticles: PropTypes.array.isRequired,
    articleTotal: PropTypes.number.isRequired
};

export default TopNav;