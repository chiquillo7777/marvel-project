import React from 'react'

export const Nav = ({ navigation }) => {
    return (
        <div>
            <button onClick={() => navigation(1)}>Page 1</button>
            <button onClick={() => navigation(2)}>Page 2</button>
        </div>

        
    )
}


