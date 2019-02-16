export default {
  changeCity(state,city){
    state.city = city
    try{
      localStorage.city = city
    }catch (e){}
  },
  setImgs(state,galleryImgs){
    state.galleryImgs = galleryImgs
    try{
      localStorage.galleryImgs = galleryImgs
    }catch (e){}
  },
  SendId(state,id){
    state.id = id
    console.log(id)
    try{
      localStorage.id = id
    }catch (e){}
  }
}

