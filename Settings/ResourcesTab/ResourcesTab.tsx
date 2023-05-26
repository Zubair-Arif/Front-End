
import { useState } from 'react'
import Settingrow from '../../../sharedComponent/Settings/Settingrow';
import "./ResourcesTab.scss";

export default function ResourcesTab() {

    const [empData, setEmpData] = useState<any>([
        {
            id: 1, val: 'Full Time', action: "True"
        },
        {
            id: 2, val: 'Part Time', action: "True"
        },
        {
            id: 3, val: 'Contract', action: "True"
        },
        {
            id: 4, val: 'Freelance', action: "True"
        },
        {
            id: 5, val: 'External', action: "True"
        },

    ])
    const [isAddRowOpen, setIsAddRowOpen] = useState<boolean>(false)
    const [isExpand, setIsExpand] = useState<boolean>(false)
    const initalEmpData = {
        id: empData.length, val: '', action: 'false'
    }
    const settingsrowcallback = (callbackdata: any, eventType: string) => {
        let tempEmpData = empData
        console.log(callbackdata, eventType)
        if (eventType === 'EDIT') {
            tempEmpData.map((obj: any) => (obj.id === callbackdata.id ? callbackdata : obj))
        } else if (eventType === 'REMOVE') {
            tempEmpData = tempEmpData.filter((data: any) => (data.id !== callbackdata.id))
            console.log(callbackdata, tempEmpData, 'tempRoleData')
        } else if (eventType === 'ADD') {
            tempEmpData.push(callbackdata)
            setIsAddRowOpen(false)
        } else if (eventType === 'CANCEL') {
            setIsAddRowOpen(false)
        }
        setEmpData(tempEmpData)

    }

    return (
        <div className='resourcetabcomponent'>
            <div className='resourcetaboverview'>
                <div className='resourcetabhead'>
                    <div className='resourcetabtext'>Employement Type<span className='resourcecount'>{empData.length}</span></div>
                    <div className='dropdownicon' onClick={() => setIsExpand(!isExpand)}><div className={`${isExpand ? 'ic_hub_dropdown' : 'ic_hub_up'}`} /></div>
                </div>
                <div className={`resourcetabtable ${isExpand ? '' : 'resourcetabtable-closed'}`}>
                    <div className='resourcetabtableheader'>
                        <div className='resourcetabtableheadertext'>
                            <div className='tableheader'>Employement Name</div>
                            <div className='tableheader'>Action</div>
                        </div>
                        <div className='tableheader'></div>
                    </div>
                    <div className='resourcetabtablecontenttab'>
                        {empData && empData.map((data: any) => (
                            <Settingrow data={data} settingsrowcallback={settingsrowcallback} />
                        ))}
                        {isAddRowOpen && <Settingrow data={initalEmpData} settingsrowcallback={settingsrowcallback} isNewRow={true} />}
                    </div>
                </div>
                {isExpand && <div className='d-flex' >
                    <div className="addresourceelement" onClick={() => setIsAddRowOpen(true)}> <img src={`${process.env.PUBLIC_URL}assets/images/hub-icons/plusTeam.svg`} alt="" /> Add Employement Type</div>
                </div>}
            </div>
        </div >
    )
}





