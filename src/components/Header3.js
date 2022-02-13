import React, { useState , useEffect} from 'react';
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

const giphy = new GiphyFetch("CJsBF9KyeFT6zqR1etB5RoT77LXcFqSE");

function Header3() {
    //     const [{ user }, dispatch] = useStateValue()
    const [input, setInput] = useState('');
    const [gif, setGIF] = useState('');
    const [result, setResults] = useState('');
    const [output, setOutput] =useState('');

    const handlClick = () => {
       
        const apiCall = async () => {
            const res = await giphy.search(gif,{ limit: 1 });
            setResults(res.data.url);
        }
        apiCall()
        if (result=='') {
            console.log("not updated");
        }
        //change error state back to false
        console.log(gif);
        console.log(result);
        console.log(input);

    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        if (result!=='') {
            setOutput(result);
            setResults('');
        } 
    }
    return (
        <div className='header3'>
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
                            <input value={gif} onChange={e=> setGIF(e.target.value)}
                                placeholder={`GIF `} /> 
                                {result?(<img src={result} className='image-gif' style={{height:'30%', width:'30%'}} />)
                                :(<p className='not-gif'></p> )}
                        </div>
                        <div className='input'>
                            <EventAvailableIcon className='event' />
                            <input disabled type='text'
                                placeholder="Tag Event " />
                        </div>
                    </div>
                    <div className='line-3'></div>
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
                </form>
            </div>
            {output?(<div className='output'> 
               <h2 >{input}</h2> 
               <div className='line-3'></div>
               <img src={output} style={{height:'50%', width:'50%'}} />
            </div>):(<p className='' ></p>)}
        </div>
    )
}

export default Header3;
