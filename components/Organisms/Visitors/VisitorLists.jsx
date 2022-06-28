import apiCall from "../../../utils/apiCall";
import { HRD } from "../../Atoms/HumanReadableData";
import Iconx from "../../Atoms/Icons/iconx";
import NoDataMessage from "../../Atoms/NoDataMessage";
import { SelectTable, TableCell, TableRow } from "../../Atoms/UiTable";

const VisitorLists = ({ visitorLists, viewQr, viewVisitor }) => {
  return (
    <>
      <div className="w-full ">
        <SelectTable>
          <thead className="text-sm font-semibold uppercase border-t border-b text-slate-500 bg-slate-50 border-slate-200">
            <TableRow>
              <TableCell isHeader={true}>#</TableCell>
              <TableCell isHeader={true}>Name</TableCell>
              <TableCell isHeader={true}>NRC</TableCell>
              <TableCell isHeader={true}>Phone Number</TableCell>
              <TableCell isHeader={true}>Email</TableCell>
              <TableCell isHeader={true}>Address</TableCell>
              <TableCell isHeader={true}>Created </TableCell>
              {/* <TableCell isHeader={true}>နောက်ဆုံးပြုပြင်သည့်ရက်စွဲ</TableCell> */}
              <TableCell className="text-right" isHeader={true}>
                <Iconx
                  icon={`AdjustmentsIcon`}
                  className={`w-5 h-5 shrink-0`}
                />
              </TableCell>
            </TableRow>
          </thead>
          <tbody className="text-sm divide-y divide-slate-200">
            {visitorLists.map((visitor, i) => (
              <tr key={i}>
                <TableCell>
                  <div className="font-medium text-slate-800">{i + 1}</div>
                </TableCell>
                <TableCell>
                  <div className="font-medium text-slate-800">
                    {visitor.name}
                  </div>
                </TableCell>
                <TableCell>
                  <div className="font-medium text-slate-800">
                    {visitor.nrc}
                  </div>
                </TableCell>
                <TableCell>
                  <div className="font-medium text-slate-800">
                    {visitor.phoneNumber}
                  </div>
                </TableCell>
                <TableCell>
                  <div className="font-medium text-slate-800">
                    {visitor.email}
                  </div>
                </TableCell>
                <TableCell>
                  <div className="font-medium text-slate-800">
                    {visitor.address}
                  </div>
                </TableCell>
                <TableCell>
                  <div className="font-medium text-slate-800">
                    <HRD date={visitor.createdAt} />
                  </div>
                </TableCell>
                <TableCell className="text-center">
                  <div className="flex items-center content-center justify-start space-x-3 font-medium text-slate-800">
                    <button onClick={() => viewQr(visitor.id, visitor)}>
                      <Iconx
                        icon={`QrcodeIcon`}
                        className={`w-5 h-5 shrink-0`}
                      />
                    </button>
                    <button onClick={() => viewVisitor(visitor.id, visitor)}>
                      <Iconx
                        icon={`EyeIcon`}
                        className={`w-5 h-5 shrink-0 text-blue-500`}
                      />
                    </button>
                  </div>
                </TableCell>
              </tr>
            ))}
          </tbody>
        </SelectTable>
      </div>
    </>
  );
};

export default VisitorLists;
