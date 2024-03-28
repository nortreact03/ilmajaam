function Asukohad({asukohad, muudaAktiivset, kustutaAsukoht}) {
    if (!asukohad || asukohad.length === 0) {
        return <div>Asukohti pole, lisa mõni</div>
    }
    
    return (
        asukohad.map((koht, index) => {
            return (
                <div key={index}>
                    <span onClick={() => muudaAktiivset(index)} >{koht.nimetus}</span> 
                    <span onClick={() => kustutaAsukoht(index) } >X</span>
                </div>
            )
        })
    )
}

export default Asukohad;