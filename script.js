function addItem() {
  const container = document.getElementById("items");
  const itemHTML = `
    <div class="item">
      <input type="text" placeholder="Item name" class="item-name"/>
      <input type="number" placeholder="Price" class="item-price"/>
    </div>
  `;
  container.insertAdjacentHTML("beforeend", itemHTML);
}

function generateReceipt() {
  const storeName = document.getElementById("storeName").value;
  const names = document.querySelectorAll(".item-name");
  const prices = document.querySelectorAll(".item-price");

  let total = 0;
  let itemsHTML = "";

  for (let i = 0; i < names.length; i++) {
    const name = names[i].value;
    const price = parseFloat(prices[i].value) || 0;
    total += price;
    itemsHTML += `<li><span>${name}</span><span>₦${price.toFixed(2)}</span></li>`;
  }

  const receiptBox = document.getElementById("receiptBox");
  receiptBox.innerHTML = `
    <h2>${storeName || "RECEIPT"}</h2>
    <ul>${itemsHTML}</ul>
    <div class="total">TOTAL: ₦${total.toFixed(2)}</div>
    <p style="text-align:center;">Thank you for shopping!</p>
  `;
  receiptBox.style.display = "block";
}