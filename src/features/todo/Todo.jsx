import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteTodo } from './todoSlice';

export default function Todo({ id, title, description }) {
    const dispatch = useDispatch();

    return (
        <div>
            <p>{title}</p>
            <ul>
                <li>{description}</li>
            </ul>
            <button onClick={() => dispatch(deleteTodo(id))}>delete</button>
        </div>
    )
}
