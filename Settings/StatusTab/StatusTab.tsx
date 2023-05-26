import MoreVertIcon from '@mui/icons-material/MoreVert';
import './StatusTab.scss';
import { useState } from 'react'
import { IconButton, Switch } from '@mui/material';

export default function StatusTab() {
    const [empData, setEmpData] = useState<any>([
        {
            id: 1, val: 'Developer', action: "True"
        },
        {
            id: 2, val: 'Developer', action: "True"
        },
        {
            id: 3, val: 'Developer', action: "True"
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
        } else if (eventType === 'DELETE') {
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
        <div className='statustabcomponent'>
            <div className='statustaboverview'>
                <div className='statustabhead'>
                    <div className='statustabtext'>Project Status<span className='statuscount'>{empData.length}</span></div>
                    <div className='dropdownicon' onClick={() => setIsExpand(!isExpand)}><div className={`${isExpand ? 'ic_hub_dropdown' : 'ic_hub_up'}`} /></div>
                </div>
                <div className={`statustabtable ${isExpand ? '' : 'statustabtable-closed'}`}>
                    <div className='statustabtableheader'>
                        <div className='statustabtableheadertext'>
                            <div className='tableheader'>Status Name</div>
                            <div className='right-content'>
                                <div className='tableheader'>Color</div>
                                <div className='tableheader'>Action</div>
                            </div>
                        </div>
                        <div className='tableheader'></div>
                    </div>
                    <div className='statustabtablecontenttab'>
                        <div className='settingtablecontent'>
                            <div className='statustabletext'>
                                <div className='tableheader'>
                                    <select className='statustype'>
                                        <option value="completed">Completed</option>
                                        <option value="inprogress">In Progress</option>
                                    </select>
                                </div>
                                <div className='tableheader'>
                                    <select className='colortype'>
                                        <option value="orange"><div className='orange' ></div>Orange</option>
                                        <option value="green">Green</option>
                                    </select>
                                </div>
                                <div className='tableheader'>
                                    <Switch

                                        defaultChecked color="success"

                                    />
                                </div>
                            </div>

                            <div className='menu-bar'>

                                {/* <OverlayTrigger
                                    rootClose
                                    key="bottom"
                                    trigger={'click'}
                                    placement="bottom"
                                // overlay={
                                //     <Popover id="popover-info-popover">
                                //         <Popover.Body>
                                //             <div className='d-flex flex-column'>
                                //                 <span className='edit-row' onClick={() => setIsEdit(true)}>{'edit'}</span>
                                //                 <span className='delete-row' onClick={() => onDataUpdate('DELETE')}>{'delete'}</span>
                                //             </div>
                                //         </Popover.Body>
                                //     </Popover>
                                // }
                                > */}
                                <IconButton
                                    aria-label="more"
                                    id="long-button"
                                    aria-haspopup="true"
                                >
                                    <MoreVertIcon />
                                </IconButton>
                                {/* </OverlayTrigger> */}

                            </div>
                        </div>
                    </div>
                </div>
                {isExpand && <div className='d-flex' >
                    <div className="addstatuselement" onClick={() => setIsAddRowOpen(true)}> <img src={`${process.env.PUBLIC_URL}assets/images/hub-icons/plusTeam.svg`} alt="" /> Add Project Status</div>
                </div>}
            </div>
            <div className='statustaboverview'>
                <div className='statustabhead'>
                    <div className='statustabtext'>RAG Status<span className='statuscount'>{empData.length}</span></div>
                    <div className='dropdownicon' onClick={() => setIsExpand(!isExpand)}><div className={`${isExpand ? 'ic_hub_dropdown' : 'ic_hub_up'}`} /></div>
                </div>
                <div className={`statustabtable ${isExpand ? '' : 'statustabtable-closed'}`}>
                    <div className='statustabtableheader'>
                        <div className='statustabtableheadertext'>
                            <div className='tableheader'>Status Name</div>
                            <div className='right-content'>
                                <div className='tableheader'>Color</div>
                                <div className='tableheader'>Action</div>
                            </div>
                        </div>
                        <div className='tableheader'></div>
                    </div>
                    <div className='statustabtablecontenttab'>
                        <div className='settingtablecontent'>
                            <div className='statustabletext'>
                                <div className='tableheader'>
                                    <select className='statustype'>
                                        <option value="on-track">On Track</option>
                                        <option value="req-attention">Required Attention</option>
                                        <option value="critical">Critical</option>

                                    </select>
                                </div>
                                <div className='tableheader'>
                                    <select className='colortype'>
                                        <option value="orange"><div className='orange' ></div>Orange</option>
                                        <option value="green">Green</option>
                                    </select>
                                </div>
                                <div className='tableheader'>
                                    <Switch

                                        defaultChecked color="success"

                                    />
                                </div>
                            </div>

                            <div className='menu-bar'>

                                {/* <OverlayTrigger
                                    rootClose
                                    key="bottom"
                                    trigger={'click'}
                                    placement="bottom"
                                // overlay={
                                //     <Popover id="popover-info-popover">
                                //         <Popover.Body>
                                //             <div className='d-flex flex-column'>
                                //                 <span className='edit-row' onClick={() => setIsEdit(true)}>{'edit'}</span>
                                //                 <span className='delete-row' onClick={() => onDataUpdate('DELETE')}>{'delete'}</span>
                                //             </div>
                                //         </Popover.Body>
                                //     </Popover>
                                // }
                                > */}
                                <IconButton
                                    aria-label="more"
                                    id="long-button"
                                    aria-haspopup="true"
                                >
                                    <MoreVertIcon />
                                </IconButton>
                                {/* </OverlayTrigger> */}

                            </div>
                        </div>
                    </div>
                </div>
                {isExpand && <div className='d-flex' >
                    <div className="addstatuselement" onClick={() => setIsAddRowOpen(true)}> <img src={`${process.env.PUBLIC_URL}assets/images/hub-icons/plusTeam.svg`} alt="" /> Add RAG Status</div>
                </div>}
            </div>

            <div className='d-flex' >
                <div className="addstatus" onClick={() => setIsAddRowOpen(true)}> <img src={`${process.env.PUBLIC_URL}assets/images/hub-icons/plusTeam.svg`} alt="" /> Add Status</div>
            </div>
        </div >
    )
}


