import React from 'react'

const updatedComponent = OriginalComponent => {
    class NewComponent extends React.component {
        render() {
            return <OriginalComponent name='Ravindra' />
        }
    }
    return NewComponent
}

export default updatedComponent