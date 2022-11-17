import React from "react";
import { useCart } from "react-use-cart";

export const Cart = () => {
  const {
    isEmpty,
    totalUniqueItems,
    items,
    totalItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart();
  if (isEmpty) return <h1 className="text-center">Tu carrito esta vacio</h1>;
  return (
    <section className="py-4 container">
      <div className="row justify-content-center">
        <div className="col-12">
          <h5>
            Cart({totalUniqueItems}) Total Items: ({totalItems})
          </h5>
          <table className="table table-light table-hover m-0 ">
            <tbody className="tablaCart">
              {items.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>
                      <img className="imagenTabla" src={item.imagen} />
                    </td>
                    <td>{item.marca}</td>
                    <td>{item.price}</td>
                    <td>Cantidad({item.quantity})</td>
                    <td>
                      <button
                        className="btn btn-info ms-2"
                        onClick={() =>
                          updateItemQuantity(item.id, item.quantity - 1)
                        }
                      >
                        -
                      </button>
                      <button
                        className="btn btn-info ms-2"
                        onClick={() =>
                          updateItemQuantity(item.id, item.quantity + 1)
                        }
                      >
                        +
                      </button>
                      <button
                        className="btn btn-danger ms-2"
                        onClick={() => removeItem(item.id)}
                      >
                        Remover
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="col-auto ms-auto">
          <h2>Precio Total: ${cartTotal}</h2>
        </div>
        <div className="col-auto">
          <button className="btn btn-danger m-2" onClick={() => emptyCart()}>
            Limpiar carrito
          </button>
          <button className="btn btn-primary">Comprar</button>
        </div>
      </div>
    </section>
  );
};
