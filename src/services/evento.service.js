const baseUrl = process.env.REACT_APP_API_URL;

export const eventoServices = {
    obtenerEventos,
    guardarEvento,
    eliminarEvento
}

async function obtenerEventos(){
    const requestOptions = {
        method: "GET",
        headers: { 'Content-Type': 'application/json' }
    }

    let url = `${baseUrl}/eventos`
  
    const data = await fetch(url, requestOptions)
    const result = await data.json();
  
    return result
}

async function guardarEvento(evento) {
    const requestOptions = {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(evento)
    }
    debugger
    let url = `${baseUrl}/eventos`
  
    const data = await fetch(url, requestOptions)
    const result = await data.json();
  
    return result
}

async function eliminarEvento(id) {
    const requestOptions = {
        method: "DELETE",
        headers: { 'Content-Type': 'application/json' },
    }
    debugger
    let url = `${baseUrl}/eventos/${id}`
  
    const data = await fetch(url, requestOptions)
    const result = await data.json();
  
    return result
}