import React from 'react'
import Posts from './Posts'

const MainPosts = () => {
    return (
        <main className='main-posts'>
            <div class="row mb-2">
                <Posts />
                <Posts />
                <Posts />
                <Posts />
            </div>

        </main>
    )
}

export default MainPosts