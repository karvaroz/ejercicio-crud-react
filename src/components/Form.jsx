import axios from "axios";
import React, { useState } from "react";
import { fileUpload } from "../helpers/fileUpload";
import { url } from "../helpers/url";
import "../styles/Form.css";

const Form = () => {
  const [estudiantes, setEstudiantes] = useState({
    nombre: "",
    tipo: "",
    numero: "",
    telefono: "",
    celular: "",
    direccion: "",
    imagen: "",
  });

  const handleChange = ({ target }) => {
    setEstudiantes({
      ...estudiantes,
      [target.name]: target.value,
    });
  };

  const handleFileChange = ({ target }) => {
    const file = target.files[0];
    fileUpload(file)
      .then((response) => {
        estudiantes.imagen = response;
      })
      .catch((error) => alert("Ha ocurrido un error: ", error));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(url, estudiantes)
      .then((response) => {
        alert("Registro Exitoso", response);
      })
      .catch((error) => alert("Error: ", error));
  };

  return (
    <main>
      <form id="form" className="form" onSubmit={handleSubmit}>
        <h2>Registro de Estudiantes</h2>
        <hr />
        {/* Nombre */}
        <label>
          Nombre Completo{" "}
          <input
            type="text"
            id="inputNombre"
            name="nombre"
            onChange={handleChange}
          />
        </label>
        <br />
        {/* Documento */}
        <label>
          Tipo de documento
          <select name="tipo" id="selectTipo" onChange={handleChange}>
            <option value="null" name="seleccionar">
              Seleccionar
            </option>
            <option value="C.C" name="C.C">
              C.C
            </option>
            <option value="T.I" name="T.I">
              T.I
            </option>
            <option value="C.E" name="C.E">
              C.E
            </option>
          </select>
        </label>
        <br />
        <label>
          Número de documento{" "}
          <input
            type="number"
            name="numero"
            id="inputNumero"
            min={0}
            onChange={handleChange}
          />
        </label>
        <br />
        {/* Teléfono */}
        <label>
          Teléfono{" "}
          <input
            type="tel"
            name="telefono"
            id="inputTelefono"
            onChange={handleChange}
          />
        </label>
        <br />
        {/* Celular */}
        <label>
          Celular{" "}
          <input
            type="tel"
            name="celular"
            id="inputCelular"
            onChange={handleChange}
          />
        </label>
        <br />
        {/* Dirección */}
        <label>
          Dirección{" "}
          <input
            type="text"
            name="direccion"
            id="inputDireccion"
            onChange={handleChange}
          />
        </label>
        <br />
        {/* Imagen */}
        <label>
          Imagen{" "}
          <input
            type="file"
            name="imagen"
            id="btnImagen"
            onChange={handleFileChange}
          />
        </label>

        <button id="btnRegistro">Enviar</button>
      </form>
    </main>
  );
};

export default Form;
