import axios from 'axios'
import { useState } from 'react'
import Select from './Select'
import './Form.css'

const Form = () => {
    const [name, setName] = useState('')
    const [event, setEvent] = useState({ key: '', val: '' })
    const [city, setCity] = useState({ key: '', val: '' })
    const [errors, setErrors] = useState([])

    const choicesEvents = [
        ['', '...'],
        ['front-end-react', 'Front End - ReactJS'],
        ['back-end-react', 'Back End - Node.js'],
        ['full-stack-react', 'Full Stack - MERN'],
        ['tester-manualny', 'Tester Manualny'],
    ]

    const choicesCities = [
        ['', '...'],
        ['online', 'Online'],
        ['warsaw', 'Warszawa'],
        ['full-stack-react', 'Full Stack - MERN'],
        ['cracow', 'Krakow'],
    ]

    const saveEvent = (eventObj) => {
        console.log('saveEvent')
    }

    const resetForm = () => {
        setName('')
        setEvent({ key: '', val: '' })
        setCity({ key: '', val: '' })
        setErrors([])
    }

    const validateForm = (e) => {
        e.preventDefault()
        let errorsValidate = []
        if (name.trim() === '') {
            errorsValidate.push('Wpisz Imie i Nazwisko')
        }
        if (errorsValidate.length > 0) {
            setErrors(
                errorsValidate.map((errorText, index) => {
                    return <li key={index}>{errorText}</li>
                })
            )
        }
        saveEvent()
        resetForm()
    }

    const handleChangeName = (e) => {
        setName(e.target.value)
    }

    const handleChangeEvent = (e) => {
        setEvent({
            key: e.target.value,
            val: e.target.options[e.target.selectedIndex].innerText
        })
    }

    const handleChangeCity = (e) => {
        setCity({
            key: e.target.value,
            val: e.target.options[e.target.selectedIndex].innerText
        })
    }

    return (
        <div className="formWrapper">
            <form action="#" onSubmit={validateForm}>
                <div className="wrapper">
                    <label htmlFor="name">Imie i Nazwisko</label>
                    <input type="text" id='name' value={name} onChange={handleChangeName} />
                </div>
                <div className="wrapper">
                    <label htmlFor="event">Wydarzenie</label>
                    <Select
                        values={choicesEvents}
                        selectedValue={event.key}
                        onValueChange={handleChangeEvent}
                        id='event'
                    />
                </div>
                <div className="wrapper">
                    <label htmlFor="city">Miasto</label>
                    <Select
                        values={choicesCities}
                        selectedValue={event.key}
                        onValueChange={handleChangeCity}
                        id='city'
                    />
                </div>
                <div className="wrapper">
                    <button type="submit">Zapisz na szkolenie </button>
                </div>
            </form>
            <div className="errorsWrapper">
                <ul className="errors">
                    {errors}
                </ul>
            </div>
        </div>
    )
}

export default Form