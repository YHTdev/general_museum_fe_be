import { NextPage } from "next";
import { BookForm } from "../../../components/organisms/admin/book";
import { AppWrapper } from "../../../components/templates/AdminLayout";

const BookAdmin:NextPage =()=>{
    return(
        <AppWrapper>
            <BookForm />
        </AppWrapper>
    )
}

export default BookAdmin