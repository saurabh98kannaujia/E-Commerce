import React, { useState } from 'react'
import '../selectDrop/selectdrop.scss'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { ClickAwayListener } from '@mui/base/ClickAwayListener';

const SelectDrop = (props) => {
  const { listData,icon } = props;
  const [isOpenSelect, setisOpenSelect] = useState(false);
  const [isSelectIndex, setSelectIndex] = useState(0);
  const [selectValue, setSelectValue] = useState(listData[0])
  const [filterdData, setFilterdData] = useState(listData)
  

  const openSelect = () => {
    setisOpenSelect(!isOpenSelect)
  }

  const selectValueEvent = (value, index) => {
    console.log("inddex,",index)
    // isSelectIndex = index
    setSelectIndex(index)
    console.log("isSelectIndex",isSelectIndex)
    setisOpenSelect(false)
    setSelectValue(value)
  } 

  const filterListData = (e) => {
    const value = e.target.value;
    const tempData = listData.filter((element)=> {
      return element.toLowerCase().includes(value.toLowerCase())
    })
    setFilterdData(tempData.length > 0 ? tempData : ['No Record Found'])
  }

  return (
    <ClickAwayListener onClickAway={()=>setisOpenSelect(false)}>
       <div className='position-relative'>
      <span className='openSelect' onClick={() => openSelect()}>{icon} {selectValue}  <KeyboardArrowDownIcon className='arrow-icon'/></span>
      {
        isOpenSelect && <div className='selectDrop'>
          <div className='searchField'>
            <input type='text' placeholder='Searce here..' onChange={filterListData}/>
            <div>
              <ul className='searchResult'>
                {
                  filterdData.map((element,index) => {
                    return (<li key={index} onClick={() => selectValueEvent(element, index)} className={`${isSelectIndex === index ? 'acitve':''}`}>
                      {element}</li> )
                      })
                }
              </ul>
            </div>

          </div>
        </div>
      }

    </div>
    </ClickAwayListener>
   

  )
}

export default SelectDrop
