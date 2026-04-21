import { useState, useEffect } from "react"

const API_KEY = '2c16431219msh4e66357e0f01a8fp1635c4jsn34d3803ff9bb'

export const Movie = () => {

    const [text, setText] = useState('')
    const [searchState, setSearch] = useState('')

    const handleChange = (e) => {
        console.log(e.target.value)
        setText(e.target.value)
    }
    return (
        <>
        <input
        type = "text"
        value = {text}
        onChange={handleChange}
        />
        <button>test </button>


        </>
)
}