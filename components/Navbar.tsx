
import ThemeSwitch from './ThemeSwitch'


function Navbar() {
    return (
        <nav className="max-w-full shadow">
            <div className='flex items-center justify-between max-w-[1440px] h-20 px-4 mx-auto sm:px-20 dark:bg-gray-700'>
                <h1 className='text-sm font-extrabold text-neutral-900 sm:text-2xl dark:text-white'>Where in the world?</h1>
                <ThemeSwitch />
            </div>

        </nav>
    )
}

export default Navbar