import { useState } from "react";

function Lisa({lisaAsukoht}) {
	const [nimetus, setNimetus] = useState("");
	const [lat, setLat] = useState("");
	const [long, setLong] = useState("");

    const lisamine = (event) => {
        event.preventDefault()
        lisaAsukoht({nimetus, lat, long})
        setNimetus("")
        setLat("")
        setLong("")
    }
	return (
		<form onSubmit={lisamine}>
			<h1>Lisa uus asukoht</h1>
            <div>
			<input 
                type="text" 
                value={nimetus} 
                onChange={({target}) => setNimetus(target.value)}
                placeholder="Asukoht"
            />
			<input 
                type="text" 
                value={lat} 
                onChange={({target}) => setLat(target.value)}
                placeholder="Laius"
            />
			<input 
                type="text" 
                value={long} 
                onChange={({target}) => setLong(target.value)}
                placeholder="Pikkus"
            />
            </div>
            <div>
            <input className="btn btn-primary" type="submit" value="Lisa" />

            </div>
		</form>
	);
}

export default Lisa;
