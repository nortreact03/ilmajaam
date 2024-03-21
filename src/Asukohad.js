function Asukohad({asukohad, muudaAktiivset}) {
    return (
        asukohad.map((koht, index) => {
            return (
                <div key={index} onClick={() => muudaAktiivset(index)}>
                    {koht.nimetus}
                </div>
            )
        })
    )
}

export default Asukohad;