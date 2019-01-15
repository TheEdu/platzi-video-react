import React from 'react'

function HomeLayout(props) {
    return (
        <section>
            <h1> HomeLayout </h1>
            { props.children }
        </section>
    )
}

export default HomeLayout