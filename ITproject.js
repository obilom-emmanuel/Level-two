let transactions = JSON.parse(localStorage.getItem('transactions')) || [];

const balance = document.getElementById("balance");
const income = document.getElementById("income");
const expense = document.getElementById("expense");
const list = document.getElementById("list");
const form = document.getElementById("form");

form.addEventListener("submit", addTransaction);

function addTransaction(e) {
  e.preventDefault();

  const title = document.getElementById("title").value;
  const amount = Number(document.getElementById("amount").value);
  const type = document.getElementById("type").value;

  const transaction = {
    id: Date.now(),
    title,
    amount,
    type
  };

  transactions.push(transaction);

  saveData();
  displayTransactions();
  updateSummary();

  form.reset();
}

function displayTransactions() {
  list.innerHTML = "";

  transactions.forEach(t => {
    const li = document.createElement("li");

    li.innerHTML = `
      ${t.title} — ₦${t.amount} (${t.type})
      <button class="delete-btn" onclick="deleteTransaction(${t.id})">X</button>
    `;

    list.appendChild(li);
  });
}

function deleteTransaction(id) {
  transactions = transactions.filter(t => t.id !== id);

  saveData();
  displayTransactions();
  updateSummary();
}

function updateSummary() {
  let incomeTotal = 0;
  let expenseTotal = 0;

  transactions.forEach(t => {
    if (t.type === "income") {
      incomeTotal += t.amount;
    } else {
      expenseTotal += t.amount;
    }
  });

  income.textContent = "₦" + incomeTotal;
  expense.textContent = "₦" + expenseTotal;
  balance.textContent = "₦" + (incomeTotal - expenseTotal);
}

function saveData() {
  localStorage.setItem("transactions", JSON.stringify(transactions));
}

// Load everything on page start
displayTransactions();
updateSummary();

