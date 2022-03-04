import React from 'react'
// import {BrowserRouter as Router,Route} from 'react-router-dom'
import {BrowserRouter as Router ,Route,Routes} from 'react-router-dom'
import Results from '../results';
import Xray from '../xray';
class AppRouter extends React.Component{
    render(){
        return(
            <Router>
                <Routes>
                <Route path='/' element={<Xray/>}></Route>
                </Routes>
                <Routes>
                <Route path='/members' element={<Results/>}></Route>
                </Routes>
               

            </Router>
        )
    }

}

export default AppRouter;