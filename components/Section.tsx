import { genres, movie } from '@/types/types'
import React from 'react'
import Poster from './Poster'

interface SectionProps {
  movie: movie[],
  title: string
  genres: genres[]
}

const Section:React.FC<SectionProps> = ({movie, title,genres}) => {
  return (
    <section className="max-w-[1500px] w-full">
            <h3 className="text-5xl font-semibold m-3">{title}</h3>
            <div className="movies flex gap-5 overflow-x-auto overflow-y-hidden w-full cursor-pointer">
              {movie.map((movie: movie,index) => {
              return <Poster key={movie.id + index} movie={movie} genres={genres}/>
              })}
            </div>
        </section>
  )
}

export default Section