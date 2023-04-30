import React, { useState,useEffect } from 'react';
import Modal from 'react-modal';
import "./StarshipsList.css";
import StarshipsDetail from '../StarshipsDetail/Details';
import { FaArrowLeft } from 'react-icons/fa';

const Starships = ({ item }) => {
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  useEffect(() => {
    console.log(item, 'item')
  }, []);

 // handleOpenModal and handleCloseModal are used to open and close the modal
  const handleOpenModal = (event) => {
    event.stopPropagation();
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className='starshipsList'>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => handleCloseModal()}
        contentLabel={item?.name}
        className='modal'
      >
        <div className='modal-header-button'>
          <button onClick={handleCloseModal} className='modal-back-button'>
            <FaArrowLeft size={24} />
          </button>
        </div>
        <StarshipsDetail id={item?.id} />
      </Modal>
      <div className='starshipsItem flex flex-column flex-sb' onClick={handleOpenModal}>
        <div className='starshipsItemImg'>
          <img src='https://media.tenor.com/ZDwnfxYDP04AAAAC/104th-venator.gif' alt='cover' />
        </div>
        <div className='starshipsName title fw-7 fs-18'>
          <span className='starshipsName'>{item?.name}</span>
        </div>
        <div className='starshipsItemInfo'>
          <div className='starshipsItemInfoItem model fs-15'>
            <span className='text-capitalize fw-7'>Model: </span>
            <span className='model-space'>&nbsp;</span>
            <span className='text-item'> {item?.model}</span>
          </div>
          <div className='starshipsItemInfoItem model fs-15'>
            <span className='text-capitalize fw-7'>Hyperdrive: </span>
            <span className='model-space'>&nbsp;</span>
            <span className='text-item'> {item?.hyperdrive_rating}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Starships;
