import React from 'react'

const InformationDay = ({ day, textDay, post, formatDate }) => {
    const hasIntentions = post?.acf?.[day]?.intencje?.b?.length > 0;

    return (
        <>
            <tr className='flex justify-center items-center border-y-[2px] max-sm:flex-col'>
                <td className='w-full text-center border-r-[2px] px-[10px] py-[20px] font-medium max-sm:border-r-0 max-sm:border-b-[2px]'>{textDay} {formatDate(post.acf[day]?.data)}</td>
                <td className='w-full text-center px-[10px] max-sm:py-[20px]'>{post.acf[day]?.dzien}</td>
            </tr>
            {hasIntentions ? (
                post.acf[day]?.intencje.b.map((group, idx) => {
                    const formatText = (text) => {
                        return text.replace(/\n/g, '<br />');
                    };
                    return (
                        <tr key={idx} className={`flex justify-between items-center py-[10px] ${idx !== 0 ? 'border-t-1 border-t-gray-400' : ''}`}>
                            <td className="w-1/12 text-left pl-[20px] max-lg:w-1/6 max-sm:w-2/6">{group[0].c}</td>
                            <td className="w-11/12 text-left pr-[20px] max-lg:w-5/6 max-sm:w-4/6" dangerouslySetInnerHTML={{ __html: formatText(group[1].c) }} />
                        </tr>
                    )
                })
            ) : (
                <tr className="flex justify-between items-center py-[10px]">
                    <td className="w-full text-center">Brak danych</td>
                </tr>
            )}
        </>
    )
}

export default InformationDay