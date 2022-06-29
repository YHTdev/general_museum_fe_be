import { NextPage } from "next";
import { SummaryForm } from "../../components/organisms/admin/summary";
import { AppWrapper } from "../../components/templates/AdminLayout";

const AdminPage:NextPage =()=>{
    return(
        <AppWrapper>
            <SummaryForm />
        </AppWrapper>
    )
}

export default AdminPage