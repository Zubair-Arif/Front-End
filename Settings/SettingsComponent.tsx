import React from "react"
import "./SettingsComponent.scss";
import { Tabs, Tab, TabList, TabPanel } from "react-tabs";
import AssetTab from "./AssetTab/AssetTab";
import GeneralTab from "./GeneralTab/GeneralTab";
import ResourcesTab from "./ResourcesTab/ResourcesTab";
import RolesTab from "./RolesTab/RolesTab";
import StatusTab from "./StatusTab/StatusTab";
import TechSkillsTab from "./TechSkillsTab/TechSkillsTab";

export default function SettingsComponent() {
    return (
        <div className='settingscomponent'>
            <div className='settingshead'>
                <div className='settingsbutton'>
                    <span className="backbutton"><div className="ic_left_icon"></div></span>
                </div>
                <span className='settingstext'>Settings</span>
            </div>
            <div className="settingstab">
                <Tabs>
                    <TabList>
                        <Tab>General</Tab>
                        <Tab>Status</Tab>
                        <Tab>Roles</Tab>
                        <Tab>Technical Skills</Tab>
                        <Tab>Resources</Tab>
                        <Tab>Assets</Tab>
                    </TabList>
                    <TabPanel>
                        <GeneralTab />
                    </TabPanel>
                    <TabPanel>
                        <StatusTab />
                    </TabPanel>

                    <TabPanel>
                        <RolesTab />
                    </TabPanel>

                    <TabPanel>
                        <TechSkillsTab />
                    </TabPanel>

                    <TabPanel>
                        <ResourcesTab />
                    </TabPanel>

                    <TabPanel>
                        <AssetTab />
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    )
}
