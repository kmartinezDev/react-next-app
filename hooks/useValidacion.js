import React, { useState, useEffect } from "react";

const useValidacion = (stateInicial, validar, fn) => {
    
    const [valores, setValores] = useState(stateInicial)
    const [errores, setErrores] = useState({})
    const [submitForm, setSubmitForm] = useState(false)
    
    useEffect(()=>{
        if(submitForm){
            const noErrores = Object.keys(errores).length === 0;
            
            if(noErrores){
                fn();
            }
    
            setSubmitForm(false)
        }
    }, [errores]);

    // Funcion que se ejecuta conforme al usuario escribe
    const handleChange = e => {
        setValores({
            ...valores,
            [e.target.name] : e.target.value
        })
    }

    // Funcion que se ejecuta cuando el usuario hace submit
    const handleSubmit = e => {
        e.preventDefault();
        const erroresValidacion = validar(valores)
        setErrores(erroresValidacion)
        setSubmitForm(true)
    }

    const handleBlur = () => {
        const erroresValidacion = validar(valores)
        setErrores(erroresValidacion)
    }

    return {
        valores,
        errores,
        submitForm,
        handleSubmit,
        handleChange,
        handleBlur
    };
}
 
export default useValidacion;