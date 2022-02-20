
export const SET_USER_NAME = 'SET_USER_NAME';
export const SET_USER_AGE = 'SET_USER_AGE';

export const setName = name => dispatchEvent =>{
    dispatchEvent({
        type: SET_USER_NAME,
        payload: name,
    })
}