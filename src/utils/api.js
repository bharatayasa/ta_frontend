const BASE_URL = import.meta.env.VITE_BASE_URL_LOCAL;
// const BASE_URL = import.meta.env.VITE_BASE_URL;

function getAccessToken() {
    return localStorage.getItem("accessToken");
}

function putAccessToken(accessToken) {
    return localStorage.setItem("accessToken", accessToken);
}

async function fetchWithToken(url, options = {}) {
    return fetch(url, {
        ...options,
        headers: {
        ...options.headers,
        Authorization: `${getAccessToken()}`,
        },
    });
}

async function login({ usernameoremail, password }) {
    const response = await fetch(`${BASE_URL}/login`, {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        },
        body: JSON.stringify({ usernameoremail, password }),
    });

    const responseJson = await response.json();

    if (responseJson.status !== "success") {
        alert(responseJson.message);
        return { error: true, data: null };
    }

    return { error: false, data: responseJson.data };
}

async function register({ username, name, email, password }) {
    const response = await fetch(`${BASE_URL}/register`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, name, email, password }),
    });

    const responseJson = await response.json();

    if (responseJson.status !== "success") {
        alert(responseJson.message);
        return { error: true };
    }

    return { error: false };
}

async function getUserLogged() {
    const response = await fetchWithToken(`${BASE_URL}/user/me`);
    const responseJson = await response.json();

    if (responseJson.status !== "success") {
        return { error: true, data: null };
    }

    return { error: false, data: responseJson.data };
}

async function adduser({ username, name, email, password, role }) {
    const response = await fetchWithToken(`${BASE_URL}/admin/add/user`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, name, email, password, role }),
    });

    const responseJson = await response.json();

    if (responseJson.status !== "success") {
        alert(responseJson.message);
        return { error: true };
    }

    return { error: false };
}

async function updateuser({ id, username, name, email, password, role, is_verified }) {
    const response = await fetchWithToken(`${BASE_URL}/admin/update/user/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, name, email, password, role, is_verified }),
    });

    const responseJson = await response.json();

    if (responseJson.status !== "success") {
        alert(responseJson.message);
        return { error: true };
    }

    return { error: false };
}

async function updateMe({ username, name, email }) {
    const response = await fetchWithToken(`${BASE_URL}/user/update/me`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, name, email }),
    });

    const responseJson = await response.json();

    if (responseJson.status !== "success") {
        alert(responseJson.message);
        return { error: true };
    }

    return { error: false };
}

async function updatePassword({ currentPassword, newPassword }) {
    const response = await fetchWithToken(`${BASE_URL}/update/my/password`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ currentPassword, newPassword }),
    });

    const responseJson = await response.json();

    if (responseJson.status !== "success") {
        alert(responseJson.message);
        return { error: true };
    }

    return { error: false };
}

async function getUsers() {
    const response = await fetchWithToken(`${BASE_URL}/admin/users`);
    const responseJson = await response.json();

    if (responseJson.status !== "success") {
        alert(responseJson.message);
        return { error: true, data: [] };
    }

    return { error: false, data: responseJson.data };
}

async function getuserbyid(id) {
    const response = await fetchWithToken(`${BASE_URL}/admin/user/${id}`, {
        method: "GET",
    });

    const responseJson = await response.json();

    if (responseJson.status !== "success") {
        alert(responseJson.message);
        return { error: true };
    }

    return responseJson.data;
}

async function deleteUser(id) {
    const response = await fetchWithToken(`${BASE_URL}/admin/delete/user/${id}`, {
        method: "DELETE",
    });

    const responseJson = await response.json();

    if (responseJson.status !== "success") {
        alert(responseJson.message);
        return { error: true };
    }

    return { error: false };
}

async function savepredict({ kelas, confidence, description, prevention, userId }) {
    const response = await fetchWithToken(`${BASE_URL}/save/predict`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ kelas, confidence, description, prevention, userId }),
    });

    const responseJson = await response.json();

    if (responseJson.status !== "success") {
        console.log(responseJson.message);
        return { error: true };
    }

    return { error: false };
}

async function getAllPredict() {
    const response = await fetchWithToken(`${BASE_URL}/get/all/predict`);
    const responseJson = await response.json();

    if (responseJson.status !== "success") {
        alert(responseJson.message);
        return { error: true, data: [] };
    }

    return { error: false, data: responseJson.data };
}

async function getPredictUser() {
    const response = await fetchWithToken(`${BASE_URL}/get/predict/by/user`);
    const responseJson = await response.json();

    if (responseJson.status !== "success") {
        alert(responseJson.message);
        return { error: true, data: [] };
    }

    return { error: false, data: responseJson.data };
}

async function deleteHistory(id) {
    const response = await fetchWithToken(`${BASE_URL}/delete/history/${id}`, {
        method: "DELETE",
    });

    const responseJson = await response.json();

    if (responseJson.status !== "success") {
        alert(responseJson.message);
        return { error: true };
    }

    return { error: false };
}

async function updateStatus({ id, status }) {
    const response = await fetchWithToken(`${BASE_URL}/update/status/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ status }),
    });

    const responseJson = await response.json();

    if (responseJson.status !== "success") {
        alert(responseJson.message);
        return { error: true };
    }

    return { error: false };
}

async function updateStatusUser(id) {
    const response = await fetchWithToken(`${BASE_URL}/update/status/user/${id}`, {
        method: "PUT",
    });

    const responseJson = await response.json();

    if (responseJson.status !== "success") {
        alert(responseJson.message);
        return { error: true };
    }

    return { error: false };
}

export {
    getAccessToken,
    putAccessToken,
    login,
    register,
    getUserLogged,
    adduser,
    updateuser,
    updateMe,
    updatePassword,
    getUsers,
    getuserbyid,
    deleteUser,
    savepredict,
    getAllPredict,
    getPredictUser,
    deleteHistory, 
    updateStatus, 
    updateStatusUser
};
