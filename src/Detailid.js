function Detailid({koht, ilmPraegu}) {
    if (!ilmPraegu) {
        return (
            <div>andmed puuduvad</div>
        )
    }
    return (
        <div>
            <h1>{koht.nimetus}</h1>
            <div className="row">
                <div className="col-4">Kellaaeg</div>
                <div className="col-4" > {ilmPraegu.time}  </div>
            </div>
            <div className="row">
                <div className="col-4">Temperatuur</div>
                <div className="col-4" > {ilmPraegu.temperature}  </div>
            </div>
            <div className="row">
                <div className="col-4">Tuule kiirus</div>
                <div className="col-4" > {ilmPraegu.windspeed}  </div>
            </div>
        </div>
    )
}

export default Detailid;