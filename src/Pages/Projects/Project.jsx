import React from 'react'
import { useNavigate } from 'react-router-dom';

const Project = ({ project }) => {
    const { id, img, name, technology, live } = project;
    const navigate = useNavigate()
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>{technology}</p>
                <div className="card-actions">
                    <a target='_blank' href={live} className="btn btn-primary" rel="noreferrer">
                        Live
                    </a>
                    <button onClick={() => navigate(`/details/${id}`)} className="btn btn-primary">Details</button>
                </div>
            </div>
        </div>
    )
}

export default Project