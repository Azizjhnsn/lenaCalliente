const clearCart = () => {
  localStorage.removeItem("cart");
  console.log("Cart cleared from localStorage!");
  window.location.reload();
};

export  {clearCart};
