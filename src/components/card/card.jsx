import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import './card.css'

export default function Card(props)
{
    const imageUrl = `https://image.tmdb.org/t/p/original/${props.poster}`;
    const [video,setvideo]=useState('');
    const youtubeURL= `https://www.youtube.com/embed/`;
    

    const fetchURL = async () => {
        try {
          const response = await axios.get(`/movie/${props.id}`, {
            params: {
              append_to_response: 'videos',
            },
          });
          if (response.data.videos.results.length > 0) {
            setvideo(response.data.videos.results[0].key);
          }
        } catch (e) {
          console.log(e);
        }
      };
    useEffect(() => {
        fetchURL();
      }, []);

    return (
        <div>
            <img className='card_poster' src={imageUrl} alt='poster' />
          
            
            </div>
         
       
      );
}

