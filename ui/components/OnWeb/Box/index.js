import React from 'react'

export const Box = ({ webName, icon, href }) => {
    return (
        <div>
            <a href={href} target='_blank'>

                <div
                    className="sm:w-[330px] h-[60px] object-contain  border-t-[1px] border-r-[1px] border-l-[1px] border-b-4 border-b-[#09f755] border-t-gray-400 mt-8 sm:mr-8
                      border-r-gray-400 border-l-gray-400 flex justify-between px-4 items-center text-white ">
                    <div>
                        {webName}
                    </div>
                    <div>
                        {icon}
                    </div>

                </div>
            </a>
        </div>

    )
}
