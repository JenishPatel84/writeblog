import React, {useId} from 'react'

const Input = React.forwardRef(
    function Input({
        label,
        type = 'text',
        className = '',
        ...props
    }, ref) {
        const id = useId();
        return(
            <div className="space-y-2">
                {label && (
                    <label className="block text-sm font-semibold text-slate-300" htmlFor={id}>
                        {label}
                    </label>
                )}
                <input
                    type={type}
                    className={`w-full rounded-lg border border-green-900/40 bg-[#1a1a1a] px-3.5 py-2.5 text-slate-100 shadow-sm outline-none transition placeholder:text-slate-500 focus:border-green-500 focus:ring-2 focus:ring-green-500/20 ${className}`}
                    ref={ref}
                    {...props}
                    id={id}
                />
            </div>
        )
    }
)
export default Input;
