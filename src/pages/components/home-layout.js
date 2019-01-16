import React from 'react'

function HomeLayout(props) {
    return (
        <section>
            <h1> HomeLayout </h1>
            {/* Render all childrens */}
            { props.children }
        </section>
    )
}

export default HomeLayout