const LivingCostTable = () => {
  return (
    <aside className="mt-6 p-6 col-span-2 rounded-xl border border-gray-300 shadow-xl">
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
    </aside>
  );
};

export default LivingCostTable;
