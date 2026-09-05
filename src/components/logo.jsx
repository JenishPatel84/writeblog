function Logo({width = 'auto'}) {
    return (
        <span style={{width}} className="group inline-flex items-center gap-3">
            <span className="relative grid h-10 w-10 shrink-0 place-items-center overflow-hidden rounded-xl bg-green-500 text-lg font-black text-black shadow-lg shadow-green-500/30 transition-transform duration-200 group-hover:-rotate-6">
                J
                <span className="absolute -bottom-1 -right-1 h-4 w-4 rounded-full bg-black ring-2 ring-green-500" />
            </span>
            <span className="flex flex-col leading-none">
                <span className="text-lg font-black tracking-tight text-white">Jenish&apos;s</span>
                <span className="mt-1 text-[0.65rem] font-bold uppercase tracking-[0.24em] text-green-400">Blog</span>
            </span>
        </span>
    )
}
export default Logo;
