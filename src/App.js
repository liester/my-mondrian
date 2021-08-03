import React, { useEffect } from 'react'
import './App.css'
import Mondrian from 'mondrian-art'
import SaveSvgAsPng from 'save-svg-as-png'

import { loadStripe } from '@stripe/stripe-js'
import {
  Elements
} from '@stripe/react-stripe-js'
import CheckoutForm from './checkout-form/CheckoutForm'

const mondrianContainerId = 'my-mondrian'

const stripePromise = loadStripe('pk_test_6pRNASCoBOKtIshFeQd4XMUh')

function App () {
  let mondrian

  const downloadMondrian = () => {
    SaveSvgAsPng.saveSvgAsPng(document.getElementById(mondrianContainerId).children[0], 'my-mondrian.png')
  }

  useEffect(() => {
    mondrian = new Mondrian({
      container: document.getElementById(mondrianContainerId),
      width: 700,
      height: 700,
      mondrian: {
        style: 'classic'
      }
    })

    mondrian.generate()
  }, [])

  return (
    <div className="App">
        <div className={'mondrianContainer'}>
            <div className={'title'}>My Mondrian</div>
            <div id={'my-mondrian'}/>
            <div className={'controls'}>
                <button onClick={downloadMondrian}>Download</button>
                <button style={{ marginLeft: '1em' }} onClick={() => mondrian.generate()}>Generate</button>
            </div>
        </div>
        <div className={'stripeContainer'}>
            <Elements stripe={stripePromise}>
                <CheckoutForm />
            </Elements>
        </div>
    </div>
  )
}

export default App
