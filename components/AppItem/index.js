// import {getChangedFilesForRoots} from 'jest-changed-files'
// import {className} from 'postcss-selector-parser'

import './index.css'

// Write your code here

function AppItemComp(prop) {
  const {appLstProp} = prop
  const {appName, imageUrl} = appLstProp

  return (
    <li className="liCL">
      {/* <div className="liDiv"> */}
      <img src={imageUrl} alt={appName} className="imgCl" />
      <p className="para">{appName}</p>
      {/* </div> */}
    </li>
  )
}

export default AppItemComp
