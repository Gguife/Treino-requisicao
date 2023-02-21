import {useParams, useNavigate, Link} from 'react-router-dom'
import { useState, useEffect } from "react"
import { api } from "../Api"
import { Photo } from "../Types/Photo"
import '../Styles/Album.css'


export const Album = () => {
  const [albumInfo, setAlbumInfo] = useState<any>({});
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [loading, setLoading] = useState(false);
  const params = useParams();
  const navigate = useNavigate();

  useEffect(()=>{
    loadAlbumInfo()
    loadPhotos()
  },[])

  const loadAlbumInfo = async() => {
    setLoading(true)
    let json = await api.getAlbum(params.id || '')
    setAlbumInfo(json)
    setLoading(false)
  }

  const loadPhotos = async () => {
    let json = await api.getPhotos(params.id || '')
    setPhotos(json)
  }


  const handleBackButton = () =>{
    navigate(-1)
  }

  return (
    <>
    {loading &&
      <div className='loading'>carregando...</div>
    }
    {!loading && photos.length > 0 &&
      <div className='container-album'>
        <div className="backBtn">
          <button onClick={handleBackButton}>Voltar</button>
        </div>
        <h2>{albumInfo.title}</h2>
        <div className="container-items">
          {photos.map((item, index)=>(
            <div className="item-box">
              <Link to={`/photos/${item.id}`}>
                <div className="item">
                  <img src={item.thumbnailUrl} alt="" />
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    }
  </>
  )
}

