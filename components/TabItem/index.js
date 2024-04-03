// Write your code here
import './index.css'

function TableItemComp(prop) {
  const {tblItem, menuClick, isSelected} = prop
  const {displayText, tabId} = tblItem

  const menuFun = () => {
    menuClick(tabId)
  }

  return (
    <li className="liCl">
      <button
        className={`liBtn ${isSelected ? 'underline' : ''}`}
        type="button"
        onClick={menuFun}
      >
        <p>{displayText}</p>
      </button>
    </li>
  )
}

export default TableItemComp
