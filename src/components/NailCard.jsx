export default function NailCard({ nail }){
    return (
        <div id="one-pic">
            <img src={`${nail.picture}`} id="nail-pics"/>
            <p><strong>{ nail.name } </strong></p>
        </div>
    )

}