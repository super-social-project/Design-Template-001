import React from 'react';
import './subheader.css'

const SubHeader = () =>
    <div className='subheader'>
        <div className='container'>
            <div className='group'>
                <pre>VIEW</pre>
                <button>v1</button>
                <button>v2</button>
                <button>v3</button>
            </div>
            <div className='group'>
                <pre>SORT</pre>
                <pre>type \./</pre>
            </div>
            <div className='group'>
                <pre>TOPIC</pre>
                <pre>topic name \./</pre>
            </div>
            <div className='group'>
                <pre>SUB-TOPIC</pre>
                <pre>topic name \./</pre>
            </div>
        </div>
    </div>

export default SubHeader