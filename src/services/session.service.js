const baseUrl = process.env.REACT_APP_API_URL

export const sessionService = {
  login,
  register,
  logout,
  getUserData,
  updateUserStatus,
}

async function getUserData(id) {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      authorization: "bearer " + localStorage.getItem("token"),
    },
  }

  let url = `${baseUrl}/api/user`
  const data = await fetch(url, requestOptions)
  const result = await data.json()

  return result
}

async function login(documento, clave) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ documento, password: clave }),
  }

  let url = `${baseUrl}/api/login`

  const data = await fetch(url, requestOptions)
  const result = await data.json()

  return result
}

async function register(estudiante) {
  estudiante.status = "activo"

  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(estudiante),
  }

  let url = `${baseUrl}/api/registrarse`
  const data = await fetch(url, requestOptions)
  const result = await data.json()

  return result
}

async function updateUserStatus(status) {
  const requestOptions = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      authorization: "bearer " + localStorage.getItem("token"),
    },
    body: JSON.stringify({ status: status }),
  }

  let url = `${baseUrl}/api/user`
  const data = await fetch(url, requestOptions)
  const result = await data.json()

  return result
}

function logout() {
  // remove user from local storage to log user out
  localStorage.removeItem("token")
}

export default sessionService
