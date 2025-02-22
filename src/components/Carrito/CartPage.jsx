import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./carrito.css";

export const CartPage = ({ cart, setCart }) => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    nombre: "",
    apellidos: "",
    telefono: "",
    direccion: "",
    metodoPago: "Tarjeta de crédito/débito",
  });

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + parseFloat(item.price.replace("S/ ", "")), 0);
  };

  const shippingCost = getTotalPrice() >= 200 ? 0 : 35;
  const finalTotal = getTotalPrice() + shippingCost;

  const removeFromCart = (index) => {
    const newCart = cart.filter((_, i) => i !== index);
    setCart(newCart);
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCheckout = (e) => {
    e.preventDefault();
    if (!formData.nombre || !formData.apellidos || !formData.telefono || !formData.direccion) {
      alert("Por favor, completa todos los campos.");
      return;
    }
    alert(`✅ Pedido realizado con éxito
    📍 Nombre: ${formData.nombre} ${formData.apellidos}
    📞 Teléfono: ${formData.telefono}
    🏡 Dirección: ${formData.direccion}
    💳 Método de pago: ${formData.metodoPago}
    🛒 Total a pagar: S/ ${finalTotal.toFixed(2)}

    ¡Gracias por tu compra! 🎉`);
    setCart([]); // Vaciar el carrito después de la compra
    setShowForm(false);
  };

  const formulario = [
    { text: "Nombre", nombre: "nombre", type: "text" },
    { text: "Apellidos", nombre: "apellidos", type: "text" },
    { text: "Teléfono", nombre: "telefono", type: "tel" },
    { text: "Dirección de envío", nombre: "direccion", type: "text" },
    {
      text: "Método de pago:",
      nombre: "metodoPago",
      type: "select",
      options: ["Tarjeta de crédito/débito", "Pago en efectivo"],
    },
  ];

  return (
    <div className="cart-page">
      <h2>🛒 Carrito de Compras</h2>
      {cart.length === 0 ? (
        <p className="empty-cart">Tu carrito está vacío.</p>
      ) : (
        <>
          <table className="cart-table">
            <thead>
              <tr>
                <th></th>
                <th>Producto</th>
                <th>Precio</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item, index) => (
                <tr key={index}>
                  <td><img src={item.image} alt={item.name} className="cart-item-image" /></td>
                  <td>{item.name}</td>
                  <td>{item.price}</td>
                  <td>
                    <button className="remove-btn" onClick={() => removeFromCart(index)}>❌</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="cart-summary">
            <h3>Resumen</h3>
            <p>Subtotal: S/{getTotalPrice().toFixed(2)}</p>
            {shippingCost === 0 ? (
              <p className="free-shipping">🚚 ¡Envío GRATUITO por compras superiores a S/200!</p>
            ) : (
              <p>Costo de envío: S/35.00</p>
            )}
            <h2>Total: S/{finalTotal.toFixed(2)}</h2>
          </div>

          <div className="cart-actions">
            <Link to="/" className="back-btn">Volver a la tienda</Link>
            <button className="checkout-btn" onClick={() => setShowForm(true)}>Proceder al pago</button>
          </div>
        </>
      )}

      {showForm && (
        <div className="checkout-form">
          <h3>📋 Información de Pago</h3>
          <p>Por favor, completa los siguientes campos para proceder con tu compra:</p>
          <form onSubmit={handleCheckout}>
            {formulario.map((item, index) => (
              <label key={index}>
                {item.text}
                {item.type === "select" ? (
                  <select name={item.nombre} value={formData[item.nombre]} onChange={handleInputChange}>
                    {item.options.map((option, i) => (
                      <option key={i} value={option}>{option}</option>
                    ))}
                  </select>
                ) : (
                  <input type={item.type} name={item.nombre} value={formData[item.nombre]} onChange={handleInputChange} required />
                )}
              </label>
            ))}
            <button type="submit" className="confirm-btn">Confirmar compra</button>
            <button type="button" className="cancel-btn" onClick={() => setShowForm(false)}>Cancelar</button>
          </form>
        </div>
      )}
    </div>
  );
};