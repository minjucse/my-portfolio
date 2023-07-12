import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import data from "../CustomHooks/useDataHooks";

const Details = () => {
    const { detailId } = useParams();
    const project = data.find((p) => p.id === detailId);

  return (
    <div>
            <div className="carousel w-full">
                <div id="item1" className="carousel-item w-full">
                    <img src={project.img1} className="w-full" alt='' />
                </div>

                <div id="item3" className="carousel-item w-full">
                    <img src={project.img2} className="w-full" alt='' />
                </div>
                <div id="item4" className="carousel-item w-full">
                    <img src={project.img3} className="w-full" alt='' />
                </div>
            </div>
            <div className="flex justify-center w-full py-2 gap-2">
                <a href="#item1" className="btn btn-xs">1</a>
                <a href="#item2" className="btn btn-xs">2</a>
                <a href="#item3" className="btn btn-xs">3</a>
            </div>
            <h1 className="text-3xl font-bold my-4 text-white">{project.name}</h1>
            <p>{project.about}</p>
            <p className='my-2'><span className='text-blot text-white'>Technology used</span> : {project.technology}</p>
            <a href={project.client} target="blank">
                <button className="text-center rounded-lg px-4 py-3 m-2 bg-primary text-white">
                    Client Code
                </button>
            </a>
            <a href={project?.server} target="blank">
                <button className="text-center rounded-lg px-4 py-3 m-2 bg-primary text-white font-bold text-lg">
                    Server Code
                </button>
            </a>
        </div>
  )
}

export default Details