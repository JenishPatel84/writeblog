import React, {useId} from 'react'

const Select = React.forwardRef(function Select({
    options,
    label,
    className,
    ...props
}, ref) {
    const id = useId();
  return (
    <div>
        {label && (
            <label htmlFor={id} className="mb-2 block text-sm font-semibold text-slate-300">
                {label}
            </label>
        )}
        <select
            {...props}
            id={id}
            ref={ref}
            className={`w-full rounded-lg border border-green-900/40 bg-[#1a1a1a] px-3.5 py-2.5 text-slate-100 shadow-sm outline-none transition focus:border-green-500 focus:ring-2 focus:ring-green-500/20 ${className || ''}`}
        >
            {options?.map((option) => (
                <option key={option} value={option} className="bg-[#1a1a1a] text-slate-100">
                    {option}
                </option>
            ))}
        </select>
    </div>
  )
});

export default Select;
