// const BASE_URL = "http://localhost:5000";
const BASE_URL = "https://deployv2-403614.et.r.appspot.com";
// const BASE_URL = process.env.BASEURL

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

async function login({ username, password }) {
  const response = await fetch(`${BASE_URL}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, password }),
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
  const response = await fetchWithToken(`${BASE_URL}/users/me`);
  const responseJson = await response.json();

  if (responseJson.status !== "success") {
    return { error: true, data: null };
  }

  return { error: false, data: responseJson.data };
}

async function adduser({ username, name, email, password, role }) {
  const response = await fetchWithToken(`${BASE_URL}/admin/adduser`, {
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

async function updateuser({ id, username, name, email, password, role }) {
  const response = await fetchWithToken(`${BASE_URL}/admin/updateuser/${id}`, {
    method: "PUT",
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
  const response = await fetchWithToken(`${BASE_URL}/admin/deleteuser/${id}`, {
    method: "DELETE",
  });

  const responseJson = await response.json();

  if (responseJson.status !== "success") {
    alert(responseJson.message);
    return { error: true };
  }

  return { error: false };
}

async function getnewslocal() {
  const response = await fetchWithToken(`${BASE_URL}/newsLokal`);
  const responseJson = await response.json();

  if (responseJson.status !== "success") {
    alert(responseJson.message);
    return { error: true, data: [] };
  }

  const formattedData = responseJson.data.map(item => ({
    title: item.title,
    url: item.url,
    image: item.image,
    date: item.date,
    category: item.category
  }));

  return { error: false, data: formattedData };
}

async function savepredict({ kelas, confidence, description, prevention, userId }) {
  const response = await fetchWithToken(`${BASE_URL}/savepredict`, {
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

export { getAccessToken, putAccessToken, login, register, getUserLogged, adduser, updateuser, getUsers, getuserbyid, deleteUser, getnewslocal, savepredict};
