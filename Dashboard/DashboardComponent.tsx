import React, { useState } from 'react'
import "./DashboardComponent.scss";
import { useNavigate } from 'react-router-dom';
import { Avatar, Button, Divider, Menu, MenuItem, Pagination, Select } from '@mui/material';
import ReactApexChart from 'react-apexcharts';

export const DashboardComponent = () => {
    const [resourceallo, setResourceAllo] = useState<any>([
        {
            img: "manga-app-icon.png", projectname: "Manga App", startdate: '01 Mar 2023', enddate: "01 Oct 2023", alloted: "09", allocated: "05", status: "Allocate"
        },
        {
            img: "energy-ogre-icon.png", projectname: "Energy Ogre", startdate: '01 Mar 2023', enddate: "01 Oct 2023", alloted: "07", allocated: "04", status: "Allocate"
        },
        {
            img: "arab-news-icon.png", projectname: "Arab News", startdate: '01 Mar 2023', enddate: "01 Oct 2023", alloted: "06", allocated: "03", status: "Allocate"
        },
        {
            img: "srmg-icon.png", projectname: "SRMG Mobile App", startdate: '01 Mar 2023', enddate: "01 Oct 2023", alloted: "05", allocated: "03", status: "Allocate"
        },
        {
            img: "sopheon-icon.png", projectname: "Sopheon Mobile App", startdate: '01 Mar 2023', enddate: "01 Oct 2023", alloted: "03", allocated: "01", status: "Allocate"
        },
        {
            img: "plantd-icon.png", projectname: "PlantD", startdate: '01 Mar 2023', enddate: "01 Oct 2023", alloted: "03", allocated: "00", status: "Allocate"
        },
    ])

    const [keyrisks, setKeyRisks] = useState<any>([
        {
            img: "manga-app-icon.png", projectname: "Manga App", startdate: '01 Mar 2023', enddate: "01 Oct 2023", keyrisks: "09", pm: "Rosa Adams", mitidate: "01 Feb 2023"
        },
        {
            img: "energy-ogre-icon.png", projectname: "Energy Ogre", startdate: '01 Mar 2023', enddate: "01 Oct 2023", keyrisks: "07", pm: "Sam Chambers", mitidate: "08 Jul 2023"
        },
        {
            img: "arab-news-icon.png", projectname: "Arab News", startdate: '01 Mar 2023', enddate: "01 Oct 2023", keyrisks: "06", pm: "Nettie Jefferson", mitidate: "31 Dec 2023"
        },
        {
            img: "srmg-icon.png", projectname: "SRMG Mobile App", startdate: '01 Mar 2023', enddate: "01 Oct 2023", keyrisks: "05", pm: "Jesse Gray", mitidate: "31 May 2023"
        },
        {
            img: "sopheon-icon.png", projectname: "Sopheon Mobile App", startdate: '01 Mar 2023', enddate: "01 Oct 2023", keyrisks: "03", pm: "Samuel Norris", mitidate: "20 Dec 2023"
        },
        {
            img: "plantd-icon.png", projectname: "PlantD", startdate: '01 Mar 2023', enddate: "01 Oct 2023", keyrisks: "03", pm: "Nellie Horton", mitidate: "23 Nov 2023"
        },
    ])

    const [revenueTopInfo, setRevenueTopInfo] = useState<any>([
        {
            id: 1, img: "srmg-icon.png", projectname: "Srmg groups", amount: "$5,390"
        },
        {
            id: 2, img: "nba-icon.png", projectname: "NBA", amount: "$4,049"
        },
        {
            id: 3, img: "sopheon-icon.png", projectname: "Sopheon", amount: "$3,215"
        },
    ])
    const [revenueInfo, setRevenueInfo] = useState<any>([
        {
            id: 4, img: "srmg-icon.png", projectname: "Srmg groups", amount: "$3,215"
        },
        {
            id: 5, img: "energy-ogre-icon.png", projectname: "Energy Ogre", amount: "$3,215"
        },
        {
            id: 6, img: "sopheon-icon.png", projectname: "Sopheon", amount: "$3,215"
        },
        {
            id: 7, img: "plantd-icon.png", projectname: "PlantD", amount: "$3,215"
        },
        {
            id: 8, img: "portum-icon.png", projectname: "Portum", amount: "$3,215"
        },
        {
            id: 9, img: "thomson-icon.png", projectname: "Thomson Reuters", amount: "$3,215"
        },
        {
            id: 10, img: "everest-icon.png", projectname: "Everest", amount: "$3,215"
        },

    ])

    const [billableInfo, setBillableInfo] = useState<any>([
        {
            roles: "Developer", value: '15'
        },
        {
            roles: "Designer", value: '03'
        },
        {
            roles: "QA Tesing", value: '10'
        },
        {
            roles: "Project Manager", value: '07'
        },
        {
            roles: "Business Analyst", value: '07'
        },
    ])
    const sortFunction: any = () => {
        setResourceAllo(resourceallo.sort((a: any, b: any) => (a.projectname > b.projectname) ? 1 : ((b.projectname > a.projectname) ? -1 : 0)))
        console.log('resourceallo', resourceallo.sort((a: any, b: any) => (a.projectname > b.projectname) ? 1 : ((b.projectname > a.projectname) ? -1 : 0)));
    }
    const navigate = useNavigate()
    const handleClient = () => {
        navigate('/workspace')
    }
    const handleProject = () => {
        navigate('/projectview')
    }
    const handleResources = () => {
        navigate('/Resources')
    }

    return (
        <>
            <div className='dashboardcomponent'>
                <div className='dashboardhead'>
                    <span className='dashboardtext'>Dashboard</span>
                    <div className='dashboardbutton'>
                        <select className='datesel'>
                            <option value="weekly">Weekly</option>
                            <option value="monthly">Monthly</option>
                        </select>
                        <div className="left-btn"><img src={`${process.env.PUBLIC_URL}assets/images/ic_dashboard_leftplus.png`} alt="" /> <span className='btn-text'>New</span></div>
                    </div>
                </div>
                <div className='dashboard-Content-Container'>
                    <div className='dashboard-Left-Container'>
                        <div className='card_component'>
                            <div className='card_layout' onClick={handleClient}>
                                <div className='card_head'>
                                    <span className='dashbrd_icons'><div className='ic_dashboard-client'></div></span>
                                    <h5 className="card_text">Our Clients</h5>
                                </div>
                                <div className='card_element'>
                                    <h3 className='card_value'>08</h3>
                                    <span><div className='ic_dashboardcard-client'></div></span>
                                </div>
                            </div>
                            <div className='card_layout' onClick={handleProject}>
                                <div className='card_head'>
                                    <span className='dashbrd_icons'><div className='ic_dashboard-project'></div></span>
                                    <h5 className="card_text">Our Projects</h5>
                                </div>
                                <div className='card_element'>
                                    <h3 className='card_value'>25</h3>
                                    <span><div className='ic_dashboardcard-project'></div></span>
                                </div>
                            </div>
                            <div className='card_layout' onClick={handleResources}>
                                <div className='card_head'>
                                    <span className='dashbrd_icons'><div className='ic_dashboard-resource'></div></span>
                                    <h5 className="card_text">Our Resources</h5>
                                </div>
                                <div className='card_element'>
                                    <h3 className='card_value'>200</h3>
                                    <span><div className='ic_dashboardcard-resource'></div></span>
                                </div>
                            </div>
                        </div>
                        <div className='resource_allocation'>
                            <div className='resource_allocation_head'>
                                <span className='resource_allocation_text'>Resource Allocation</span>
                            </div>
                            <table className='table'>
                                <thead>
                                    <tr className='table-head'>
                                        <th className="tableHeader">
                                            <span className="d-flex align-items-center">Project Name <div className="ic_sort_DA_icon" onClick={() => sortFunction('Project_Name')} />
                                            </span>
                                        </th>
                                        <th className="tableHeader"> <span className="d-flex align-items-center" >
                                            Allotted<div className="ic_sort_DA_icon" onClick={() => sortFunction('Alloted')} />
                                        </span>
                                        </th>
                                        <th className="tableHeader"> <span className="d-flex align-items-center">
                                            Allocated<div className="ic_sort_DA_icon" onClick={() => sortFunction('Allocated')} /></span></th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {resourceallo && resourceallo?.map((list: any, index: any) => {
                                        return (
                                            <tr>
                                                <td>
                                                    <div className="project_icons">
                                                        <img className='pro-img'
                                                            src={`${process.env.PUBLIC_URL}assets/images/${list.img}`} alt=""></img>
                                                        <div className="projectName">{list.projectname}
                                                            <div className="startenddate">
                                                                <div className="startDatealign">{list.startdate}</div>
                                                                <span className="startDatealign"> &nbsp;-&nbsp; </span>
                                                                <div className="startDatealign"> {list.enddate}</div>
                                                            </div>
                                                        </div>
                                                    </div></td>
                                                <td>{list.alloted}</td>
                                                <td>{list.allocated}</td>
                                                <td className={list.status}>{list.status}</td>
                                            </tr>
                                        )
                                    }
                                    )}
                                </tbody>
                            </table>
                        </div>
                        <div className='key_risks'>
                            <div className='key_risks_head'>
                                <span className='key_risks_text'>Key Risks</span>
                            </div>
                            <table className='table'>
                                <thead>
                                    <tr className='table-head'>
                                        <th className="tableHeader">
                                            <span className="d-flex align-items-center">Project Name <div className="ic_sort_DA_icon" />
                                            </span>
                                        </th>
                                        <th className="tableHeader"> <span className="d-flex align-items-center">
                                            # Key Risks<div className="ic_sort_DA_icon" />
                                        </span>
                                        </th>
                                        <th className="tableHeader"> <span className="d-flex align-items-center">
                                            PM<div className="ic_sort_DA_icon" /></span></th>
                                        <th className="tableHeader"> <span className="d-flex align-items-center">
                                            Mitigation date<div className="ic_sort_DA_icon" /></span></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {keyrisks && keyrisks?.map((list: any, index: any) => {
                                        return (
                                            <tr>
                                                <td>
                                                    <div className="project_icons">
                                                        <img className='pro-img'
                                                            src={`${process.env.PUBLIC_URL}assets/images/${list.img}`} alt=""></img>
                                                        <div className="projectName">{list.projectname}
                                                            <div className="startenddate">
                                                                <div className="startDatealign">{list.startdate}</div>
                                                                <span className="startDatealign"> &nbsp;-&nbsp; </span>
                                                                <div className="startDatealign"> {list.enddate}</div>
                                                            </div>
                                                        </div>
                                                    </div></td>
                                                <td>{list.keyrisks}</td>
                                                <td>{list.pm}</td>
                                                <td>{list.mitidate}</td>
                                            </tr>
                                        )
                                    }
                                    )}

                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className='dashboard-Right-Container'>
                        <div className='revenue-Board-Container'>
                            <div className='revenue-Header-Container'>
                                Revenue Board
                            </div>
                            <div className='revenue-Content-Container'>
                                <div className='top-revenues-Container'>
                                    <div className='revenue-Brand-Container'>
                                        <div className='shapes_img'>
                                            <div className='rank-Container'>
                                                2
                                            </div>
                                            <div className='icon-Container'>
                                                <img className='pro-img'
                                                    src={`${process.env.PUBLIC_URL}assets/images/nbc-icon.png`} alt=""></img>
                                            </div>

                                            <div className='revenue-BrandName-Container'>
                                                NBA
                                            </div>
                                        </div>
                                        <div className='revenue-Amount-Container'>
                                            $4,049
                                        </div>

                                    </div>
                                    <div className='revenue-Brand-Container top-Brand-Container'>
                                        <div className='shapes_img'>
                                            <div className='rank-Container'>
                                                <div className='ic_dashboard_crown'></div>
                                            </div>
                                            <div className='icon-Container'>
                                                <img className='crown-brandimg'
                                                    src={`${process.env.PUBLIC_URL}assets/images/srmg-icon.png`} alt=""></img>
                                            </div>

                                            <div className='revenue-BrandName-Container' id="crown-brandname">
                                                Srmg Groups
                                            </div>
                                        </div>
                                        <div className='revenue-Amount-Container'>
                                            $5,390
                                        </div>
                                    </div>
                                    <div className='revenue-Brand-Container'>
                                        <div className='shapes_img'>
                                            <div className='rank-Container'>
                                                3
                                            </div>
                                            <div className='icon-Container'>
                                                <img className='pro-img'
                                                    src={`${process.env.PUBLIC_URL}assets/images/sopheon-icon.png`} alt=""></img>
                                            </div>
                                            <div className='revenue-BrandName-Container'>
                                                Sopheon
                                            </div>
                                        </div>
                                        <div className='revenue-Amount-Container'>
                                            $3,215
                                        </div>
                                    </div>
                                </div>
                                <div className='revenues-list-Container'>
                                    {revenueInfo && revenueInfo?.map((list: any, index: any) => {
                                        return (
                                            <>
                                                <div className='revenue-Brand-Container'>
                                                    <div className='rank-Container'>
                                                        {list.id}
                                                    </div>
                                                    <div className='icon-Container'>
                                                        <img className='pro-img'
                                                            src={`${process.env.PUBLIC_URL}assets/images/${list.img}`} alt=""></img>
                                                    </div>
                                                    <div className='revenue-BrandName-Container'>
                                                        {list.projectname}
                                                    </div>
                                                    <div className='revenue-Amount-Container'>
                                                        {list.amount}
                                                    </div>
                                                </div>
                                                <Divider />
                                            </>
                                        )
                                    }
                                    )}

                                </div>
                            </div>
                        </div>
                        <div className='billableinfo'>
                            <div className='billableinfohead'>
                                <span className='billableinfotext'>Billable & Non Billable Info</span>
                            </div>
                            <div className='billableinfocontent'>

                                {billableInfo && billableInfo?.map((list: any, index: any) => {
                                    return (
                                        <div className='billableinfocontentroles'>
                                            <div className='billableinforolestext'>{list.roles}</div>
                                            <div className='billableinforolesvalue'>{list.value}</div>
                                        </div>
                                    )
                                }
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div >

        </>
    )
}
