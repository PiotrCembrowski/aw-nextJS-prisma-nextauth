"use client";

import { useEffect, useState } from "react";
import { DateRange, Range } from "react-date-range";
import { differenceInDays, eachDayOfInterval } from "date-fns";

const initialDateRange = {
  startDate: new Date(),
  endDate: new Date(),
  key: "selection",
};

export type Report = {
  id: string;
  costs: number;
};

interface ReportSidebarProps {
  userId: string | null;
  report: Report;
}

const LivingCostTable: React.FC<ReportSidebarProps> = () => {
  const [costs, setCosts] = useState<Number>(200);
  const [dateRange, seDateRange] = useState<Range>(initialDateRange);
  const [minDate, setMinDate] = useState<Date>(new Date());

  useEffect(() => {
    if (dateRange.startDate && dateRange.endDate) {
      const dayCount = differenceInDays(dateRange.endDate, dateRange.startDate);
    }
  }, [dateRange]);

  return (
    <aside className="mt-6 p-6 col-span-2 rounded-xl border border-gray-300 shadow-xl h-[450px]">
      <h2 className="mb-5 text-2xl">200$/daily</h2>

      <div className="mb-6 p-3 border border-gray-400 rounded-xl">
        <label className="block font-bold text-xs">Expenses</label>
        <select className="w-full -ml-1 text-xm" name="" id="">
          <option value="">Hotel</option>
          <option value="">Apartment</option>
          <option value="">Cab</option>
          <option value="">Dinner</option>
        </select>
      </div>

      <div className="w-full mb-6 py-6 text-center text-white bg-aw rounded-xl hover:bg-awDark">
        Show more
      </div>
      <div className="mb-4 flex justify-between align-center">
        <p>4 people:</p>
        <p>2000$/month</p>
      </div>
      <div className="mb-4 flex justify-between align-center">
        <p>Best area:</p>
        <p>City Center</p>
      </div>
      <hr />
      <div className="mt-4 flex justify-between align-center font-bold">
        <p>Total costs:</p>
        <p>2400$</p>
      </div>
    </aside>
  );
};

export default LivingCostTable;
