import React from 'react'
import RenderPageNumbers from './RenderPageNumbers'

const Pagination = ({ goToPreviousPage, goToNextPage, goToPage, currentPage, totalPages }) => {
    return (
        <div className="bg-white py-[12px] px-[12px] flex justify-center items-center max-sm:flex-col max-sm:gap-[8px]">
            <button
                onClick={goToPreviousPage}
                disabled={currentPage === 1}
                className={`mr-[16px] rounded-[5px] px-4 py-2 max-sm:mr-0 ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : 'bg-[#CDA272] text-black cursor-pointer duration-700 hover:bg-[#e7b67f]'}`}
            >
                Poprzednia
            </button>

            <RenderPageNumbers totalPages={totalPages} currentPage={currentPage} goToPage={goToPage} />

            <button
                onClick={goToNextPage}
                disabled={currentPage === totalPages || totalPages === 0}
                className={`ml-[16px] rounded-[5px] px-4 py-2 max-sm:ml-0 ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : 'bg-[#CDA272] text-black cursor-pointer duration-700 hover:bg-[#e7b67f]'}`}
            >
                Następna
            </button>
        </div>
    )
}

export default Pagination