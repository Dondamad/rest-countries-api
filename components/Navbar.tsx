
import ThemeSwitch from './ThemeSwitch'


function Navbar() {
    return (
        <nav className="flex items-center justify-between w-full h-20 px-4 mx-auto shadow sm:px-20 dark:bg-gray-700">
            <h1 className='text-sm font-extrabold text-neutral-900 sm:text-2xl dark:text-white'>Where in the world?</h1>
            <ThemeSwitch />
        </nav>
    )
}

export default Navbar