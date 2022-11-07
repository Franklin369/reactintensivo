import './card.scss'

export function Card (props){
    return (
        <div className='card'>
            {props.children}
        </div>
    )
}

