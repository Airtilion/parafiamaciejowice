import React from 'react'

const RenderPageNumbers = ({totalPages, currentPage, goToPage}) => {
    const pageNumbers = [];
    const maxVisiblePages = 5;
    const ellipsis = '...';

    if (totalPages <= maxVisiblePages) {
        for (let i = 1; i <= totalPages; i++) {
            pageNumbers.push(
                <button
                    key={i}
                    onClick={() => goToPage(i)}
                    className={`px-3 py-1 mx-1 rounded ${currentPage === i ? 'bg-[#CDA272] text-black' : 'bg-gray-200 text-black cursor-pointer'} duration-700 hover:bg-[#e7b67f]`}
                >
                    {i}
                </button>
            );
        }
    } else {
        pageNumbers.push(
            <button
                key={1}
                onClick={() => goToPage(1)}
                className={`px-3 py-1 mx-1 rounded ${currentPage === 1 ? 'bg-[#CDA272] text-black' : 'bg-gray-200 text-black cursor-pointer'} duration-700 hover:bg-[#e7b67f]`}
            >
                1
            </button>
        );

        if (currentPage > 3) {
            pageNumbers.push(
                <span key="start-ellipsis" className="px-3 py-1 mx-1 text-black">
                    {ellipsis}
                </span>
            );
        }

        const startPage = Math.max(2, currentPage - 1);
        const endPage = Math.min(totalPages - 1, currentPage + 1);

        for (let i = startPage; i <= endPage; i++) {
            pageNumbers.push(
                <button
                    key={i}
                    onClick={() => goToPage(i)}
                    className={`px-3 py-1 mx-1 rounded ${currentPage === i ? 'bg-[#CDA272] text-black' : 'bg-gray-200 text-black cursor-pointer'} duration-700 hover:bg-[#e7b67f]`}
                >
                    {i}
                </button>
            );
        }

        if (currentPage < totalPages - 2) {
            pageNumbers.push(
                <span key="end-ellipsis" className="px-3 py-1 mx-1 text-black">
                    {ellipsis}
                </span>
            );
        }

        pageNumbers.push(
            <button
                key={totalPages}
                onClick={() => goToPage(totalPages)}
                className={`px-3 py-1 mx-1 rounded-[5px] ${currentPage === totalPages ? 'bg-[#CDA272] text-black' : 'bg-gray-200 text-black cursor-pointer'} duration-700 hover:bg-[#e7b67f]`}
            >
                {totalPages}
            </button>
        );
    }
    return pageNumbers;
}

export default RenderPageNumbers