import React, { Component } from 'react'
import HomeLayout from './../components/home-layout';
import Categories from './../../categories/components/categories';
import Related from './../components/related';
import ModalContainer from './../../widgets/containers/modal';

class Home extends Component {
    render() {
        const categories = this.props.data.categories
        return (
            <HomeLayout>
                <Related />
                <Categories categories={ categories } />
                <ModalContainer>
                    <div> Esto es un Portal </div>
                </ModalContainer>
            </HomeLayout>
        )
    }
}

export default Home