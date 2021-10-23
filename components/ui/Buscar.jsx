import styled from "@emotion/styled";
import { css } from "@emotion/react";

const InputText = styled.input`
    border: 1px solid var(--gris3);
    padding: 1rem;
    min-width: 300px; 
`;

const InputSubmit = styled.button`
    height: 30px;
    width: 3rem;
    display: block;
    background-size: 4rem;
    background-image: url('/img/buscar.png');
    background-repeat: no-repeat;
    position: absolute;
    right: 1rem;
    top: 1px;
    background-color: white;
    border: none;
    text-indent:-9999px;

    &:hover {
        cursor: pointer;
    }
`

const Buscar = () => {
    return (
        <form
            css={css`
                position:relative;
            `}
        >
            <InputText 
                type="text" 
                placeholder="Buscar Productos"
            />

            <InputSubmit type="submit">Buscar</InputSubmit>
        </form>
    );
}
 
export default Buscar;