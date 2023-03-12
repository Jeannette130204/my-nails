export default function AddNew(){
    const initialInfo={
        url:'',
        name:'',
        material:''
    }

    return (
    <div id="new-form">
        <h1>Add New Nail Set</h1>
        <form>
        <div>
            <label><strong>Picture Url: </strong></label>
            <input name="url" type="text"/>
        </div><br/>
        <div>
            <label><strong>Nail Set Name: </strong></label>
            <input name="name" type="text"/>
        </div><br/>
        <div>
        <label><strong>Material: </strong></label>
        <input name="material" className="border-[1px] border-slate-400 p-1 rounded" />
        </div><br/>
        <button><strong>submit</strong></button>
        </form>

    </div>
    )
}