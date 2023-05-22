import { useState } from 'react';
import './App.scss'
import placeholder from './assets/images/placeholder-image.png';
import useForm from './hooks/useForm';
import request from './utils/request';

function App() {

  const [state, setState, resetState] = useForm({
    userInput: '',
    title: '',
    description: '',
    img: '',
  });

  const [loading, setLoading] = useState(false);

  const sendHandler = async () => {
    setLoading(true);
    const movie = await request(state?.userInput);
    if (movie?.statusCode !== 400)
    resetState({
      userInput: '',
      description: movie?.description,
      title: movie?.title,
      img: movie?.primaryImage?.url,
    })
    setLoading(false);
  };


  return (
    <div className="dashboard row d-flex align-items-center justify-content-center">
      <div className="col-md-12 col-lg-10 col-xl-8">
        <div className="container card">
          <div className="row card-body p-5">
            <img src={state?.img || placeholder} className="col-md-4 col-sm-12" alt="..." />
            <div className='col-12 col-md-8'>
              <h3 className='w-100 w-auto dashboard-title'>{state?.title}</h3>
              <p className="mt-3 mb-4 pb-2">
                <b>
                  Description:
                </b>
                {state?.description}
              </p>
              {loading && <p className="placeholder-glow">
                <span className="placeholder col-12"></span>
              </p>
              }
            </div>
          </div>
          <div className="container">
            <div className="row d-flex flex-start w-100 px-4">
              <div className="form-outline w-100">
                <textarea name="userInput" onChange={event => setState(event)} value={state?.userInput} className="form-control dashboard-input" placeholder='Type in the characteristics of movie you want'></textarea>
                <label className="form-label">Describe the movie you want</label>
              </div>
            </div>
            <div className="row px-5">
              <div className=' col-12 col-md-5'></div>
              <button disabled={loading? true: false} type="button" onClick={sendHandler} className="dashboard-button p-3 col-12 col-md-2 mb-5 mt-2 btn btn-dark btn-sm">
                Get Movie
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
