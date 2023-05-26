
import { IconButton, Menu, MenuItem, Switch } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import './Settingrow.scss'
import React, { useEffect, useState } from 'react';

const Settingrow = ({ data, settingsrowcallback, isNewRow }: any) => {
    const [checked, setChecked] = useState<boolean>(false);
    const [isEdit, setIsEdit] = useState<boolean>(isNewRow)
    const [isDelete, setIsDelete] = useState<boolean>(false)
    const [settingval, setSettingVal] = useState<string>('')
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const handleClick = (event: any) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = (e: any) => {
        e.stopPropagation();
        setAnchorEl(null);
    };
    const handleChangeAction = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(event.target.checked);
    };
    const onDataUpdate = (eventType: string) => {
        const callbackdata = { id: data.id, val: settingval, action: checked }
        settingsrowcallback(callbackdata, eventType)
        setIsEdit(false)
    }
    useEffect(() => {
        setChecked(data.action);
        setSettingVal(data.val);
    }, [data])
    return (
        <div key={data.id} className='settingtablecontent'>
            <div className='settingtabletext'>
                <div className='tableheader'>
                    <input type="text" value={settingval} onChange={(e) => setSettingVal(e.target.value)} disabled={!isEdit}></input>
                </div>
                <div className='tableheader'>
                    <Switch
                        checked={checked}
                        defaultChecked color="success"
                        onChange={handleChangeAction}
                        disabled={!isEdit}
                    />
                </div>
            </div>
            {isEdit && (
                <React.Fragment>
                    <div className='settingsrow-addbtn'><button onClick={() => onDataUpdate(isNewRow ? 'ADD' : 'EDIT')}>{isNewRow ? "Add" : "Update"}</button></div>
                    <div className='settingsrow-cancelbtn'><button onClick={() => { setIsEdit(false); isNewRow && onDataUpdate('CANCEL') }}>Cancel</button></div>
                </React.Fragment>
            )}
            <div className='menu-bar'>
                {!isNewRow &&
                    // <OverlayTrigger
                    //     rootClose
                    //     key="bottom"
                    //     trigger={'click'}
                    //     placement="bottom"
                    //     overlay={
                    //         <Popover id="popover-info-popover">
                    //             <Popover.Body>
                    //                 <div className='d-flex flex-column'>
                    //                     <span className='edit-row' onClick={() => setIsEdit(true)}>{'edit'}</span>
                    //                     <span className='delete-row' onClick={() => onDataUpdate('DELETE')}>{'delete'}</span>
                    //                 </div>
                    //             </Popover.Body>
                    //         </Popover>
                    //     }
                    // >
                    <>
                        <IconButton
                            aria-label="more"
                            id="long-button"
                            aria-controls={open ? 'long-menu' : undefined}
                            aria-expanded={open ? 'true' : undefined}
                            aria-haspopup="true"
                            onClick={handleClick}
                        >
                            <MoreVertIcon />
                        </IconButton>
                        <Menu
                            id="long-menu"
                            MenuListProps={{
                                "aria-labelledby": "long-button",
                            }}
                            anchorEl={anchorEl}
                            open={open}
                            onClose={(e) => {
                                handleClose(e);
                            }}
                            PaperProps={{
                                style: {
                                    height: "100px",
                                    width: "178px",
                                    left: "1000px",

                                },
                            }}
                        >
                            <MenuItem
                                onClick={(e) => {
                                    e.stopPropagation();
                                    handleClose(e);

                                }}
                            >
                                <div className="placeholdermenu">
                                    <img
                                        src="assets/images/icons/placeholder_icon.png"
                                        alt=""
                                    />
                                    <span className='placeholdermenutext'>{'Placeholder'}</span>

                                </div>
                            </MenuItem>
                            <div className="dividerprofile"></div>
                            <MenuItem
                                onClick={(e) => {
                                    e.stopPropagation();
                                    handleClose(e);

                                }}
                            >
                                <div className="removeprofile">
                                    <img
                                        src="assets/images/icons/remove_icon.png"
                                        alt=""
                                    />
                                    <span className='removeprofiletext' onClick={() => onDataUpdate('REMOVE')}>{'Remove'}</span>
                                </div>
                            </MenuItem>
                        </Menu>
                    </>
                    // </OverlayTrigger>
                }
            </div>
        </div>
    )
}

export default Settingrow