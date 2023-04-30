import React, { useState, useEffect } from 'react';
import Loading from '../Loader/Loader';
import './Details.css';
import axios from 'axios';
import Detailspng from '../../../src/images/details.png'
const URL = 'https://swapi.dev/api/starships/';

const Details = ({ id }) => {

  const [loading, setLoading] = useState(false);
  const [starship, setStarship] = useState(null);

  useEffect(() => {
    async function getBookDetails() {
      setLoading(true);

      try {
        const response = await axios.get(`${URL}${id}`);
        const data = response.data;

        if (data) {
          const {
            name,
            model,
            manufacturer,
            max_atmosphering_speed,
            crew,
            passengers,
            cargo_capacity,
            hyperdrive_rating,
          } = data;

          const newBook = {
            name,
            model,
            manufacturer,
            max_atmosphering_speed,
            crew,
            passengers,
            cargo_capacity,
            hyperdrive_rating,
          };

          setStarship(newBook);
        } else {
          setStarship(null);
        }

        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    }

    getBookDetails();
  }, [id]);

  if (loading) {
    return <Loading />;
  }
  return (
    <section className='starshipDetails'>

      <div className='starshipDetailsMain'>
        <div className='container starshipDetailsContainer'>
          <div className='starshipsDetailsContent grid'>

            <div className='model'>
              <div className='starshipsDetailsName title'>
                <span className='fw-6 fs-24 '>{starship?.name}</span>
                <div className='modal-underline'></div>
              </div>
            </div>

            <div className='starshipsDetailsImg'>
              <img src='https://media.tenor.com/ZDwnfxYDP04AAAAC/104th-venator.gif' alt='cover img' />
            </div>
            <div className='model-details'>
              <div className='starshipsDetailsInfo'>

                <div className='starshipsDetailsItem'>
                  <span className='model-text fw-6'>Model: </span>
                  <span className='text-italic red'> {starship?.model}</span>

                </div>
                <div className='starshipsDetailsItem'>
                  <span className='model-text fw-6'>Hypedrive Rating: </span>
                  <span>{starship?.hyperdrive_rating}</span>
                </div>
                <div className='starshipsDetailsItem'>
                  <span className='model-text fw-6'>Passengers: </span>
                  <span>{starship?.passengers}</span>
                </div>
                <div className='starshipsDetailsItem'>
                  <span className='model-text fw-6'>Max Atmosphering Speed: </span>
                  <span>{starship?.max_atmosphering_speed}</span>
                </div>
                <div className='starshipsDetailsItem'>
                  <span className='model-text fw-6'>Manufacturer: </span>
                  <span>{starship?.manufacturer}</span>
                </div>
                <div className='starshipsDetailsItem'>
                  <span className='model-text fw-6'>Crew: </span>
                  <span>{starship?.crew}</span>
                </div>
                <div className='starshipsDetailsItem'>
                  <span className='model-text fw-6'>Cargo Capacity: </span>
                  <span>{starship?.cargo_capacity}</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>

  );
};

export default Details;