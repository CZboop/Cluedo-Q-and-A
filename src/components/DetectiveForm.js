import './DetectiveForm.css';

const DetectiveForm = () => {

    return (
        <div className='detective-form-container'>
            <div className='suspects-container'>
                <h2>Suspects</h2>
                <div className='form-elem'><h4> Colonel Mustard <input type="checkbox" ></input> </h4></div>
                <div className='form-elem'><h4> Professor Plum <input type="checkbox" ></input> </h4></div>
                <div className='form-elem'><h4> Reverend Green <input type="checkbox" ></input> </h4></div>
                <div className='form-elem'><h4> Mrs Peacock <input type="checkbox" ></input> </h4></div>
                <div className='form-elem'><h4> Miss Scarlett <input type="checkbox" ></input> </h4></div>
                <div className='form-elem'><h4> Mrs White <input type="checkbox" ></input> </h4></div>
            </div>
    
            <div className='weapons-container'>
                <h2>Weapons</h2>
                <div className='form-elem'><h4> Dagger <input type="checkbox" ></input> </h4></div>
                <div className='form-elem'><h4> Candlestick <input type="checkbox" ></input> </h4></div>
                <div className='form-elem'><h4> Revolver <input type="checkbox" ></input> </h4></div>
                <div className='form-elem'><h4> Rope <input type="checkbox" ></input> </h4></div>
                <div className='form-elem'><h4> Lead Pipe <input type="checkbox" ></input> </h4></div>
                <div className='form-elem'><h4> Spanner <input type="checkbox" ></input> </h4></div>
            </div>

            <div className='rooms-container'>
                <h2>Rooms</h2>
                <div className='form-elem'><h4> Hall <input type="checkbox" ></input> </h4></div>
                <div className='form-elem'><h4> Lounge <input type="checkbox" ></input> </h4></div>
                <div className='form-elem'><h4> Dining Room <input type="checkbox" ></input> </h4></div>
                <div className='form-elem'><h4> Kitchen <input type="checkbox" ></input> </h4></div>
                <div className='form-elem'><h4> Ball Room <input type="checkbox" ></input> </h4></div>
                <div className='form-elem'><h4> Conservatory <input type="checkbox" ></input> </h4></div>
                <div className='form-elem'><h4> Billiard Room <input type="checkbox" ></input> </h4></div>
                <div className='form-elem'><h4> Library  <input type="checkbox" ></input> </h4></div>
                <div className='form-elem'><h4> Study <input type="checkbox" ></input> </h4></div>
            </div>
        </div>
    )
}

export default DetectiveForm;