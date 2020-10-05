import axios from 'axios'
import { setAlert } from './alert'
import { GET_POSTS, POST_ERROR, UPDATE_LIKES, UPDATE_DISLIKES } from './types'

// Get Posts
export const getPosts = () => async dispatch => {
    try {
        const res = await axios.get('/api/posts')

        dispatch({
            type: GET_POSTS,
            payload: res.data
        })
    } catch(err) {
        dispatch({
            type: POST_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        })
    }
}

// Add/Remove Like
export const like = postId => async dispatch => {
    try {
        const res = await axios.put(`/api/posts/like/${postId}`)

        dispatch({
            type: UPDATE_LIKES,
            payload: { id: postId, likes: res.data }
        })
    } catch(err) {
        dispatch({
            type: POST_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        })
    }
}

// Add/Remove Dislike
export const dislike = postId => async dispatch => {
    try {
        const res = await axios.put(`/api/posts/dislike/${postId}`)

        dispatch({
            type: UPDATE_DISLIKES,
            payload: { id: postId, dislikes: res.data }
        })
    } catch(err) {
        dispatch({
            type: POST_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        })
    }
}

// Remove Like
// export const removeLike = postId => async dispatch => {
//     try {
//         const res = await axios.put(`/api/posts/unlike/${postId}`)

//         dispatch({
//             type: UPDATE_LIKES,
//             payload: { id: postId, likes: res.data }
//         })
//     } catch(err) {
//         dispatch({
//             type: POST_ERROR,
//             payload: { msg: err.response.statusText, status: err.response.status }
//         })
//     }
// }