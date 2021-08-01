import logo from './logo.svg';
import './App.css';
import Mondrian from 'mondrian-art';
import SaveSvgAsPng from 'save-svg-as-png'
import {useEffect} from "react";

const mondrianContainerId = 'my-mondrian'

function App() {


    let mondrian;

    const downloadMondrian = () => {
        SaveSvgAsPng.saveSvgAsPng(document.getElementById(mondrianContainerId).children[0], 'my-mondrian.png')
    }

    useEffect(() => {
        mondrian = new Mondrian({
            container: document.getElementById(mondrianContainerId),
            width: 700,
            height: 700,
            mondrian: {
                style: 'classic',
            }
        });

        mondrian.generate();
    },[])

    return (
        <div className="App">
            <div className={"mondrianContainer"}>
                <div className={'title'}>My Mondrian</div>
                <div id={"my-mondrian"}/>
                <div className={'controls'}>
                    <button onClick={downloadMondrian}>Download</button>
                    <button onClick={() => mondrian.generate()}>Generate</button>
                </div>
            </div>
            <div className={'stripeContainer'}>
                Stripe Goes Here
            </div>
        </div>
    );
}

export default App;
