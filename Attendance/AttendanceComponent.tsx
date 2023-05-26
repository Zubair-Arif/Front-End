import { useState } from 'react'
import "./AttendanceComponent.scss";
import { Divider } from '@mui/material';

export default function AttendanceComponent() {
    const [displayData, setDisplayData] = useState<any>([
        {
            date: 'Mon, Jan 2, 2023', punchin: [""], punchout: [""], total: "", status: "Holiday"
        },
        {
            date: 'Tue, Jan 3, 2023', punchin: [""], punchout: [""], total: "", status: "Holiday"
        },
        {
            date: 'Wed, Jan 4, 2023', punchin: ["09:30 AM"], punchout: ["09:53 AM"], total: "10:00 Hrs", status: "Present"
        },
        {
            date: 'Thu, Jan 5, 2023', punchin: ["09:53 AM"], punchout: ["07:43 PM"], total: "08:49 Hrs", status: "Present"
        },
        {
            date: 'Fri, Jan 6, 2023', punchin: ["09:30 AM", "11:45 AM", "02:00 PM"], punchout: ["11:30 AM", "01:00 PM", "04:30 PM"], total: "07:00 Hrs", status: ""
        },

    ])
    const [summaryData, setSummaryData] = useState<any>([
        {
            status: "Present", values: 3
        },
        {
            status: "Absent", values: 0
        },
        {
            status: "Leave", values: 0
        },
        {
            status: "Holiday", values: 2
        },

    ])

    return (
        <div className='attendancecomponent'>
            <div className='attendancehead'>
                <span className='attendancetext'>Time Log</span>
                <div className='calendar'>
                    <span className="backbutton"><div className="ic_attendance-left"></div></span>
                    <span className='calendartext'>02 Jan,2023 to 08 Jan,2023</span>
                    <span className="forwardbutton"><div className="ic_attendance-right"></div></span>
                    <select className='attenddatesel' disabled>
                        <option value="weekly">Weekly</option>
                        <option value="monthly">Monthly</option>
                    </select>
                </div>
            </div>
            {/* <div className="d-flex col-md-6 form-group flex-column">
                    <label className="form-label ">Client Type</label>
                    <div id="navbarCollapse" className="collapse navbar-collapse">
                        <ul>
                            <li className="nav-item dropdown">
                                <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Messages</a>
                                <div className="dropdown-menu">
                                    <a href="#" className="dropdown-item">Inbox</a>
                                    <a href="#" className="dropdown-item">Drafts</a>
                                    <a href="#" className="dropdown-item">Sent Items</a>
                                    <div className="dropdown-divider">
                                    </div>
                                    <a href="#" className="dropdown-item">Trash</a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div> */}
            {/* <div className='timelog_table'>
                <table className='table'>
                    <thead>
                        <tr className='timelog_table-head'>
                            <th className="tableHeader" scope="col">
                                <span className="d-flex align-items-center">Date
                                </span>
                            </th>
                            <th className="tableHeader" scope="col"> <span className="d-flex align-items-center">
                                Punch In
                            </span>
                            </th>
                            <th className="tableHeader" scope="col"> <span className="d-flex align-items-center">
                                Punch Out</span></th>
                            <th className="tableHeader" scope="col"> <span className="d-flex align-items-center">
                                Total</span></th>
                            <th className="tableHeader" scope="col"> <span className="d-flex align-items-center">
                                Status</span></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Mon, Jan 2, 2023</td>
                            <td> - </td>
                            <td> - </td>
                            <td> - </td>
                            <td className='holiday'> Holiday </td>
                        </tr>
                        <tr>
                            <td>Tue, Jan 3, 2023</td>
                            <td> - </td>
                            <td> - </td>
                            <td> - </td>
                            <td className='holiday'> Holiday </td>
                        </tr>
                        <tr>
                            <td>Wed, Jan 4, 2023</td>
                            <td> 09:30 AM </td>
                            <td> 08:30 PM </td>
                            <td> 10:00 Hrs </td>
                            <td className='present'> Present </td>
                        </tr>
                        <tr>
                            <td>Thu, Jan 5, 2023</td>
                            <td> 09:53 AM </td>
                            <td> 07:43 PM </td>
                            <td> 08:49 Hrs </td>
                            <td className='present'> Present </td>
                        </tr>
                        <tr>
                            <td>Fri, Jan 6, 2023</td>
                            <td>
                                <ul>
                                    <li>09:30 AM</li>
                                    <li>11:45 AM</li>
                                    <li>02:00 PM</li>
                                </ul> </td>
                            <td> <ul>
                                <li>11:30 AM</li>
                                <li>01:00 PM</li>
                                <li>04:30 PM</li>
                            </ul> </td>
                            <td> - </td>
                            <td> - </td>
                        </tr>
                    </tbody>
                </table>
                <table className='table'>

                    <thead>
                        <tr className='timelog_table-head'>
                            <th className="tableHeader" scope="col">
                                <span className="d-flex align-items-center">Date
                                </span>
                            </th>
                            <th className="tableHeader" scope="col"> <span className="d-flex align-items-center">
                                Punch In
                            </span>
                            </th>
                            <th className="tableHeader" scope="col"> <span className="d-flex align-items-center">
                                Punch Out</span></th>
                            <th className="tableHeader" scope="col"> <span className="d-flex align-items-center">
                                Total</span></th>
                            <th className="tableHeader" scope="col"> <span className="d-flex align-items-center">
                                Status</span></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Mon, Jan 2, 2023</td>
                            <td> - </td>
                            <td> - </td>
                            <td> - </td>
                            <td className='holiday'> Holiday </td>
                        </tr>
                        <tr>
                            <td>Tue, Jan 3, 2023</td>
                            <td> - </td>
                            <td> - </td>
                            <td> - </td>
                            <td className='holiday'> Holiday </td>
                        </tr>
                        <tr>
                            <td>Wed, Jan 4, 2023</td>
                            <td> 09:30 AM </td>
                            <td> 08:30 PM </td>
                            <td> 10:00 Hrs </td>
                            <td className='present'> Present </td>
                        </tr>
                        <tr>
                            <td>Thu, Jan 5, 2023</td>
                            <td> 09:53 AM </td>
                            <td> 07:43 PM </td>
                            <td> 08:49 Hrs </td>
                            <td className='present'> Present </td>
                        </tr>
                        <tr>
                            <td>Fri, Jan 6, 2023</td>
                            <td>
                                <ul>
                                    <li>09:30 AM</li>
                                    <li>11:45 AM</li>
                                    <li>02:00 PM</li>
                                </ul> </td>
                            <td> <ul>
                                <li>11:30 AM</li>
                                <li>01:00 PM</li>
                                <li>04:30 PM</li>
                            </ul> </td>
                            <td> - </td>
                            <td> - </td>
                        </tr>
                    </tbody>
                </table>
            </div> */}
            <div className='attendance_table'>
                <div className="TeamRoaster">
                    <div className=" teamtable"
                    //  onScroll={(e: any) => handleScroll(e)}
                    >
                        <table className="table table-fixed">
                            <thead>
                                <tr className="table-head">
                                    <th className="tableHeader name" scope="col">
                                        Date
                                        <div />
                                    </th>
                                    <th className="tableHeader" scope="col">
                                        <span className="d-flex align-items-center">
                                            Punch In
                                            <div />
                                        </span>
                                    </th>
                                    <th className="tableHeader" scope="col">
                                        <span className="d-flex align-items-center">
                                            Punch Out
                                            <div />
                                        </span>
                                    </th>
                                    <th className="tableHeader" scope="col">
                                        <span className="d-flex align-items-center">
                                            Total
                                            <div />
                                        </span>
                                    </th>
                                    <th className="tableHeader" scope="col">
                                        Status
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {displayData && displayData?.map((list: any, index: any) => {
                                    return (
                                        <tr className="project-table">
                                            <td>
                                                {list.date}
                                            </td>
                                            <td>{list.punchin?.map((list: any, index: any) => (<p>{list || "-"}</p>))}</td>
                                            <td>{list.punchout?.map((list: any, index: any) => (<p>{list || "-"}</p>))}</td>
                                            <td>{list.total || "-"}</td>
                                            <td className={list?.status}>
                                                {list?.status || "-"}
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className='attendancesum'>
                    <div className='attendancetext'>Attendance Summary</div>
                    {summaryData && summaryData?.map((list: any, index: any) => {
                        return (
                            <>
                                <div className='att_sum'>
                                    <div className={list.status}>
                                        {list.status}
                                    </div>
                                    <div className='value'>
                                        {list.values}
                                    </div>
                                </div>
                                <div><Divider /></div>
                            </>
                        );
                    })}

                </div>
            </div>
        </div>
    )
}
