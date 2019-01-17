import React, { Component } from 'react'
import HomeLayout from './../components/home-layout';
import Categories from './../../categories/components/categories';
import Related from './../components/related';
import ModalContainer from './../../widgets/containers/modal';
import Modal from './../../widgets/components/modal';

class Home extends Component {
    state = {
        modalDisplay: false
    }

    handleModalToggle = (event) => {
        this.setState({
            modalDisplay: !this.state.modalDisplay,
        })
    }

    render() {
        const categories = this.props.data.categories
        return (
            <HomeLayout>
                <Related />
                <Categories
                    categories = { categories }
                    handleOpenModal = { this.handleModalToggle }
                />
                {
                    // If ternario
                    this.state.modalDisplay &&
                    <ModalContainer>
                        <Modal 
                            handleClick={ this.handleModalToggle }
                        >
                            Esto es un Modal (en un Portal)
                        </Modal>
                    </ModalContainer>
                }
            </HomeLayout>
        )
    }
}

export default Home