function renderCart(items) {
  const $cart = document.querySelector(".cart")
  const $total = document.querySelector(".total")
  const $vegosszeg = document.querySelector(".vegosszeg")

  $cart.innerHTML = items.map((item) => `
      <tr>
        <td>#${item.id}</td>
        <td>${item.name}</td>
        <td>${item.quantity}</td>
        <td style="width: 60px;">
          <button type="button" class="btn btn-block btn-sm btn-outline-dark"
            onClick="cartLS.quantity(${item.id},-1)">-</button>
        </td>
        <td style="width: 60px;">
          <button type="button" class="btn btn-block btn-sm btn-outline-dark"
            onClick="cartLS.quantity(${item.id},1)">+</button>
        </td>
        <td>${item.price} ft</td>
        <td class="text-right"><Button class="btn btn-danger" onClick="cartLS.remove(${item.id})"><i class="fas fa-trash-alt"></i></Button></td>
      </tr>`).join("")

  $total.innerHTML = cartLS.total() + " ft"
  $vegosszeg.innerHTML = cartLS.total() + " ft"
}
renderCart(cartLS.list())
cartLS.onChange(renderCart)
