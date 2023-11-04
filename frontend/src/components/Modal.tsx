import { useAppDispatch, useAppSelector } from '../redux/hooks'
import { toggalModal } from '../redux/actions/modal'
import { FaTimes, FaSpinner } from 'react-icons/fa';

export default function Modal() {
  const loading = useAppSelector((state) => state.modal.loading)
  const errorMessage = useAppSelector((state) => state.modal.errorMessage)
  const type = useAppSelector((state) => state.modal.type)
  const data = useAppSelector((state) => state.modal.data)
  const isOpen = useAppSelector((state) => state.modal.isOpen)
  const dispatch = useAppDispatch()

  return (
    <div id="modal" className={`${isOpen ? "" : "hidden"} fixed inset-0 z-30 flex items-center justify-center overflow-auto bg-black bg-opacity-50`}>

        {/* Modal inner */}
        <div className="-mt-40 max-w-3xl w-full sm:w-1/2 px-4 py-2 mx-auto text-left bg-white rounded-lg shadow-lg">
            {/* Title */}
            <div className="flex items-center justify-between">
                <h5 className="mr-3 font-bold text-lg text-black max-w-none">
                  { (type == "bills") && "Bill" }
                  { (type == "invoices") && "Invoice" }
                </h5>

                {/* Close */}
                <button type="button" className="z-50 cursor-pointer" onClick={()=>{ dispatch(toggalModal(false)) }}>
                    <FaTimes/>
                </button>
            </div>

            {/* Content */}
            <div className="py-5">

              { loading && <div className="h-10 flex items-center justify-center">
                <span className="animate-spin"><FaSpinner/></span>
              </div> }

              { errorMessage && <div className="h-10 flex items-center justify-center">
                <span className="text-red-500">{ errorMessage }</span>
              </div> }

              { (data && data.id) && <table className="border-collapse table-auto w-full text-sm rounded-t-lg overflow-hidden">
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
                <tbody className="bg-white dark:bg-slate-800">
                  <tr className="hover:bg-gray-100 hover:cursor-pointer">
                    <td className="py-4 px-6 border border-gray-300">
                      {`$${data.amount.toFixed(2)}`} 
                    </td>
                    <td className="py-4 px-6 border border-gray-300">
                      { new Date(data.due_date).toDateString() }
                    </td>
                    <td className="py-4 px-6 border border-gray-300">
                      { data.details && data.details.description }
                    </td>
                  </tr>                  
                </tbody>        
              </table> }
 
            </div>
        </div>
    </div>
  );
}