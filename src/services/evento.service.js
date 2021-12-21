const baseUrl = process.env.REACT_APP_API_URL;

export const eventoServices = {
    obtenerEventos
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