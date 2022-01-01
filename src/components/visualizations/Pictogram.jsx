import React from 'react'
import styles from './Pictogram.module.css'

const createIcon = (rowIndex, colIndex) => {
    return (
        <div key={`${rowIndex}-${colIndex}`} style={{ width: '10px', height: '10px', backgroundColor: 'black' }}>div</div>
    )
}

const createCol = (count, colIndex) => {

    const column =  Array(count).fill().map((e, index) => {
        createIcon(index, colIndex)
    })

    console.log(column)

    return (
        <div className={styles.column}>
            {column}
        </div>
    )

}

const Pictogram = ({ progress }) => {

    const count = 10

    const length = Math.ceil(Math.sqrt(count))

    const columns = Array(length).fill().map((e, index) => {
        const fullCol = index < (count % length)
        return fullCol ? createCol(length, index) : createCol(length - 1, index)
    })
    console.log(columns)

    return (
        <div className={styles.grid}>
            {columns}
        </div>
    )
}

export default Pictogram