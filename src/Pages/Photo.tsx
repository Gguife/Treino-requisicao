import {useState, useEffect} from 'react'
import {useParams, useNavigate} from 'react-router-dom'
import { api } from '../Api'
import '../Styles/Photo.css'

export const Photo = () =>{
  const [photo, setPhoto] = useState<any>({});
  const [loading, setLoading] = useState(false);
  const params = useParams()
  const navigate = useNavigate()


  useEffect(()=>{
      loadPhoto()
  }, [])

  const loadPhoto = async () => {
    setLoading(true)
    let json = await api.getPhoto(params.id || '')
    setPhoto(json)
    setLoading(false)
  }

  const handleBackBtn = () =>{
    navigate(-1)
  }
  return(
    <>
      {loading &&
        <div>carregando...</div>
      }
      {!loading && 
        <div className="container-photo">
        <div className="backBtn">
          <button onClick={handleBackBtn}>voltar</button>
        </div>
          <h2>{photo.title}</h2>
          <div className="container-img">
            <img src={photo.url} alt="" />
          </div>
        </div>
      }
    </>
  )
}