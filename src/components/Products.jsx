import data from "../data/data.json"
import { useParams, useNavigate } from "react-router-dom";

const Products = () => {
    return(
        <>
        <h2 className="titulo-producto">Productos</h2>
        <select className="selector">
            <option value="" disabled selected >
                Categorias
            </option>
            <option value="marroquineria">
                Mochilas
            </option>
            <option value="Set">
                Set de Jardin
            </option>
            <option value="Bolsos">
                Bolsos
            </option>

        </select>
        <div className="container-cards">
        {
            data.map(( element ) => (
                <div key={element.id} className="card">
                    <h3>
                        {
                            element.title
                        }
                    </h3>
                    <h3>
                        $ {element.price}
                    </h3>
                    
                </div>
            ))
        }
        </div>
      
        </>

    )
}

export default Products;