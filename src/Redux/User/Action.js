import { REQ_USER } from "./ActionType";

export const getUserProfileAction = (token) => async (dispatch) => {
    try {
        const res = await fetch("http://localhost:5454/api/users/req", {
            method: "GET",

            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + token,
            },
        });

        const reqUser = await res.json();

        // console.log("--- req user --- ",reqUser)

        dispatch({ type: REQ_USER, payload: reqUser });
    } catch (error) {
        console.log("catch error - ", error)
    }

};