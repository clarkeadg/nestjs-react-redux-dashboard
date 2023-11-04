import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../redux/hooks'
import { fetchModalData } from '../redux/actions/modal'
import { fetchBills } from '../redux/actions/bills'
import { FaSpinner } from "react-icons/fa";

export default function BillList() {
  const loading = useAppSelector((state:any) => state.bills.loading)
  const errorMessage = useAppSelector((state:any) => state.bills.errorMessage)
  const items = useAppSelector((state) => state.bills.items)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchBills());
  }, [])

  if (loading) {
    return (
      <div className="h-10 flex items-center justify-center">
        <span className="animate-spin"><FaSpinner/></span>
      </div>
    )
  }

  if (errorMessage) {
    return (
      <div className="h-10 flex items-center justify-center">
        <span className="text-red-500">{ errorMessage }</span>
      </div>
    )
  }
  
  return (
    <table className="border-collapse table-auto w-full text-sm rounded-t-lg overflow-hidden">
      <thead className="bg-gray-200 font-medium text-black text-left">
        <tr>
          <th className="py-4 px-6 border border-gray-300">
            Amount
          </th>
          <th className="py-4 px-6 border border-gray-300">
            Due Date
          </th>
          <th className="py-4 px-6 border border-gray-300">
            Details
          </th>
        </tr>
      </thead>
      <tbody className="bg-white dark:bg-slate-800">{ items.map((item:any, index:number)=>{
        return (
          <tr key={index} onClick={()=>{ dispatch(fetchModalData('bills', item.id)) }} className="hover:bg-gray-100 hover:cursor-pointer">
            <td className="py-4 px-6 border border-gray-300">
              {`$${item.amount.toFixed(2)}`} 
            </td>
            <td className="py-4 px-6 border border-gray-300">
              { new Date(item.due_date).toDateString() }
            </td>
            <td className="py-4 px-6 border border-gray-300">
              { item.details && item.details.description }
            </td>
          </tr>
        )
      })}</tbody>        
    </table>
  );
}