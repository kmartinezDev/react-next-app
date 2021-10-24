import { Fragment, useState } from "react";
import Layaout from "../components/layout/Layaout";
import { Formulario, Campo, InputSubmit  } from "../components/ui/Formulario";
import { css } from "@emotion/react";
import useValidacion from "../hooks/useValidacion";
import ValidarCrearCuenta from "../validaciones/ValidarCrearCuenta";

const CrearCuenta = () => {

    const stateInicial = {
        nombre:'',
        email:'',
        password:''
    }

    const crearCuenta = () => {
        console.log("creando cuenta...")
    }

    const {valores,errores,submitForm,handleSubmit,handleChange} = useValidacion(stateInicial, ValidarCrearCuenta, crearCuenta)

    const { nombre, email, password } = valores



    return ( 
        <Fragment>
            <Layaout>
                <Fragment>
                    <h1
                        css={css`
                            text-align: center;
                            margin-top: 5rem;
                        `}
                    >Crear cuenta</h1>
                    <Formulario
                        onSubmit={handleSubmit}
                        noValidate
                    >
                        <Campo>
                            <label htmlFor="nombre">Nombre</label>
                            <input 
                                type="text"
                                id="nombre"
                                placeholder="Tu nombre"
                                name="nombre" 
                                value={nombre}
                                onChange={handleChange}
                            />
                        </Campo>
                        <Campo>
                            <label htmlFor="email">Email</label>
                            <input 
                                type="email"
                                id="email"
                                placeholder="Tu email"
                                name="email"
                                value={email}
                                onChange={handleChange} 
                            />
                        </Campo>
                        <Campo>
                            <label htmlFor="password">Password</label>
                            <input 
                                type="password"
                                id="password"
                                placeholder="Tu password"
                                name="password"
                                value={password}
                                onChange={handleChange} 
                            />
                        </Campo>
                        <InputSubmit 
                            type="submit" 
                            value="Crear Cuenta"
                        />
                    </Formulario>
                </Fragment>
            </Layaout>
        </Fragment>
    );
}
 
export default CrearCuenta;