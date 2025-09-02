import React from "react"

export interface  ColumnsProps extends React.HTMLProps<HTMLDivElement>{
    children?: React.ReactNode,
    className?: string
}

export const Columns = ({ children, className='col-12', ...props }:ColumnsProps) =>{
    return <div className={className} {...props}>{children}</div>
}