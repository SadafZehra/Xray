import React,{useState,useEffect} from 'react'
import { storage } from './Firebase/firebase'
import Arrow from './Ui/arrow.png';
import LineChart from './chart'

export default function Results (){
     async function getImage(){
        //  await firebase
     }

    useEffect(() => {
        fetch('/members').then((response) => {
            if (response.ok) {
                return response.json()
            }
        })
            .then((data) => {
                console.log(data,"data")
            })
    }, [])
    return<>
    <div className="container">
                    <div className="heading">
                        <h1>Results From Model</h1>
                        </div>
                    <div className="visualization">
                        <div className="imageHolder">
                            <div className="inputimage"></div>
                            <div className="segmentedimage"></div>


                        </div>

                        <div className="modelbox">
                            <div className="boxmod">
                                <h4>Machine Learning Image</h4>
                                <div className="blackbox">Ml Model</div>
                                <img src={Arrow} width='30px' height='30px' />
                            </div>
                        </div>
                        <div className="modelresult">
                            <h4>Results waiting........</h4>
                            <LineChart />

                        </div>
                    </div>
        </div>
    </>
}