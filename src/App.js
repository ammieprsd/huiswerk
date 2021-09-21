import React from 'react';
import './App.css';

function App() {
    const [countBanana, setCountBanana] = React.useState(0);
    const [countAardbei, setCountAardbei] = React.useState(0);
    const [countApple, setCountApple] = React.useState(0);
    const [countKiwi, setCountKiwi] = React.useState(0);

    function Reset(){
        setCountAardbei(0); setCountBanana(0); setCountApple(0);
        setCountKiwi(0);
    }

  return (
    <>
      <h1> Fruitmand bezorgservice</h1>
        <fieldset>
        <span>🍌 Bananen</span>
        <button
            disabled={!countBanana} // navragen waarom dit werkt
            onClick={() => setCountBanana(countBanana - 1)}
        >
            -
        </button>
        <span>{countBanana}</span>
        <button
            onClick={() => setCountBanana(countBanana + 1)}
        >
            +
        </button>
        </fieldset>

        <fieldset>
            <span>🍓 Aardbeien</span>
            <button
                disabled={!countAardbei} // navragen waarom dit werkt
                onClick={() => setCountAardbei(countAardbei - 1)}
            >
                -
            </button>
            <span>{countAardbei}</span>
            <button
                onClick={() => setCountAardbei(countAardbei + 1)}
            >
                +
            </button>
        </fieldset>

        <fieldset>
            <span>🍏 Appels</span>
            <button
                disabled={!countApple} // navragen waarom dit werkt
                onClick={() => setCountApple(countApple - 1)}
            >
                -
            </button>
            <span>{countApple}</span>
            <button
                onClick={() => setCountApple(countApple + 1)}
            >
                +
            </button>
        </fieldset>

        <fieldset>
            <span>🥝 Kiwi's</span>
            <button
                disabled={!countKiwi} // navragen waarom dit werkt
                onClick={() => setCountKiwi(countKiwi - 1)}
            >
                -
            </button>
            <span>{countKiwi}</span>
            <button
                onClick={() => setCountKiwi(countKiwi + 1)}
            >
                +
            </button>
        </fieldset>

        <button
            type="submit"
            // onClick={() => setCountBanana(0) }
            onClick={Reset}
        >Reset
        </button>

    </>
  );
}

export default App;


