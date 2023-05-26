import { IconButton, Menu, MenuItem, Switch } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import React, { useState } from 'react'
import "./RolesTab.scss";
import { Overlay, OverlayTrigger, Popover } from 'react-bootstrap';
import Settingrow from '../../../sharedComponent/Settings/Settingrow';

export default function RolesTab() {


    const [roleData, setRoleData] = useState<any>([
        {
            id: 1, val: 'Project Manager', action: "True"
        },
        {
            id: 2, val: 'Project Lead', action: "True"
        },
        {
            id: 3, val: 'UX Architect', action: "True"
        },
        {
            id: 4, val: 'Software Engineer', action: "True"
        },
        {
            id: 5, val: 'Java FullStack Developer', action: "True"
        },
        {
            id: 6, val: 'Node JS Developer', action: "True"
        },
        {
            id: 7, val: 'QA Analyst', action: "True"
        },
        {
            id: 8, val: 'UX Designer', action: "True"
        },
        {
            id: 9, val: 'Business Analyst', action: "True"
        },
        {
            id: 10, val: 'Front End Developer', action: "True"
        },

    ])
    const [isAddRowOpen, setIsAddRowOpen] = useState<boolean>(false)
    const [isExpand, setIsExpand] = useState<boolean>(false)
    const initalRoleData = {
        id: roleData.length, val: '', action: 'false'
    }
    const settingsrowcallback = (callbackdata: any, eventType: string) => {
        let tempRoleData = roleData
        console.log(callbackdata, eventType)
        if (eventType === 'EDIT') {
            tempRoleData.map((obj: any) => (obj.id === callbackdata.id ? callbackdata : obj))
        } else if (eventType === 'REMOVE') {
            tempRoleData = tempRoleData.filter((data: any) => (data.id !== callbackdata.id))
            console.log(callbackdata, tempRoleData, 'tempRoleData')
        } else if (eventType === 'ADD') {
            tempRoleData.push(callbackdata)
            setIsAddRowOpen(false)
        } else if (eventType === 'CANCEL') {
            setIsAddRowOpen(false)
        }
        setRoleData(tempRoleData)

    }

    return (
        <div className='rolestabcomponent'>
            <div className='rolestaboverview'>
                <div className='rolestabhead'>
                    <div className='rolestabtext'>Roles<span className='rolescount'>{roleData.length}</span></div>
                    <div className='dropdownicon' onClick={() => setIsExpand(!isExpand)}><div className={`${isExpand ? 'ic_hub_dropdown' : 'ic_hub_up'}`} /></div>
                </div>
                <div className={`rolestabtable ${isExpand ? '' : 'rolestabtable-closed'}`}>
                    <div className='rolestabtableheader'>
                        <div className='rolestabtableheadertext'>
                            <div className='tableheader'>Role Name</div>
                            <div className='tableheader'>Action</div>
                        </div>
                        <div className='tableheader'></div>
                    </div>
                    <div className='rolestabtablecontenttab'>
                        {roleData && roleData.map((data: any) => (
                            <Settingrow data={data} settingsrowcallback={settingsrowcallback} />
                        ))}
                        {isAddRowOpen && <Settingrow data={initalRoleData} settingsrowcallback={settingsrowcallback} isNewRow={true} />}
                        {/* <div className='rolestabtablecontent'>
                            <div className='rolestabtabletext'>
                                <div className='tableheader'>
                                    <input type="text" value={"Designer"}></input>
                                </div>
                                <div className='tableheader'>
                                    <Switch
                                        checked={checked}
                                        defaultChecked color="success"
                                        onChange={handleChangeAction}
                                    />
                                </div>
                            </div>
                            <div className='tableheader'>
                                <IconButton
                                    aria-label="more"
                                    id="long-button"
                                    aria-haspopup="true"
                                >
                                    <MoreVertIcon />
                                </IconButton>
                            </div>
                        </div>
                        <div className='rolestabtablecontent'>
                            <div className='rolestabtabletext'>
                                <div className='tableheader'>
                                    <input type="text" value={"QA Testing"}></input>
                                </div>
                                <div className='tableheader'>
                                    <Switch
                                        checked={checked}
                                        defaultChecked color="success"
                                        onChange={handleChangeAction}
                                    />
                                </div>
                            </div>
                            <div className='tableheader'>
                                <IconButton
                                    aria-label="more"
                                    id="long-button"
                                    aria-haspopup="true"
                                >
                                    <MoreVertIcon />
                                </IconButton>
                            </div>
                        </div>
                        <div className='rolestabtablecontent'>
                            <div className='rolestabtabletext'>
                                <div className='tableheader'>
                                    <input type="text" value={"Business Analyst"}></input>
                                </div>
                                <div className='tableheader'>
                                    <Switch
                                        checked={checked}
                                        defaultChecked color="success"
                                        onChange={handleChangeAction}
                                    />
                                </div>
                            </div>
                            <div className='tableheader'>
                                <div>
                                    <IconButton
                                        aria-label="more"
                                        id="long-button"
                                        aria-haspopup="true"
                                    >
                                        <MoreVertIcon />
                                    </IconButton>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
                {isExpand && <div className='d-flex' >
                    <div className="addroleselement" onClick={() => setIsAddRowOpen(true)}> <img src={`${process.env.PUBLIC_URL}assets/images/hub-icons/plusTeam.svg`} alt="" /> Add Roles</div>
                </div>}
            </div>
            {/* <div className='addroleselement'><button className='addroles'>Add Roles</button> */}
            {/* </div> */}
        </div >
        // </div >
    )
}
