import React from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../todo/todoSlice';

export default function TodoForm() {
    const dispatch = useDispatch();

    function handleSubmit(event) {
        event.preventDefault();

        const formData = new FormData(event.currentTarget)
        const data = Object.fromEntries(formData);

        dispatch(addTodo({
            ...data,
            id: generateRandomId(4)
        }));

        event.currentTarget.reset();
    }

    return (
        <form onSubmit={handleSubmit}>
            <input name='title' type="text" placeholder='Title' required /> <br />
            <input name='description' type="text" placeholder='Description' required /> <br />

            <button>Add</button>
        </form>
    )
}

function generateRandomId(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
}

