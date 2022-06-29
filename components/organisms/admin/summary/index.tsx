import React from "react";
import { BookIcon } from "../../../atoms/icons/bookIcon";
import { CategoryIcon } from "../../../atoms/icons/categoryIcon";
import { UiSummaryCard } from "../../../atoms/UiSummaryCard";

interface props {}

export const SummaryForm: React.FC = () => {
  return (
    <div className="grid grid-cols-12 gap-3">
      <div className="col-span-12 px-2 py-2 md:col-span-3">
        <UiSummaryCard
          title="အမျိုးအစားများ"
          icon={<CategoryIcon className="w-12 h-12" />}
          total={23}
        />
      </div>
      <div className="col-span-12 px-2 py-2 md:col-span-3">
        <UiSummaryCard
          title="စာအုပ်အရေအတွက်"
          icon={<BookIcon className="w-12 h-12" />}
          total={23}
        />
      </div>
      <div className="col-span-12 px-2 py-2 md:col-span-3">
        <UiSummaryCard
          title="သတင်း"
          icon={<BookIcon className="w-12 h-12" />}
          total={23}
        />
      </div>
      <div className="col-span-12 px-2 py-2 md:col-span-3">
        <UiSummaryCard
          title="သတင်း"
          icon={<BookIcon className="w-12 h-12" />}
          total={23}
        />
      </div>
    </div>
  );
};
