import { useState } from 'react'
import Settingrow from '../../../sharedComponent/Settings/Settingrow';
import "./TechSkillsTab.scss";


export default function TechSkillsTab() {

    const [techData, setTechData] = useState<any>([
        {
            id: 1, val: 'Django', action: "True"
        },
        {
            id: 2, val: 'Node JS', action: "True"
        },
        {
            id: 3, val: 'React Native', action: "True"
        },
        {
            id: 4, val: 'C#', action: "True"
        },
        {
            id: 5, val: 'Java', action: "True"
        },
        {
            id: 6, val: 'Kubernets', action: "True"
        },
        {
            id: 7, val: 'AWS', action: "True"
        },
        {
            id: 8, val: 'Data Mining', action: "True"
        },
        {
            id: 9, val: 'AML', action: "True"
        },
        {
            id: 10, val: 'Ethical Hacking', action: "True"
        },



    ])
    const [isAddRowOpen, setIsAddRowOpen] = useState<boolean>(false)
    const [isExpand, setIsExpand] = useState<boolean>(false)
    const initalTechData = {
        id: techData.length, val: '', action: 'false'
    }
    const settingsrowcallback = (callbackdata: any, eventType: string) => {
        let tempTechData = techData
        console.log(callbackdata, eventType)
        if (eventType === 'EDIT') {
            tempTechData.map((obj: any) => (obj.id === callbackdata.id ? callbackdata : obj))
        } else if (eventType === 'REMOVE') {
            tempTechData = tempTechData.filter((data: any) => (data.id !== callbackdata.id))
            console.log(callbackdata, tempTechData, 'tempRoleData')
        } else if (eventType === 'ADD') {
            tempTechData.push(callbackdata)
            setIsAddRowOpen(false)
        } else if (eventType === 'CANCEL') {
            setIsAddRowOpen(false)
        }
        setTechData(tempTechData)

    }
    return (

        <div className='techtabcomponent'>
            <div className='techtaboverview'>
                <div className='techtabhead'>
                    <div className='techtabtext'>Skills<span className='techcount'>{techData.length}</span></div>
                    <div className='dropdownicon' onClick={() => setIsExpand(!isExpand)}><div className={`${isExpand ? 'ic_hub_dropdown' : 'ic_hub_up'}`} /></div>

                </div>
                <div className={`techtabtable ${isExpand ? '' : 'techtabtable-closed'}`}>
                    <div className='techtabtableheader'>
                        <div className='techtabtableheadertext'>
                            <div className='tableheader'>Skill Name</div>
                            <div className='tableheader'>Action</div>
                        </div>
                        <div className='tableheader'></div>
                    </div>
                    <div className='techtabtablecontenttab'>
                        {techData && techData.map((data: any) => (
                            <Settingrow data={data} settingsrowcallback={settingsrowcallback} />
                        ))}
                        {isAddRowOpen && <Settingrow data={initalTechData} settingsrowcallback={settingsrowcallback} isNewRow={true} />}

                    </div>
                </div>
                {isExpand && <div className='d-flex' >
                    <div className="addtechelement" onClick={() => setIsAddRowOpen(true)}> <img src={`${process.env.PUBLIC_URL}assets/images/hub-icons/plusTeam.svg`} alt="" /> Add Technical Skills</div>
                </div>}
            </div>

        </div >
    )
}