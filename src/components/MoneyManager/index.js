import {Component} from 'react'
import './index.css'
import {v4} from 'uuid'
import MoneyDetails from '../MoneyDetails/index'
import TransactionItem from '../TransactionItem'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

class MoneyManager extends Component {
  state = {
    transactionList: [],
    titleInput: '',
    amountInput: '',
    option: transactionTypeOptions[0].optionId,
  }

  changeTitle = event => {
    this.setState({titleInput: event.target.value})
  }

  changeAmount = event => {
    this.setState({amountInput: event.target.value})
  }

  selectType = event => {
    const selected = event.target.value
    this.setState({option: selected})
  }

  addTransaction = event => {
    event.preventDefault()
    const {titleInput, amountInput, option} = this.state
    const optionTxn = transactionTypeOptions.find(
      eachItem => eachItem.optionId === option,
    )
    const displayOption = optionTxn.displayText
    const transaction = {
      id: v4(),
      title: titleInput,
      amount: parseInt(amountInput),
      type: displayOption,
    }

    this.setState(prevState => ({
      transactionList: [...prevState.transactionList, transaction],
      titleInput: '',
      amountInput: '',
      option: transactionTypeOptions[0].optionId,
    }))
  }

  removeItem = id => {
    const {transactionList} = this.state
    const filteredList = transactionList.filter(eachItem => eachItem.id !== id)

    this.setState({transactionList: filteredList})
  }

  getExpense = () => {
    const {transactionList} = this.state
    let expense = 0
    transactionList.forEach(eachTransaction => {
      if (eachTransaction.type === transactionTypeOptions[1].displayText) {
        expense += eachTransaction.amount
      }
    })
    return expense
  }

  getIncome = () => {
    const {transactionList} = this.state
    let income = 0
    transactionList.forEach(eachTransaction => {
      if (eachTransaction.type === transactionTypeOptions[0].displayText) {
        income += eachTransaction.amount
      }
    })
    return income
  }

  getBalance = () => {
    const {transactionList} = this.state
    let balance = 0
    let income = 0
    let expense = 0
    transactionList.forEach(eachTransaction => {
      if (eachTransaction.type === transactionTypeOptions[0].displayText) {
        income += eachTransaction.amount
      } else {
        expense += eachTransaction.amount
      }
      balance = income - expense
    })
    return balance
  }

  render() {
    const {transactionList, titleInput, amountInput} = this.state

    const expenseAmt = this.getExpense()

    const incomeAmt = this.getIncome()

    const balanceAmt = this.getBalance()

    return (
      <>
        <div className="app-container">
          <div className="responsive-container">
            <div className="header-container">
              <h1>Hi Richard</h1>
              <p>
                Welcome back to your
                <span className="money-manager-text"> Money manager</span>
              </p>
            </div>
            <MoneyDetails
              incomeAmt={incomeAmt}
              expenseAmt={expenseAmt}
              balanceAmt={balanceAmt}
            />
            <form className="form-container">
              <h1>Add Transaction</h1>
              <label htmlFor="title">TITLE</label>
              <input
                onChange={this.changeTitle}
                id="title"
                placeholder="TITLE"
                type="text"
                value={titleInput}
              />
              <label htmlFor="amount">AMOUNT</label>
              <input
                onChange={this.changeAmount}
                id="amount"
                placeholder="AMOUNT"
                type="text"
                value={amountInput}
              />
              <label htmlFor="select">TYPE</label>
              <select onChange={this.selectType} id="select">
                {transactionTypeOptions.map(eachItem => (
                  <option value={eachItem.optionId} key={eachItem.optionId}>
                    {eachItem.displayText}
                  </option>
                ))}
              </select>
              <button
                onClick={this.addTransaction}
                type="submit"
                className="btn btn-primary"
              >
                Add
              </button>
            </form>
            <div className="transactions-container">
              <h1>History</h1>
              <div className="table-transaction">
                <ul>
                  <li className="table-header">
                    <p className="table-cell">Title</p>
                    <p className="table-cell">Amount</p>
                    <p className="table-cell">Type</p>
                  </li>
                  {transactionList.map(eachItem => (
                    <TransactionItem
                      removeItem={this.removeItem}
                      details={eachItem}
                      key={eachItem.id}
                    />
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default MoneyManager
