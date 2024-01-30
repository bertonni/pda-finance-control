import { InputProps } from './types'

export const Input = ({ label, ...rest}: InputProps) => {
  return (
    <div className='flex flex-col mt-3 w-full'>
      <label className='label-medium' htmlFor={label}>{label}</label>
      <input className='h-10 border rounded px-3 w-full' id={label} {...rest} />
    </div>
  )
}
