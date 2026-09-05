function Button({
    children,
    type = 'button',
    bgcolor,
    bgColor,
    textColor = 'text-black',
    className = '',
    ...props
}) {
    const bg = bgcolor || bgColor || 'bg-green-500';
    return(
        <button
            className={`inline-flex items-center justify-center rounded-lg px-4 py-2.5 text-sm font-bold shadow-sm transition duration-200 hover:-translate-y-0.5 hover:shadow-md hover:shadow-green-500/20 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-black disabled:cursor-not-allowed disabled:opacity-50 ${bg} ${textColor} ${className}`}
            type={type}
            {...props}
        >
            {children}
        </button>
    )
}
export default Button;
