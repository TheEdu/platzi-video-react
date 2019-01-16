import React, { Component } from 'react'
import HomeLayout from './../components/home-layout';
import Categories from './../../categories/components/categories';

class Home extends Component {
    render() {
        const categories = this.props.data.categories
        console.log(categories)
        return (
            <HomeLayout>
                HomeLayout Childrens
                <Categories categories={ categories } />
            </ HomeLayout>
        )
    }
}

export default Home