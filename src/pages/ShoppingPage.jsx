import { shoppingList } from "../data/shoppingList";
import ShoppingItem from '../components/shoppingItem';

export default function ShoppingPage() {
    return(
        <div> <h3>As minhas compras</h3>
                <h5>Lista de Compras</h5>
                  {shoppingList.map((item, index) => (
                    <ShoppingItem item={item.item} qt={item.qt} key={index} />
                  ))}
        </div>
    )
 
}
