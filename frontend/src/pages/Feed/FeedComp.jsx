import { Checkbox, FormControlLabel, FormGroup, styled } from '@mui/material'
import React, { useState } from 'react'
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import { Padding } from '@mui/icons-material';
import { Swiper, SwiperSlide } from 'swiper/react';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import SearchIcon from '@mui/icons-material/Search';
import data from './photos.json'
// import { useLikes } from '../../store/likesFeed';
const Feed = () => {

  const onChecked = () => {
    console.log("checkado")
  }
  const [heaert, setHeart] = useState(false)
  const [savePhoto, setSavePhoto] = useState(false)
  const [like2, setLike2] = useState(false)
  const [save2, setSave2] = useState(false)
  const heaertChange = () => {
    setHeart(!heaert)
  }
  const saveChange = () => {
    setSavePhoto(!savePhoto)
  }

  const FunSetSave = () => {
    setSave2(!save2)
  }
  const FunSetLikes = () => {
    setLike2(!like2)
  }
  const dataSlice = data.slice(0, 5)

  // const IDsUser = dataSlice.map(e => e.id)
  const ImagesUser = dataSlice.map(e => e.imagen)

  const dataLocations = [
    {
      id: "1",
      prophilePic: "../../../src/assets/img/profile_default.png",
      user: "Richard Garcia",
      level: "Profesional",
      img: [...ImagesUser],
      title: "Colorful Towns",
      location: "Cinque Terre, Italia, Europa",
      nota: "Recorrido por distintas ciudades de India, admirando su cultura y comidas tipicas ..."
    },
    {
      id: "2",
      prophilePic: "../../../src/assets/img/profile_default.png",
      user: "Julieta Igarreta",
      level: "Amateur",
      img: [...ImagesUser],
      title: "Danza y cultura ",
      location: "India, Asia",
      nota: "Recorrido por distintas ciudades de India, admirando su cultura y comidas tipicas ..."
    },
  ]

  const time = Date.now().toString()

  console.log(dataLocations)

  // const {setLike, setSave, likes} = useLikes()


  return (
    <section className=' h-[30vh] '>
      <div className='grid place-items-center h-[30vh] bg-[#0D4937] '>

        <h1 className='text-center text-[1rem] text-white p-3 min-w-[200px]'>Animate a descubrir tu próximo destino...</h1>
        <ul className=''>
          <input className='bg-[#CBCFD4] p-[.5rem]  rounded-3xl placeholder:text-[#000] focus:outline-none focus:bg-[#d1cbcb] ' type="text" name="" id="" placeholder='Buscar...                      🔍' />
        </ul>

        {/* <FormGroup sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-start",
          width: "16rem",
          padding: "1rem"
        }}>

          <FormControlLabel
            sx={{
              color: "white",

              '& .MuiFormControlLabel-label': {
                fontSize: '10px', // Aquí defines el tamaño de la fuente
              },
            }}

            control={
              <Checkbox
                id=""
                name=""
                sx={{
                  color: "white"

                }}
                onChange={onChecked}

              />

            } label="Galerias" />
          <FormControlLabel
            sx={{
              color: "white",
              '& .MuiFormControlLabel-label': {
                fontSize: '10px', // Aquí defines el tamaño de la fuente
              },
            }
            }

            control={
              <Checkbox
                id=""
                name=""
                sx={{ color: "white" }}
                onChange={onChecked}

              />

            } label="Viajes" />
        </FormGroup> */}

      </div>
      {/* Empieza acá */}

    





      <ul className='p-4 flex gap-2 '>
        <div>

          <img className='h-auto w-[40px]' src="../../../src/assets/img/profile_default.png" alt="" />
        </div>
        <div className='pt-1 '>

          <b className='text-[14px]'>Richard Garcia</b>
          <p className='text-[12px]'>Profesional</p>
        </div>
      </ul>

      <ul>
        <Swiper
          spaceBetween={10}
          slidesPerView={1}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log("")}
        >
          {
            dataSlice.map(e => (
              <SwiperSlide key={e.id}>
                <ul>
                  <img className='p-2' src={e.imagen} alt="" />
                  <ul className='flex justify-end px-4 py-2'>
                    <MoreVertIcon className='cursor-pointer' sx={{ color: "#0D4937" }} />
                    {
                      heaert ?
                        <FavoriteIcon onClick={heaertChange} sx={{ cursor: "pointer", color: "#0D4937" }} />
                        :
                        <FavoriteBorderIcon onClick={heaertChange} sx={{ cursor: "pointer", color: "#0D4937" }} />
                    }
                    {
                      savePhoto ?
                        <BookmarkIcon onClick={saveChange} sx={{ cursor: "pointer", color: "#0D4937" }} />
                        :
                        <BookmarkBorderIcon onClick={saveChange} sx={{ cursor: "pointer", color: "#0D4937" }} />
                    }
                  </ul>
                </ul>
              </SwiperSlide>
            ))
          }
        </Swiper>
      </ul>
      <ul className='flex px-3'>
        <b>Colorful Towns</b>
      </ul>
      <ul className='flex justify-evenly p-2'>
        <FmdGoodIcon sx={{ color: "#706e6e" }} />
        <p className='text-[14px]'>Cinque Terre, Italia,  Europa</p>
      </ul>
      <ul className='p-4'>
        <p className='text-[14px]'>Recorrido por distintas ciudades de India, admirando su cultura y comidas tipicas ...</p>
      </ul>

      {/* Acá empieza el segundo */}


      <ul className='p-4 flex gap-2 '>
        <div>

          <img className='h-auto w-[40px]' src="../../../src/assets/img/profile_default.png" alt="" />
        </div>
        <div className='pt-1 '>

          <b className='text-[14px]'>Richard Garcia</b>
          <p className='text-[12px]'>Profesional</p>
        </div>
      </ul>

      <ul>

        <Swiper
          spaceBetween={10}
          slidesPerView={1}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log("")}
        >
          {
            dataSlice.map(e => (
              <SwiperSlide key={e.id}>
                <ul>
                  <img className='p-2' src={e.imagen} alt="" />
                  <ul className='flex justify-end px-4 py-2'>
                    <MoreVertIcon className='cursor-pointer' sx={{ color: "#0D4937" }} />
                    {
                      like2 ?
                        <FavoriteIcon onClick={FunSetLikes} sx={{ cursor: "pointer", color: "#0D4937" }} />
                        :
                        <FavoriteBorderIcon onClick={FunSetLikes} sx={{ cursor: "pointer", color: "#0D4937" }} />
                    }
                    {
                      save2 ?
                        <BookmarkIcon onClick={FunSetSave} sx={{ cursor: "pointer", color: "#0D4937" }} />
                        :
                        <BookmarkBorderIcon onClick={FunSetSave} sx={{ cursor: "pointer", color: "#0D4937" }} />
                    }
                  </ul>
                </ul>
              </SwiperSlide>
            ))
          }
        </Swiper>
      </ul>
      <ul className='flex px-3'>
        <b>Colorful Towns</b>
      </ul>
      <ul className='flex justify-evenly p-2'>
        <FmdGoodIcon sx={{ color: "#706e6e" }} />
        <p className='text-[14px]'>Cinque Terre, Italia,  Europa</p>
      </ul>
      <ul className='p-4'>
        <p className='text-[14px]'>Recorrido por distintas ciudades de India, admirando su cultura y comidas tipicas ...</p>
      </ul>


      <ul className='p-4 flex gap-2 '>
        <div>

          <img className='h-auto w-[40px]' src="../../../src/assets/img/profile_default.png" alt="" />
        </div>
        <div className='pt-1 '>

          <b className='text-[14px]'>Richard Garcia</b>
          <p className='text-[12px]'>Profesional</p>
        </div>
      </ul>

      <ul>

        <Swiper
          spaceBetween={10}
          slidesPerView={1}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log("")}
        >
          {
            dataSlice.map(e => (
              <SwiperSlide key={e.id}>
                <ul>
                  <img className='p-2' src={e.imagen} alt="" />

                </ul>
              </SwiperSlide>
            ))
          }
        </Swiper>
      </ul>
      <ul className='flex px-3'>
        <b>Colorful Towns</b>
      </ul>
      <ul className='flex justify-evenly p-2'>
        <FmdGoodIcon sx={{ color: "#706e6e" }} />
        <p className='text-[14px]'>Cinque Terre, Italia,  Europa</p>
      </ul>
      <ul className='px-[1rem] flex items-center gap-3 '>
        <div>

          <CalendarMonthIcon />
        </div>
        <div>
          <ul>
            <p className='text-[12px]'>25 de febrero</p>
          </ul>
          <ul >
            <p className='text-[12px]'>25 de febrero</p>

          </ul>
        </div>

      </ul>
      <ul className='flex justify-evenly gap-3 p-4'>
        <button className=' px-3 text-[#6E9E30] hover:text-[#ffffff] hover:bg-[#6E9E30] py-2 rounded-3xl border border-[#6E9E30] '>Ver mas</button>
        <button className='text-white px-6 py-2 rounded-3xl border hover:bg-[#8bbb4d] border-[#6E9E30] bg-[#6E9E30]'>Seguir</button>
      </ul>
    </section>
  )
}

export default Feed