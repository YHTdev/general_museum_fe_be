import apiCall from "../../../utils/apiCall";
import { HRD } from "../../Atoms/HumanReadableData";
import Iconx from "../../Atoms/Icons/iconx";
import NoDataMessage from "../../Atoms/NoDataMessage";
import { SelectTable, TableCell, TableRow } from "../../Atoms/UiTable";

const GalleryLists = ({ galleryLists, editGallery, deleteGallery }) => {
  return (
    <>
      <SelectTable>
        <thead className="text-sm font-semibold uppercase border-t border-b text-slate-500 bg-slate-50 border-slate-200">
          <TableRow>
            <TableCell isHeader={true}>#</TableCell>
            <TableCell isHeader={true}>Name</TableCell>
            <TableCell isHeader={true}>Museum Name</TableCell>
            <TableCell isHeader={true}>Created </TableCell>
            {/* <TableCell isHeader={true}>နောက်ဆုံးပြုပြင်သည့်ရက်စွဲ</TableCell> */}
            <TableCell className="text-right" isHeader={true}>
              <Iconx icon={`AdjustmentsIcon`} className={`w-5 h-5 shrink-0`} />
            </TableCell>
          </TableRow>
        </thead>
        <tbody className="text-sm divide-y divide-slate-200">
          {galleryLists.map((gallery, i) => (
            <tr key={i}>
              <TableCell>
                <div className="font-medium text-slate-800">{i + 1}</div>
              </TableCell>
              <TableCell>
                <div className="font-medium text-slate-800">{gallery.name}</div>
              </TableCell>
              <TableCell>
                <div className="font-medium text-slate-800">
                  {gallery.Museum.name}
                </div>
              </TableCell>
              <TableCell>
                <div className="font-medium text-slate-800">
                  <HRD date={gallery.createdAt} />
                </div>
              </TableCell>
              <TableCell className="text-center">
                <div className="flex items-center content-center justify-start space-x-3 font-medium text-slate-800">
                  <button onClick={() => editGallery(gallery.id, gallery)}>
                    <Iconx
                      icon={`PencilAltIcon`}
                      className={`w-5 h-5 shrink-0`}
                    />
                  </button>
                  <button
                    onClick={() => {
                      deleteGallery(gallery.id, gallery);
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
    </>
  );
};

export default GalleryLists;
