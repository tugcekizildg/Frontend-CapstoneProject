import React from 'react';
import { useState } from 'react';

const BookingForm = (props) => {
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [guest, setGuest] = useState('');
    const [occasion, setOccasion] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        //console.log(date);
        props.SubmitForm(e)
    }
   
    const handleChange = (e) => {
        setDate(e);
        props.dispatch(e);
    }
    return (
        <header>
            <section>
                <form onSubmit={handleSubmit}>
                    <fieldset>
                        <div>
                            <label htmlFor='book-date'>Choose a date:</label>
                            <input id='book-date' type='date' name='book-date' value={date} onChange={(e) => handleChange(e.target.value)} required />
                        </div>
                         {/* Time Selection */}
                        <div>
                            <label htmlFor='book-time'>Choose a time:</label>
                            <select id='book-time' name='book-time' value ={time} onChange={(e)=> setTime(e.target.value)}>
                                <option value=''>Select a time</option>
                                {
                                    props.availableTimes.map(availableTimes => { return <option key={availableTimes} value={availableTimes}>{availableTimes}</option>})
                                }
                            </select>
                        </div>
                        {/* Guest Number Selection */}
                        <div>
                            <label htmlFor='book-guests'>Number of guests:</label>
                            <input id='book-guests' type='number' name='book-guests' min='1' max='10' value={guest} onChange={(e) => setGuest(e.target.value)} required />
                        </div>
                        {/* Occasion Selection */}
                        <div>
                            <label htmlFor='book-occasion'>Occasion:</label>
                            <select id='book-occasion' key={occasion} value={occasion} onChange={(e) => setOccasion(e.target.value)}>
                                <option>
                                    Birthday
                                </option>
                                <option>
                                    Engagement
                                </option>
                                <option>
                                    Anniversary
                                </option>
                            </select>
                        </div>
                        {/* Submit Button */}
                        <div className='btnReceive'>
                            <input aria-label="On Click" type='submit' value='Make Your reservation' />
                            <button type='submit'>Make Your reservation</button>
                        </div>
                    </fieldset>
                </form>
            </section>
        </header>
    );
};

export default BookingForm;