import axios from "axios";

const Base = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com'
})

export const api = {
  getAllAlbums: async () =>{
    let res = await Base.get('/albums')
    return res.data 
  },
  getAlbum: async (id: string) =>{
    let res = await Base.get(`/albums/${id}`)
    return res.data
  },
  getPhotos: async(id: string) =>{
    let res = await Base.get(`/albums/${id}/photos`)
    return res.data
  },
  getPhoto: async(id: string) =>{
    let res = await Base.get(`/photos/${id}`)
    return res.data
  }
}