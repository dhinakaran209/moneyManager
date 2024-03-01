import './index.css'

const MoneyDetails = props => {
  const {balanceAmt, incomeAmt, expenseAmt} = props

  return (
    <div className="wallets-container">
      <div className="wallet">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png "
          alt="balance"
          className="wallet-img"
        />
        <div>
          <p>Your Balance</p>
          <p data-testid="balanceAmount">Rs {balanceAmt}</p>
        </div>
      </div>
      <div className="wallet">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          alt="income"
          className="wallet-img"
        />
        <div>
          <p>Your Income</p>
          <p data-testid="incomeAmount">Rs {incomeAmt}</p>
        </div>
      </div>
      <div className="wallet">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          alt="expenses"
          className="wallet-img"
        />
        <div>
          <p>Your Expenses</p>
          <p data-testid="expensesAmount">Rs {expenseAmt}</p>
        </div>
      </div>
    </div>
  )
}

export default MoneyDetails
