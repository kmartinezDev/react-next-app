import { Fragment, useState } from "react";
import Layaout from "../components/layout/Layaout";
import { Formulario, Campo, InputSubmit, Error  } from "../components/ui/Formulario";
import { css } from "@emotion/react";
import Router from 'next/router'
import useValidacion from "../hooks/useValidacion";
import ValidarCrearCuenta from "../validaciones/ValidarCrearCuenta";
import firebase from "../firebase";

const CrearCuenta = () => {

    const [error, setError] = useState(false)

    const stateInicial = {
        nombre:'',
        email:'',
        password:''
    }

    const crearCuenta = async () => {
        try {
            await firebase.registrar(nombre, email, password)
            Router.push('/')
        } catch (error) {
            console.log('Hubo un error al crear el usuario', error.message)
            setError(error.message)
        }
    }

    const {valores,errores,handleSubmit,handleChange, handleBlur} = useValidacion(stateInicial, ValidarCrearCuenta, crearCuenta)

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
                                onBlur={handleBlur}
                            />
                        </Campo>

                        {errores.nombre && <Error>{errores.nombre}</Error>}

                        <Campo>
                            <label htmlFor="email">Email</label>
                            <input 
                                type="email"
                                id="email"
                                placeholder="Tu email"
                                name="email"
                                value={email}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                        </Campo>

                        {errores.email && <Error>{errores.email}</Error>}

                        <Campo>
                            <label htmlFor="password">Password</label>
                            <input 
                                type="password"
                                id="password"
                                placeholder="Tu password"
                                name="password"
                                value={password}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                        </Campo>

                        {errores.password && <Error>{errores.password}</Error>}
                        {error && <Error>{error}</Error>}

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