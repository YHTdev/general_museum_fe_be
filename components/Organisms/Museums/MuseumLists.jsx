import apiCall from "../../../utils/apiCall";
import { HRD } from "../../Atoms/HumanReadableData";
import Iconx from "../../Atoms/Icons/iconx";
import NoDataMessage from "../../Atoms/NoDataMessage";
import { SelectTable, TableCell, TableRow } from "../../Atoms/UiTable";

const MuseumLists = ({ museumLists, editMuseum, deleteMuseum }) => {
  return (
    <>
      <SelectTable>
        <thead className="text-sm font-semibold uppercase border-t border-b text-slate-500 bg-slate-50 border-slate-200">
          <TableRow>
            <TableCell isHeader={true}>#</TableCell>
            <TableCell isHeader={true}>Name</TableCell>
            <TableCell isHeader={true}>Location</TableCell>
            <TableCell isHeader={true}>Address</TableCell>
            <TableCell isHeader={true}>Created </TableCell>
            {/* <TableCell isHeader={true}>နောက်ဆုံးပြုပြင်သည့်ရက်စွဲ</TableCell> */}
            <TableCell className="text-right" isHeader={true}>
              <Iconx icon={`AdjustmentsIcon`} className={`w-5 h-5 shrink-0`} />
            </TableCell>
          </TableRow>
        </thead>
        <tbody className="text-sm divide-y divide-slate-200">
          {museumLists.map((museum, i) => (
            <tr key={i}>
              <TableCell>
                <div className="font-medium text-slate-800">{i + 1}</div>
              </TableCell>
              <TableCell>
                <div className="font-medium text-slate-800"> {museum.name}</div>
              </TableCell>
              <TableCell>
                <div className="font-medium text-slate-800">
                  {museum.location}
                </div>
              </TableCell>
              <TableCell>
                <div className="font-medium text-slate-800">
                  {museum.address}
                </div>
              </TableCell>
              <TableCell>
                <div className="font-medium text-slate-800">
                  <HRD date={museum.createdAt} />
                </div>
              </TableCell>
              <TableCell className="text-center">
                <div className="flex items-center content-center justify-start space-x-3 font-medium text-slate-800">
                  <button onClick={() => editMuseum(museum.id, museum)}>
                    <Iconx
                      icon={`PencilAltIcon`}
                      className={`w-5 h-5 shrink-0`}
                    />
                  </button>
                  <button
                    onClick={() => {
                      deleteMuseum(museum.id, museum);
                    }}>
                    <Iconx
                      icon={`TrashIcon`}
                      className={`w-5 h-5 shrink-0 text-red-500`}
                    />
                  </button>
                </div>
              </TableCell>
            </tr>
          ))}
        </tbody>
      </SelectTable>

      {/* if data not found show no data message */}
      {/* {museumLists ? (
        <NoDataMessage />
      ) : (
        <SelectTable>
          <thead className="text-sm font-semibold uppercase border-t border-b text-slate-500 bg-slate-50 border-slate-200">
            <TableRow>
              <TableCell isHeader={true}>#</TableCell>
              <TableCell isHeader={true}>Name</TableCell>
              <TableCell isHeader={true}>Location</TableCell>
              <TableCell isHeader={true}>Address</TableCell>
              <TableCell isHeader={true}>Created Data</TableCell>
              <TableCell className="text-right" isHeader={true}>
                <Iconx
                  icon={`AdjustmentsIcon`}
                  className={`w-5 h-5 shrink-0`}
                />
              </TableCell>
            </TableRow>
          </thead>
          <tbody className="text-sm divide-y divide-slate-200">
            {museumLists.map((list, i) => (
              <tr key={i}>
                <TableCell>
                  <div className="font-medium text-slate-800">{i + 1}</div>
                </TableCell>
                <TableCell>
                  <div className="font-medium text-slate-800"> {museum.name}</div>
                </TableCell>
                <TableCell>
                  <div className="font-medium text-slate-800">
                    {museum.location}
                  </div>
                </TableCell>
                <TableCell>
                  <div className="font-medium text-slate-800">
                    {museum.address}
                  </div>
                </TableCell>
                <TableCell>
                  <div className="font-medium text-slate-800">
                    {humanReadableDate}
                  </div>
                </TableCell>
                <TableCell className="text-center">
                  <div className="flex items-center content-center justify-start space-x-3 font-medium text-slate-800">
                    <button
                    //   onClick={() => {
                    //     editGallery(gallery.id, gallery);
                    //             }}
                    >
                      <Iconx
                        icon={`PencilAltIcon`}
                        className={`w-5 h-5 shrink-0`}
                      />
                    </button>
                    <button
                    //   onClick={() => {
                    //     deleteGallery(gallery.id);
                    //             }}
                    >
                      <Iconx
                        icon={`TrashIcon`}
                        className={`w-5 h-5 shrink-0 text-red-500`}
                      />
                    </button>
                  </div>
                </TableCell>
              </tr>
            ))}
          </tbody>
        </SelectTable>
      )} */}
    </>
  );
};

export default MuseumLists;
