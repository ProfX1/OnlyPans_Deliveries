import clsx from "clsx";

function getClassName({ className}){
    return clsx(
        'text-white text-lg font-bold rounded-xl transition duration-300 cursor-pointer focus:outline:none focus:ring-2 focus:ring-opacity-50',
        className
    )
}
const size = {
    small:'px-4 py-3',
    medium:'px-6 py-4',
    large: 'w-full px-4 py-3',

}
const variants ={
    primary:'bg-primary_color focus:ring-primary_color',
    secondary:'bg-secondary_color focus:ring-secondary_color',
    dark:'bg-black focus:ring-white',
};


const Button = ({
    children,
    className,
    size= 'small',
    variant='primary',
    ...rest
}) => {
    return(
        <button className={clsx(
            size[size],
            variants[variant],
            getClassName({className})
            
            )}
            {...rest}
        >
                {children}
        </button>
    )
}
export default Button;