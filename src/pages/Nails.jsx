import NailCard from '../components/NailCard'
import { nails } from '../data'
export default function Nails(){
    return (
        <div id="container">
            {nails.map((nail)=> (
            <NailCard nail={nail} />
            ))}
        </div>
        )
}