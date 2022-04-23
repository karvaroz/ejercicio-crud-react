import axios from "axios";
import React, { useEffect, useState } from "react";
import { url } from "../helpers/url";
import "../styles/List.css";

const List = () => {
  const [lista, setLista] = useState([]);

  const getData = () => {
    axios
      .get(url)
      .then((response) => {
        setLista(response.data);
      })
      .catch((error) => console.log(error));
  };

  const deleteData =(id) =>{
    axios.delete(url+id)
    .then(response => {
      alert("Eliminado", response);
      getData()
    })
    .catch(error => alert(error))
  }
  

  useEffect(() => {
    getData();
  }, []);
  return (
    <main>
      <table className="tabla">
        <thead>
          <tr>
            <th>Nombre Completo</th>
            <th>Tipo Documento</th>
            <th>Número Documento</th>
            <th>Teléfono</th>
            <th>Celular</th>
            <th>Dirección</th>
            <th>Imagen</th>
            <th>Acción</th>
          </tr>
        </thead>
        <tbody>
          {lista.map((user) => (
            <tr key={user.id}>
              <td>{user.nombre}</td>
              <td>{user.tipo}</td>
              <td>{user.numero}</td>
              <td>{user.telefono}</td>
              <td>{user.celular}</td>
              <td>{user.direccion}</td>
              <td>
                <img src={user.imagen} alt="img-user" width="40" height="50" />
              </td>
              <td>
                <button
                  className="btn-eliminar"
                  onClick={() => {
                    deleteData(user.id);
                  }}
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
};

export default List;
