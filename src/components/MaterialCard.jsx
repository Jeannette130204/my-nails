
export default function MaterialCard({ nail }){
    return(
        <div id="material-card">
            <h1 id="name">{nail.name}</h1>
            <p id="material"><strong>Material: </strong> {nail.material.join(", ")}</p>
        </div>
    )
}