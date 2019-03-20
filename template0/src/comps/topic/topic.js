import React from 'react';
import './topic.css'

const Topic = () =>
    <div className='topic'>
        <div className='points'>
            <pre>/\</pre>
            <pre>{Math.ceil(Math.random() * 1000)}</pre>
            <pre>\/</pre>
        </div>
        <div className='content'>
            <header>
                <pre>Username</pre>
                <pre>{Math.ceil(Math.random() * 100)} minutes ago</pre>
            </header>
            <div className='text'>
                <p>Oh hai. In teh beginnin Ceiling Cat maded teh skiez An da Urfs, but he did not eated dem.</p>
                <p>Da Urfs no had shapez An haded dark face, An Ceiling Cat rode invisible bike over teh waterz.</p>
                <p>At start, no has lyte. An Ceiling Cat sayz, i can haz lite? An lite wuz. An Ceiling Cat sawed teh lite, to seez stuffs, An splitted teh lite from dark but taht wuz ok cuz kittehs can see in teh dark An not tripz over nethin. An Ceiling Cat sayed light Day An dark no Day. It were FURST!!!</p>
            </div>
            <footer>
                <pre>Comments</pre>
                <pre>Share</pre>
                <pre>Save</pre>
                <pre>...</pre>
            </footer>
        </div>
    </div>

export default Topic