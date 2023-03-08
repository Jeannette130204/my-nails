import MaterialCard from '../components/MaterialCard'
export default function Materials({ nails }){
    return(
        <div id="material-body">
        {nails.map((nail)=>(
        <MaterialCard nail={nail}/>
        ))}
        </div>
    )
}