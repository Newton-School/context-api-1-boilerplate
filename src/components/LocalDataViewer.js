import React, { useContext } from 'react'
import { LocalDataContext } from '../localDataContext'

export const LocalDataViewer = () => {
    const data = useContext(LocalDataContext)
    return (
        <div id="local-data-viewer">
            {data}
        </div>
    )
}