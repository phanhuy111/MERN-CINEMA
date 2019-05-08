import {
    FETCH_POST
} from './../constant/postCons';

export const fetchPost = () => dispatch => {
    fetch('http://localhost:5000/api/posts', {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
    })
        .then(res => res.json())
        .then(post => dispatch({
            type: FETCH_POST,
            payload: post
        }));
}