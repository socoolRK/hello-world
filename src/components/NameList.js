import React from 'react'
import Person from './Person'
function NameList() {
    const names = ['Clark', 'Diana', 'Bruce', 'Clark']
    // const persons = [
    //     {
    //         id: 1,
    //         name: 'Clark',
    //         age: 30,
    //         skill: 'React'
    //     },
    //     {
    //         id: 2,
    //         name: 'Bruce',
    //         age: 31,
    //         skill: 'Angular'
    //     },
    //     {
    //         id: 3,
    //         name: 'Diana',
    //         age: 32,
    //         skill: 'Vue'
    //     }]
    const nameList = names.map((name, index) => <h2 key={index}>{index}{name}</h2>)
    return (
        <div>
            {nameList}
        </div>
    )
}

export default NameList
