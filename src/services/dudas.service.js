const baseUrl = process.env.REACT_APP_API_URL;

const TECNOLOGIA = "tecnologia"
const TRABAJO = "trabajo"
const UNIVERSIDAD = "universidad"

export const dudasService = {
  dudasUniversitarias,
  dudasLaborales,
  dudasTecnologia,
  getDudaById,
  guardarDuda
};


async function getDudaById(id) {
    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    };
  
    let url = `${baseUrl}/dudas?id=${id}`
    const data = await fetch(url, requestOptions)
    const result = await data.json();
  
    return result[0]
  
  }


async function guardarDuda(titulo, descripcion, tags, tipo) {

    let tagsParseadas = tags.split(" ");

    const duda = {
        titulo, 
        descripcion, 
        tags: tagsParseadas, 
        tipo,
        puntos: 0,
        comentarios: []
    }


    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(duda)
    };
  
    let url = `${baseUrl}/dudas`
  
    const data = await fetch(url, requestOptions)
    const result = await data.json();
  
    return result
  
}

  async function dudasUniversitarias() {
    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    };
  
    let url = `${baseUrl}/dudas?tipo=${UNIVERSIDAD}`
  
    const data = await fetch(url, requestOptions)
    const result = await data.json();
  
    return result
  
  }

async function dudasLaborales(documento, clave) {
    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    };

    let url = `${baseUrl}/dudas?tipo=${TRABAJO}`

    const data = await fetch(url, requestOptions)
    const result = await data.json();

    return result
}

async function dudasTecnologia(documento, clave) {
    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    };

    let url = `${baseUrl}/dudas?tipo=${TECNOLOGIA}`

    const data = await fetch(url, requestOptions)
    const result = await data.json();

    return result
}

export default dudasService 