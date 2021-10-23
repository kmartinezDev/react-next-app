import { Fragment } from "react";
import Link from "next/link";

const Navegacion = () => {
    return (
        <Fragment>
            <nav>
                <Link href="/">Inicio</Link>
                <Link href="/">Populares</Link>
                <Link href="/">Nuevo producto</Link>
            </nav>
        </Fragment>
    );
}
 
export default Navegacion;