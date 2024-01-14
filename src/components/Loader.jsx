import { Html } from '@react-three/drei'

const Loader = () => {
    return (
        <Html>
            <div className='flex justify-center items-center'>
                <div className='w-20 h-20 border-2 border-opacity-20 border-blue-500 border-t-blue-500 rounded-full animate-spin' />
                <h1><span className='text-xs'> (Give a few seconds for the animation to load) </span> </h1>
            </div>
        </Html>

    )
}

export default Loader