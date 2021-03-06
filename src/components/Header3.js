import React, { useState, useEffect } from 'react';
import '../css/header3.css'
import { Avatar } from '@material-ui/core';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import GroupIcon from '@mui/icons-material/Group';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import GifBoxIcon from '@mui/icons-material/GifBox';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import LockIcon from '@mui/icons-material/Lock';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { GiphyFetch } from '@giphy/js-fetch-api';
import Top from './Top';

const giphy = new GiphyFetch("CJsBF9KyeFT6zqR1etB5RoT77LXcFqSE");

function Header3() {
   
    //     const [{ user }, dispatch] = useStateValue()
    const [input, setInput] = useState('');
    const [input1, setInput1] = useState('');
    const [gif, setGIF] = useState('');
    const [result, setResults] = useState('');
    const [output, setOutput] = useState('');

    const handlClick = () => {
        // const APIKEY = "CJsBF9KyeFT6zqR1etB5RoT77LXcFqSE";
        // const url = "https://api.giphy.com/v1/gifs/search?api_key=CJsBF9KyeFT6zqR1etB5RoT77LXcFqSE&limit=1&q=";
        const apiCall = async () => {
            const res = await giphy.search(gif, { limit: 1 });
            setResults(res.data[0].images.downsized.url);
            console.log(res.data[0]);
        }
        // setResults(url.concat(gif));

        // fetch(url)
        // .then(response => response.json())
        // .then(content => {
        //   //  data, pagination, meta
        //   console.log(content.data);
        //   setResults(content.data[0].image.downsized.url)
        // })
        apiCall()
        if (result === '') {
            console.log("not updated");
        }
        //change error state back to false
        console.log(gif);
        console.log(result);
       
        // console.log(input);

    }

    const handleSubmit = (e) => {

        e.preventDefault();
        if (result !== '') {
            console.log(result, "result");
            setOutput(result);
            setResults('');
        }
        setInput1(input)
        if(gif!==""){
            setGIF('');
            setInput('')
        }
    }
    return (
        <div className='header3'>
            <div className='upper-div'>
            <Top />
            <div className='avatar'>
                <Avatar className='avatarIcon' />
                <div className='avatarInput'>
                    <input className='input' value={input} onChange={(e) => setInput(e.target.value)}
                        placeholder={`What's on your mind ?`} />
                </div>
            </div>

            <div className='emoji'></div>

            <div className='col-10'>
                <div className='color color-14'></div>
                <div className='color color-12'></div>
                <div className='color color-13'></div>
                <div className='color color-4'></div>
                <div className='color color-5'></div>
                <div className='color color-6'></div>
                <div className='color color-7'></div>
                <div className='color color-8'></div>
                <div className='color color-9'></div>
                <div className='color color-10'></div>
                <div className='color color-11'></div>
                <div className='color color-2'></div>
                <div className='color color-3'></div>
                <div className='color color-1'></div>
                <div className='color color-15'> <DoubleArrowIcon className='arrow' /></div>
            </div>

            <div className='line-3'></div>
            <div className="gif-location">
                <form onSubmit={handleSubmit} >
                    <div className="friends-location">
                        <div className='input'>
                            <GroupIcon className='group' />
                            <input disabled type='text'
                                placeholder="Tag Friends"
                            />
                        </div>
                        <div className='input'>
                            <LocationOnIcon className='location' />
                            <input disabled type='text'
                                placeholder="Check in " />
                        </div>

                    </div>
                    <div className='gif-events'>
                        <div className='input'>
                            <GifBoxIcon className='gif-icon' onClick={handlClick} />
                            <input value={gif} onChange={e => setGIF(e.target.value)}
                                placeholder={`GIF `} />

                        </div>
                        <div className='input'>
                            <EventAvailableIcon className='event' />
                            <input disabled type='text'
                                placeholder="Tag Event " />
                        </div>
                    </div>
                   <p > add text in gif and then click on GIF Icon for fetch gif after that click on submit </p>
                    <div className='line-3'></div>

                    <div className='gif-button'>
                        {result ? (<img src={result} height='100' width='100' className='result-image' />)
                            : (<p className='not-gif'></p>)}
                        <div className='buttons'>
                            <div className='onlyme'>
                                <LockIcon className='lock' />
                                <button type="submit" className='btn1'>Only me</button>
                                <ArrowDropDownIcon className='drop' />
                            </div>

                            <div className='send'>
                                <button type="submit" className='btn2'  >Send</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            </div>
            <div className='lower-div'>
            {output ? (<div className='output'>
                <h2 className='output-img'>{input1}</h2>
                <div className='line-3'></div>
                <img src={output} width="600" height="420" className='output-img' />
                
                {/* <embed type="image/*" src={output}  width="300" height="200" /> */}
            </div>) : (<p className='' ></p>)}
            </div>
        </div>
    )
}

export default Header3;
