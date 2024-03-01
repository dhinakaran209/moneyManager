import './index.css'

const TransactionItem = props => {
  const {details, removeItem} = props
  const {type, title, amount, id} = details

  const deleteItem = () => {
    removeItem(id)
  }

  return (
    <li className="transaction">
      <p>{title}</p>
      <p>{amount}</p>
      <p>{type}</p>
      <button
        data-testid="delete"
        type="button"
        onClick={deleteItem}
        className="deleteBtn"
      >
        <img
          alt="delete"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png "
        />
      </button>
    </li>
  )
}

export default TransactionItem
