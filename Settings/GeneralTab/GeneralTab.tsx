import React, { useState } from 'react'
import "./GeneralTab.scss";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { IconButton, Menu, MenuItem } from '@mui/material';

export default function GeneralTab() {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const [firstName, setFirstName] = useState<string>('Joy')
    const [lastName, setLastName] = useState<string>('Bartonn')
    const [emailId, setEmailId] = useState<string>('joybartonn@gmail.com')
    const [trlId, setTrlId] = useState<string>('TRL:0342')
    const [roleInfo, setRoleInfo] = useState<string>('Project Manager')
    const [empTypeInfo, setEmpTypeInfo] = useState<string>('Full Time')

    const open = Boolean(anchorEl);
    const [disabled, setDisabled] = useState<boolean>(true)
    const general_bg = {
        backgroundImage: `url(${process.env.PUBLIC_URL + "assets/images/ic_general_tab_header.png"})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    };

    const [skillData, setSkillData] = useState<any>([
        {
            id: 1, skill: 'Product Design'
        },
        {
            id: 2, skill: 'Product Manager'
        },
        {
            id: 3, skill: 'Customer Service'
        },
        {
            id: 4, skill: 'Python'
        },
        {
            id: 5, skill: 'Dot Net C#'
        },
        {
            id: 6, skill: 'Node JS'
        },
        {
            id: 7, skill: 'Front-End'
        },
        {
            id: 8, skill: 'Java'
        },
        {
            id: 9, skill: 'Python'
        },
        {
            id: 10, skill: 'Dot Net C#'
        },

    ])

    const handleClick = (event: any) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = (e: any) => {
        e.stopPropagation();
        setAnchorEl(null);
    };
    return (
        <div className='generaltab'>
            <div className='generaltabaccount'>
                <span className='myaccount'>My Account</span>
            </div>
            <div className='generaltabheader' style={general_bg}>
                <div className='generaltabprofileimg'>

                    <img className='profileimg' src={`${process.env.PUBLIC_URL}assets/images/Avatar.png`} alt="" />
                </div>
            </div>
            <div className='generaltabprofilecontent'>
                <div className='generaltabprofiledetails'>
                    <div className='generaltabprofilename'>
                        <span className='profilename'>{firstName} {lastName}({trlId})</span>
                    </div>
                    <div className='generaltabsubprofiledetails'>
                        <div className='generaltabprofileemail'>
                            <span className='profileemail'>{emailId}</span>
                        </div>
                        <div className='generaltabprofileseparator'></div>
                        <div className='generaltabprofilerole'>
                            <span className='profilerole'>{roleInfo}</span>
                        </div>
                        <div className='generaltabprofilestatus'>
                            <span className='profiledot'></span>
                            <span className='profilerole'>{empTypeInfo}</span>
                        </div>
                    </div>
                </div>
                <div className='generaltabprofileinfo'>
                    <div className='generaltabprofileinfoheadcontent'>
                        <div className='generaltabprofileheader'>
                            <div className='generaltabprofilehead'>
                                <span className='generaltabprofileheadtext'>Personal Information</span>
                            </div>
                            <div className='generaltabprofilemenu'>
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
                                            height: "55px",
                                            width: "144px",
                                        },
                                    }}
                                >
                                    <MenuItem
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            handleClose(e);

                                        }}
                                    >
                                        <div className="editprofile" onClick={() => setDisabled(!disabled)}>
                                            <img
                                                src="assets/images/icons/edit@3x.svg"
                                                alt=""
                                            />
                                            <span className='editprofiletext'>{disabled ? 'Edit' : 'Update'}</span>
                                        </div>
                                    </MenuItem>
                                </Menu>
                            </div>
                        </div>
                        <div className='generaltabprofileinfoinput-top'>
                            <div className={`generaltabprofileinfodetails ${disabled ? '' : 'generaltabprofileinfodetails-editable'}`}>
                                <div className='detailsheader'>First Name</div>
                                <div className='detailstext'><input type='text' className={` ${!disabled ? 'detailstextinfo' : 'detailstextinfo-editable'}`} value={firstName} onChange={(event) => setFirstName(event.target.value)} disabled={disabled} /></div>
                            </div>
                            <div className='generaltabprofileinfodetails'>
                                <div className='detailsheader'>Last Name</div>
                                <div className='detailstext'><input type='text' className={` ${!disabled ? 'detailstextinfo' : 'detailstextinfo-editable'}`} value={lastName} onChange={(event) => setLastName(event.target.value)} disabled={disabled} /></div>
                            </div>
                            <div className='generaltabprofileinfodetails'>
                                <div className='detailsheader'>Email</div>
                                <div className='detailstext'><input type='email' className={` ${!disabled ? 'detailstextinfo' : 'detailstextinfo-editable'}`} value={emailId} onChange={(event) => setEmailId(event.target.value)} disabled={disabled} /></div>
                            </div>
                        </div>
                        <div className='generaltabprofileinfoinput-bottom'>
                            <div className='generaltabprofileinfodetails'>
                                <div className='detailsheader'>Trl Id</div>
                                <div className='detailstext'><input type='text' className={` ${!disabled ? 'detailstextinfo' : 'detailstextinfo-editable'}`} value={trlId} onChange={(event) => setTrlId(event.target.value)} disabled={disabled} /></div>
                            </div>
                            <div className='generaltabprofileinfodetails'>
                                <div className='detailsheader'>Role</div>
                                <div className='detailstext'>
                                    <select className={` ${!disabled ? 'roletype' : 'roletype-editable'}`} onChange={(event) => setRoleInfo(event.target.value)} disabled={disabled}>
                                        <option value="Project Manager">Project Manager</option>
                                        <option value="Project Lead">Project Lead</option>
                                        <option value="Software Engineer">Software Engineer</option>
                                        <option value=" Analyst">QA Analyst</option>
                                    </select></div>
                            </div>
                            <div className='generaltabprofileinfodetails'>
                                <div className='detailsheader'>Employment Type</div>
                                <div className='detailstext'>
                                    <select className={` ${!disabled ? 'emptype' : 'emptype-editable'}`} onChange={(event) => setEmpTypeInfo(event.target.value)} disabled={disabled}>
                                        <option value="Full Time">Full Time</option>
                                        <option value="Part Time">Part Time</option>
                                        <option value="Freelance">Freelance</option>
                                        <option value="External">External</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='generaltabtechskills'>
                    <div className='generaltabtechskillsheadcontent'>
                        <div className='generaltabtechskillsheader'>
                            <div className='generaltabtechskillshead'>
                                <div className='generaltabtechskillsheadtext'>Technical Skills<span className='skillscount'>10</span></div>

                            </div>
                            <div className='generaltabtechskillsmenu'>
                                <IconButton
                                    aria-label="more"
                                    id="long-button"
                                    aria-haspopup="true"
                                >
                                    <MoreVertIcon />
                                </IconButton>
                            </div>
                        </div>
                        <div className='generaltabtechskillscontent'>
                            {skillData && skillData.map((data: any) => (
                                <div className='skills'>{data.skill}</div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}
