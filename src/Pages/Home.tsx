import { useEffect, useState } from "react"
import { api } from '../Api'
import {Link} from 'react-router-dom'
import { Album } from '../Types/Album'
import '../Styles/Home.css'

export const Home = () => {
  const [album, setAlbum] = useState<Album[]>([]);

  useEffect (() =>{
    loadAlbums();
  },[])


  const loadAlbums = async() => {
    let json = await api.getAllAlbums()
    setAlbum(json)
  }


  return (
    <div className="container-home">
      {album.map((item, index)=>(
        <Link to={`album/${item.id}`} className="links">
        <div key={index} className="container-box">
          <span>#{item.id} - {item.title}</span>
        </div>
        </Link>
      ))}
    </div>
  )
}
