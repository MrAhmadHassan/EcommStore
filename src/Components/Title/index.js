const Title = (props)=>{
    return <>
    <div className="row">
        <div className="col-10 mx-auto my-2 text-center text-title">
            <h1 className="text-capitalize font-weight-bold">
                {props.name} {props.title}
            </h1>
        </div>
    </div>
    </>
}

export default Title;