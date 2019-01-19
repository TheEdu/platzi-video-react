import React, { Component } from 'react'
import HomeLayout from './../components/home-layout';
import Categories from './../../categories/components/categories';
import Related from './../components/related';
import ModalContainer from './../../widgets/containers/modal';
import Modal from './../../widgets/components/modal';
import HandleError from './../../error/containers/handle-error';
import VideoPlayer from './../../player/containers/video-player';

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
            <HandleError>
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
                                <VideoPlayer
                                    autoPlay={true}
                                />
                            </Modal>
                        </ModalContainer>
                    }
                </HomeLayout>
            </HandleError>
        )
    }
}

export default Home