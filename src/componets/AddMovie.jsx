import React, { useState } from 'react'
import Modal from 'react-modal';
import StarRating from './StarRating';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root');

const AddMovie = ({add}) => {
    const [modalIsOpen, setIsOpen] = React.useState(false);
    const [name, setName] = useState('')
    const [image, setImage] = useState('')
    const [rating, setRating] = useState(1)
    const [date, setDate] = useState('')

    function openModal() {
      setIsOpen(true);
    }
  
  
    function closeModal() {
      setIsOpen(false);
    }

    const handleRating = (x) => setRating(x)
    const handleSubmit = (e) => {
        e.preventDefault();
        const newMovie = {
            id:Math.random(),
            name,
            image,
            rating,
            date
        }
        add(newMovie)
        closeModal()
    }
  return (
    <div>
        <button className='btn add-movie-btn' onClick={openModal}>Add movie</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
     
      >
          <form onSubmit={handleSubmit} action="">
              <label htmlFor="">Tile</label>
              <input type="text" required value={name} onChange={(e)=>setName(e.target.value)} />
              <label htmlFor="">Date</label>
              <input type="date" required value={date} onChange={(e)=>setDate(e.target.value)} />
              <label htmlFor="">Rating</label>
              {/* prop name must be the same if its being sent from different components */}
              <StarRating rating={rating} handleRating={handleRating} />
              <label htmlFor=""   >Image</label>
              <input type="url" required value={image} onChange={(e)=>setImage(e.target.value)} />
              <div>
                  <button className='btn btn-danger'  >Confirm</button>
                  <button   onClick={closeModal} className='btn btn-danger'>Cancel</button>
              </div>
          </form>
      </Modal>
    </div>
  )
}

export default AddMovie