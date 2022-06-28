import React from "react";
import { HomeIcon } from "../icons/homeIcon";

export const UiDashboardHeader :React.FC = () => {
    return (
        <div className="w-full px-2 py-4  flex justify-center items-center content-center bg-inverse text-secondary">
            <div className="flex items-center">
                <HomeIcon  className="h-7 w-7 mr-3"/>
                <span>Dashboard</span>
            </div>
        </div>
    )
}