import React from 'react'
import { StatusBar } from 'react-native'
import { ClockScreen } from './screens/ClockScreen'

function App(): JSX.Element {
    return (
        <>
            <StatusBar hidden />
            <ClockScreen />
        </>
    )
}

export default App
