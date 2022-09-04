
import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({ category }) => {

    const { images, isLoading } = useFetchGifs(category);

    return (
        <>
            <h3>{category}</h3>
            {
                isLoading && (<h2>Cargando...</h2>)
            }
            <div className="card-grid">
                {
                    images.map((image) => {
                        return (<GifItem key={image.id} {...image} />);
                    })
                }
            </div>
        </>
    );
};

/*

* No se puede usar ningun condicional o bucle sobre hooks

* no se puede convertir el callback que se la pasa al hook 
useEffect en una promsesa (es decir nada de Async en el callback del useEffect)


*/