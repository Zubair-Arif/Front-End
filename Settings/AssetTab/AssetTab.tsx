import React, { useState } from 'react'
import Settingrow from '../../../sharedComponent/Settings/Settingrow';
import "./AssetTab.scss";

export default function AssetTab() {
    const [fileData, setFileData] = useState<any>([
        {
            id: 1, val: 'Agreement', action: "True"
        },
        {
            id: 2, val: 'Requirements', action: "True"
        },
        {
            id: 3, val: 'QA Reports', action: "True"
        },
        {
            id: 4, val: 'Other', action: "True"
        },


    ])
    const [isAddRowOpen, setIsAddRowOpen] = useState<boolean>(false)
    const [isExpand, setIsExpand] = useState<boolean>(false)
    const initalFileData = {
        id: fileData.length, val: '', action: 'false'
    }
    const settingsrowcallback = (callbackdata: any, eventType: string) => {
        let tempFileData = fileData
        console.log(callbackdata, eventType)
        if (eventType === 'EDIT') {
            tempFileData.map((obj: any) => (obj.id === callbackdata.id ? callbackdata : obj))
        } else if (eventType === 'REMOVE') {
            tempFileData = tempFileData.filter((data: any) => (data.id !== callbackdata.id))
            console.log(callbackdata, tempFileData, 'tempRoleData')
        } else if (eventType === 'ADD') {
            tempFileData.push(callbackdata)
            setIsAddRowOpen(false)
        } else if (eventType === 'CANCEL') {
            setIsAddRowOpen(false)
        }
        setFileData(tempFileData)

    }


    return (
        <div className='assettabcomponent'>
            <div className='assettaboverview'>
                <div className='assettabhead'>
                    <div className='assettabtext'>Files<span className='assetcount'>{fileData.length}</span></div>
                    <div className='dropdownicon' onClick={() => setIsExpand(!isExpand)}><div className={`${isExpand ? 'ic_hub_dropdown' : 'ic_hub_up'}`} /></div>
                </div>
                <div className={`assettabtable ${isExpand ? '' : 'assettabtable-closed'}`}>
                    <div className='assettabtableheader'>
                        <div className='assettabtableheadertext'>
                            <div className='tableheader'>File Type</div>
                            <div className='tableheader'>Action</div>
                        </div>
                        <div className='tableheader'></div>
                    </div>
                    <div className='assettabtablecontenttab'>
                        {fileData && fileData.map((data: any) => (
                            <Settingrow data={data} settingsrowcallback={settingsrowcallback} />
                        ))}
                        {isAddRowOpen && <Settingrow data={initalFileData} settingsrowcallback={settingsrowcallback} isNewRow={true} />}
                    </div>
                </div>
                {isExpand && <div className='d-flex' >
                    <div className="addassetelement" onClick={() => setIsAddRowOpen(true)}> <img src={`${process.env.PUBLIC_URL}assets/images/hub-icons/plusTeam.svg`} alt="" /> Add Files</div>
                </div>}
            </div>
        </div >
    )
}

