import React from 'react';
import './App.css';
import Buttons from "./Components/Buttons";

function App() {

    const [countBanana, setCountBanana] = React.useState(0);
    const [countAardbei, setCountAardbei] = React.useState(0);
    const [countApple, setCountApple] = React.useState(0);
    const [countKiwi, setCountKiwi] = React.useState(0);
    const [firstname, setFirstname] = React.useState('');
    const [lastname, setLastname] = React.useState('');
    const [age, setAge] = React.useState('');
    const [postcode, setPostcode] = React.useState('');


    function Reset(){
        setCountAardbei(0); setCountBanana(0); setCountApple(0);
        setCountKiwi(0);
    }

    function HandleSubmit(e) {
        console.log(countBanana, countAardbei, countApple, countKiwi, firstname, lastname, age, postcode)
        e.preventDefault()
    }


  return (
    <>
      <h1>Fruitmand bezorgservice</h1>
        <Buttons name="🍌 Bananen" first={countBanana} second={setCountBanana}/>
        {/*<fieldset>*/}
        {/*<span>🍌 Bananen</span>*/}
        {/*<button*/}
        {/*    disabled={!countBanana} // navragen waarom dit werkt*/}
        {/*    onClick={() => setCountBanana(countBanana - 1)}*/}
        {/*>*/}
        {/*    -*/}
        {/*</button>*/}
        {/*<span>{countBanana}</span>*/}
        {/*<button*/}
        {/*    onClick={() => setCountBanana(countBanana + 1)}*/}
        {/*>*/}
        {/*    +*/}
        {/*</button>*/}
        {/*</fieldset>*/}

        <Buttons name="🍓 Aardbeien" first={countAardbei} second={setCountAardbei}/>
        {/*<fieldset>*/}
        {/*    <span>🍓 Aardbeien</span>*/}
        {/*    <button*/}
        {/*        disabled={!countAardbei} // navragen waarom dit werkt*/}
        {/*        onClick={() => setCountAardbei(countAardbei - 1)}*/}
        {/*    >*/}
        {/*        -*/}
        {/*    </button>*/}
        {/*    <span>{countAardbei}</span>*/}
        {/*    <button*/}
        {/*        onClick={() => setCountAardbei(countAardbei + 1)}*/}
        {/*    >*/}
        {/*        +*/}
        {/*    </button>*/}
        {/*</fieldset>*/}

        <Buttons name="🍏 Appels" first={countApple} second={setCountApple}/>
        {/*<fieldset>*/}
        {/*    <span>🍏 Appels</span>*/}
        {/*    <button*/}
        {/*        disabled={!countApple} // navragen waarom dit werkt*/}
        {/*        onClick={() => setCountApple(countApple - 1)}*/}
        {/*    >*/}
        {/*        -*/}
        {/*    </button>*/}
        {/*    <span>{countApple}</span>*/}
        {/*    <button*/}
        {/*        onClick={() => setCountApple(countApple + 1)}*/}
        {/*    >*/}
        {/*        +*/}
        {/*    </button>*/}
        {/*</fieldset>*/}

        <Buttons name="🥝 Kiwi's" first={countKiwi} second={setCountKiwi}/>
        {/*<fieldset>*/}
        {/*    <span>🥝 Kiwi's</span>*/}
        {/*    <button*/}
        {/*        disabled={!countKiwi} // navragen waarom dit werkt*/}
        {/*        onClick={() => setCountKiwi(countKiwi - 1)}*/}
        {/*    >*/}
        {/*        -*/}
        {/*    </button>*/}
        {/*    <span>{countKiwi}</span>*/}
        {/*    <button*/}
        {/*        onClick={() => setCountKiwi(countKiwi + 1)}*/}
        {/*    >*/}
        {/*        +*/}
        {/*    </button>*/}
        {/*</fieldset>*/}

        <button
            type="submit"
            // onClick={() => setCountBanana(0) }
            onClick={Reset}
        >Reset
        </button>

        <form
            onSubmit={HandleSubmit}
        >
            <label htmlFor="field-firstname">
                Voornaam
                <input
                    type="text"
                    name="firstname"
                    id="field-firstname"
                    value={firstname}
                    onChange={(e) => setFirstname(e.target.value)}
                />
            </label>

            <label htmlFor="field-lastname">
                Achternaam
                <input
                    type="text"
                    name="lastname"
                    id="field-lastname"
                    value={lastname}
                    onChange={(e) => setLastname(e.target.value)}
                />
            </label>

            <label htmlFor="field-age">
                Leeftijd
                <input
                    type="number"
                    name="age"
                    id="field-age"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                />
            </label>

            <label htmlFor="field-postcode">
                Postcode
                <input
                    type="text"
                    name="postcode"
                    id="field-postcode"
                    value={postcode}
                    onChange={(e) => setPostcode(e.target.value)}
                />
            </label>

            <label htmlFor="field-delivery">
                Bezorgfrequentie
                <select name="delivery" id="field-delivery">
                    <option value="every week">elke week</option>
                    <option value="every other week">om de ene week</option>
                    <option value="every month">elke maand</option>
                </select>
            </label>

            <label htmlFor="field-delivery-afternoon">
                <input
                    type="radio"
                    name="options"
                    id="field-delivery-afternoon"
                    // value="Overdag"
                />
                Overdag
            </label>

            <label htmlFor="field-delivery-evening">
                <input
                    type="radio"
                    name="options"
                    id="field-delivery-evening"
                    // value="evening"
                />
                's Avonds
            </label>

            <label htmlFor="field-comments">
                Opmerking
                <textarea
                    name="comments"
                    id="field-comments"
                    cols="30"
                    rows="10">
                </textarea>
            </label>

            <button
            >Verzend
            </button>
        </form>
    </>
  );
}

export default App;


